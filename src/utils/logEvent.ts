import {
  createFrontendLogger,
  createMockFrontendLogger,
  DEFAULT_FRONTENDLOGGER_API_URL,
  setUpErrorReporting,
} from '@navikt/frontendlogger/lib';

export const logEvent =
  process.env.REACT_APP_BACKEND_API_ROOT === ''
    ? createFrontendLogger('amt-informasjon-flate', DEFAULT_FRONTENDLOGGER_API_URL)
    : createMockFrontendLogger('amt-informasjon-flate');

export function setupLogger() {
  if (process.env.REACT_APP_BACKEND_API_ROOT === '') {
    setUpErrorReporting(logEvent);
  }
}
