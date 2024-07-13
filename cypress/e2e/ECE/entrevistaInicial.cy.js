/// <reference types="Cypress" />

describe ("   ", () => {

    it(" ", () => {
        cy.visit('https://cij-sitio-desarrollo.azurewebsites.net/Principal')
        cy.wait(1000)
        cy.title().should('eq','CIJ 3.0')

        cy.log("La función tittle funciona bien")
    })
})
