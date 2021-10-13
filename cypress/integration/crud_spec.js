import { kebabCase } from '../../src/utils/Utils';

before('Start server', () => {
  cy.configure();
});

describe('CRUD tiltakstype', () => {
  const tittel = 'Test tiltakstypetittel';
  const ingress = 'Ingress ingress ingress ingress';
  const beskrivelse =
    'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.';

  it('Opprett tiltakstype', () => {
    cy.getByTestId('knapp_opprett-tiltakstype').click();

    cy.url().should('include', '/tiltakstyper/opprett');

    cy.getByTestId('header_opprett-tiltakstype').should('exist');

    cy.getByTestId('input_tittel').click().should('be.focused');
    cy.getByTestId('input_tittel').type(tittel);

    cy.getByTestId('input_ingress').click().should('be.focused');
    cy.getByTestId('input_ingress').type(ingress);

    cy.getByTestId('input_beskrivelse').click().should('be.focused');
    cy.getByTestId('input_beskrivelse').type(beskrivelse);

    cy.getByTestId('submit-knapp_opprett-tiltakstype').contains('Opprett tiltakstype').click();

    cy.get(`.Toastify__toast-container`).should('contain', 'Oppretting av tiltakstype vellykket!');

    cy.url().should('include', '/tiltakstyper/');

    cy.getByTestId('tiltakstype_header_' + kebabCase(tittel)).should('contain', tittel);

    cy.getByTestId('tiltakstype_ingress').should('contain', ingress);

    cy.getByTestId('tiltakstype_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('tilbakeknapp').contains('Tilbake').click();

    cy.getByTestId('header-tiltakstyper').should('contain', 'Tiltakstyper');

    cy.getByTestId('tabellrad_' + kebabCase(tittel)).should('contain', tittel);
  });
});
