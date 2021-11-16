import { AMPLITUDE_DEV_KEY } from "../../config";
// Hindrer crash ved server-side kjøring (amplitude.js fungerer kun i browser)
const amplitude = typeof window !== "undefined" ? require("amplitude-js") : () => null;
const apiKey = AMPLITUDE_DEV_KEY;
const SESSION_STORAGE_KEY = "dsbn-kommerfra";

const config = {
  saveEvents: false,
  includeUtm: true,
  includeReferrer: true,
  trackingOptions: {
    city: false,
    ip_address: false,
  },
};

export const initAmplitude = () => {
  if (amplitude) {
    amplitude.getInstance().init(apiKey, undefined, config);
    logAmplitudeEvent("sidevisning", {
      sidetittel: document.title,
    });
  }
};

function setKommerFra(data: string) {
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, data);
}

function getKommerFra() {
  const kommerFra = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  return kommerFra || "";
}

function hentKommerFra() {
  const erBrowser = typeof window !== "undefined";
  const kommerFraDefault = "";
  if (erBrowser) {
    const kommerFraUrl = new URLSearchParams(window.location.search).get("kommerFra");
    if (kommerFraUrl) {
      setKommerFra(kommerFraUrl);
      return kommerFraUrl;
    } else {
      return getKommerFra();
    }
  }
  return kommerFraDefault;
}

export function logAmplitudeEvent(eventName: string, data?: any): Promise<any> {
  return new Promise(function (resolve: any) {
    const kommerFra = hentKommerFra();
    const eventData = data ? { ...data, kommerFra } : { kommerFra };
    if (amplitude) {
      amplitude.getInstance().logEvent(eventName, eventData, resolve);
    }
  });
}
