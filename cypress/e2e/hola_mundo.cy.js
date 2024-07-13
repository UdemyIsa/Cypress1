/// <reference types="cypress" />

describe('Primer test con Cypress', () =>{
    it("Esto es un hola mundo desedee Cypress", () => {
        cy.log("Bienvenidos a Cypress")
        cy.visit('https://cij-sitio-desarrollo.azurewebsites.net/Acceso/Login')
        cy.wait(2000)
        cy.get('#NombreUsuario').type("brunorios")
        cy.get('#Contrasenia').type("Qwerty.9")
        cy.get('#btnLogin').click()
    })
})