/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar, editar e remover um contato', () => {
    // Adicionar contato
    cy.get('input[type="text"]').type('Thayna Santos')
    cy.get('input[type="email"]').type('thayna@example.com')
    cy.get('input[type="tel"]').type('11985008039')

    cy.get('.adicionar').click()

    cy.contains('Thayna Santos').should('exist')

    // Editar contato
    cy.get('.edit').last().click()

    cy.get('input[type="email"]')
      .clear()
      .type('thayna@alterado.com')

    cy.get('.alterar').click()

    cy.contains('thayna@alterado.com').should('exist')

    // Remover contato
    cy.get('.delete').last().click()

    cy.contains('Thayna Santos').should('not.exist')

    cy.screenshot('agenda-contato-adicionado-editado-removido')
  })
})