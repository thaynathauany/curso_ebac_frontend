/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })
    it('Deve levar o usuário até o formulário de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao') // Tira um screenshot do formulário de inscrição
    })
    it('Deve Preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Thayna Santos')
        cy.get('input[name="email"]').type('thayna@example.com')
        cy.get('input[name="telefone"]').type('11985008039')
        cy.get('input[name="endereco"]').type('Rua Exemplo, 123')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('button[type="submit"]').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido') // Tira um screenshot do formulário de inscrição preenchido
    })
})