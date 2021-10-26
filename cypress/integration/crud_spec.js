import { kebabCase } from '../../src/utils/Utils';

before('Start server', () => {
  cy.configure();
});

describe('CRUD tiltaksvariant', () => {
  const tittel = 'Test tiltaksvariant';
  const ingress = 'Ingress ingress ingress ingress';
  const beskrivelse =
    'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.';

  it('Opprett tiltaksvariant', () => {
    const borderWhite = 'rgb(106, 106, 106)';
    const borderRed = 'rgb(186, 58, 38)';
    const feilmeldingTomtFelt = 'Dette feltet kan ikke være tomt';

    cy.getByTestId('knapp_opprett-tiltaksvariant').click();

    cy.url().should('include', '/tiltaksvarianter/opprett');

    cy.getByTestId('header_opprett-tiltaksvariant').should('contain', 'Opprett tiltaksvariant');

    cy.getByTestId('input_tittel').should('have.css', 'border-color', borderWhite);

    cy.getByTestId('input_ingress').click().should('be.focused').type(ingress);
    cy.getByTestId('input_beskrivelse').click().should('be.focused').type(beskrivelse);

    cy.getByTestId('submit-knapp_opprett-tiltaksvariant').contains('Opprett tiltaksvariant').click();

    cy.getByTestId('form__rediger-opprett').contains(feilmeldingTomtFelt).should('have.css', 'border-color', borderRed);

    cy.getByTestId('input_tittel').click().should('be.focused').type(tittel);

    cy.getByTestId('submit-knapp_opprett-tiltaksvariant').contains('Opprett tiltaksvariant').click();

    cy.get(`.Toastify__toast-container`).should('contain', 'Oppretting vellykket!');
    // class="Toastify__toast-container Toastify__toast-container--top-right"

    cy.url().should('include', '/tiltaksvarianter/');

    cy.getByTestId('tiltaksvariant_header_' + kebabCase(tittel)).should('contain', tittel);

    cy.getByTestId('tiltaksvariant_ingress').should('contain', ingress);

    cy.getByTestId('tiltaksvariant_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('tilbakeknapp').contains('Tilbake').click();

    cy.getByTestId('header-tiltaksvarianter').should('contain', 'Tiltaksvarianter');

    cy.getByTestId('tabell_oversikt-tiltaksvarianter').contains('td', tittel);
    cy.getByTestId('tabell_oversikt-tiltaksvarianter').contains('td', ingress);
  });

  xit('Slett tiltaksvariant', () => {
    cy.getByTestId('tabell_oversikt-tiltaksvarianter').children().children().should('have.length', 24);
    cy.getByTestId('sokefelt_tiltaksvariant').focus().type(tittel);
    cy.getByTestId('tabell_oversikt-tiltaksvarianter').children().children().should('have.length', 2);

    cy.getByTestId('tabell_oversikt-tiltaksvarianter').contains('td', tittel).click();

    cy.getByTestId('tiltaksvariant_header_' + kebabCase(tittel)).should('contain', tittel);
    cy.getByTestId('tiltaksvariant_ingress').should('contain', ingress);
    cy.getByTestId('tiltaksvariant_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('knapp_rediger-tiltaksvariant').click();

    cy.getByTestId('slett-knapp_rediger-tiltaksvariant').click();
  });

  xit('Rediger tiltaksvariant', () => {
    const tittel = 'Opplæring';
    const ingress = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';
    const beskrivelse = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';

    const nyTittel = 'Opplæring';
    const nyIngress = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';
    const nyBeskrivelse = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';

    cy.getByTestId('tabell_oversikt-tiltaksvarianter').children().children().should('have.length.at.least', 1);
    cy.getByTestId('tabell_oversikt-tiltaksvarianter').contains('td', tittel).click();

    cy.url().should('include', '/tiltaksvarianter/1');

    cy.getByTestId('tiltaksvariant_header_opplaering').should('contain', tittel);
    cy.getByTestId('tiltaksvariant_ingress').should('contain', ingress);
    cy.getByTestId('tiltaksvariant_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('knapp_rediger-tiltaksvariant').click();

    cy.url().should('include', '/tiltaksvarianter/1/rediger');

    cy.getByTestId('input_tittel').should('not.be.empty').click().should('be.focused').type(nyTittel);
    cy.getByTestId('input_ingress').should('not.be.empty').click().should('be.focused').type(nyIngress);
    cy.getByTestId('input_beskrivelse').should('not.be.empty').click().should('be.focused').type(nyBeskrivelse);
  });
});
