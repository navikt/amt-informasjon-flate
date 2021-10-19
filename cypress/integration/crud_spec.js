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

    cy.getByTestId('header_opprett-tiltakstype').should('contain', 'Opprett tiltakstype');

    cy.getByTestId('input_tittel').click().should('be.focused').type(tittel);
    cy.getByTestId('input_ingress').click().should('be.focused').type(ingress);
    cy.getByTestId('input_beskrivelse').click().should('be.focused').type(beskrivelse);
    cy.getByTestId('submit-knapp_opprett-tiltakstype').contains('Opprett tiltakstype').click();

    cy.get(`.Toastify__toast-container`).should('contain', 'Oppretting av tiltakstype vellykket!');

    cy.url().should('include', '/tiltakstyper/');

    cy.getByTestId('tiltakstype_header_' + kebabCase(tittel)).should('contain', tittel);

    cy.getByTestId('tiltakstype_ingress').should('contain', ingress);

    cy.getByTestId('tiltakstype_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('tilbakeknapp').contains('Tilbake').click();

    cy.getByTestId('header-tiltakstyper').should('contain', 'Tiltakstyper');

    cy.getByTestId('tabell_oversikt-tiltakstyper').contains('td', tittel);
    cy.getByTestId('tabell_oversikt-tiltakstyper').contains('td', ingress);
  });

  it('Slett tiltakstype', () => {
    cy.getByTestId('tabell_oversikt-tiltakstyper').children().children().should('have.length', 24);
    cy.getByTestId('sokefelt_tiltakstype').focus().type(tittel);
    cy.getByTestId('tabell_oversikt-tiltakstyper').children().children().should('have.length', 2);

    cy.getByTestId('tabell_oversikt-tiltakstyper').contains('td', tittel).click();

    cy.getByTestId('tiltakstype_header_' + kebabCase(tittel)).should('contain', tittel);
    cy.getByTestId('tiltakstype_ingress').should('contain', ingress);
    cy.getByTestId('tiltakstype_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('knapp_rediger-tiltakstype').click();

    cy.getByTestId('slett-knapp_rediger-tiltakstype').click();
  });

  xit('Rediger tiltakstype', () => {
    const tittel = 'Opplæring';
    const ingress = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';
    const beskrivelse = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';

    const nyTittel = 'Opplæring';
    const nyIngress = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';
    const nyBeskrivelse = 'Laborum officia rerum sed debitis qui odit suscipit aperiam quo.';

    cy.getByTestId('tabell_oversikt-tiltakstyper').children().children().should('have.length.at.least', 1);
    cy.getByTestId('tabell_oversikt-tiltakstyper').contains('td', tittel).click();

    cy.url().should('include', '/tiltakstyper/1');

    cy.getByTestId('tiltakstype_header_opplaering').should('contain', tittel);
    cy.getByTestId('tiltakstype_ingress').should('contain', ingress);
    cy.getByTestId('tiltakstype_beskrivelse').should('contain', beskrivelse);

    cy.getByTestId('knapp_rediger-tiltakstype').click();

    cy.url().should('include', '/tiltakstyper/1/rediger');

    cy.getByTestId('input_tittel').should('not.be.empty').click().should('be.focused').type(nyTittel);
    cy.getByTestId('input_ingress').should('not.be.empty').click().should('be.focused').type(nyIngress);
    cy.getByTestId('input_beskrivelse').should('not.be.empty').click().should('be.focused').type(nyBeskrivelse);
  });
});
