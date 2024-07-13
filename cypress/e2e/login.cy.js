/// <reference types="Cypress" />

import 'cypress-plugin-tab' //Para acceder a la función tabulador para pasar de un campo a otro
require ('cypress-xpath')

describe('Primer test con Cypress', () =>{
    it("Prueba de homonimia", () => {
        cy.log("Bienvenidos")
        //cy.visit('https://cij-sitio-desarrollo.azurewebsites.net/Acceso/Login')
        //https://sistemacij-desarrollo.azurewebsites.net/Acceso/Login
        cy.visit('https://sistemacij-desarrollo.azurewebsites.net/Acceso/Login')
        cy.wait(2000)
        cy.get('#NombreUsuario').type("brunorios")
        cy.get('#Contrasenia').type("Qwerty.9")
        cy.get('#btnLogin').click()
        cy.get('#icon-2 > .no-border > .ico-mp').click()
        cy.title().should('eq','CIJ 3.0')
        cy.log("Título correcto")

        //Búsqueda de pacientes
        //cy.get(':nth-child(4) > .col-md-5 > .row > .col-12 > .btn-icos-sm').click()

        //Escribir el número de expediente
        // cy.get('#txtNoExpediente').type("8850-000001")
        // cy.get('#btnMostrar').click()
        // cy.wait(2000)
        // cy.get(':nth-child(2) > div > .k-button').click()

        cy.get('.col-xl-7 > :nth-child(1) > .col-12 > .btn-icos-sm').click({force:true})
        //cy.get('.chkAviso').check({force:true})
        cy.xpath('//*[@id="chkAviso"]').check({force:true})
        cy.get('#btnAceptarAviso').click({force:true})
        cy.get('#TipoConsulta_1 > .k-radio-label').click({force:true})
        cy.get('#Nombre').type("PEDRO")
        cy.get('#ApellidoPaterno').type("RUIZ")
        cy.get('#ApellidoMaterno').type("SANTOS")
        // cy.get('#FechaNacimiento').type("09/01/1986")
        cy.get('#Calle').type("Calle uno")
        cy.get('#Numero').type("21")
        cy.get('#Colonia').type("Colonia")
        cy.get('#CodigoPostal').type("11490").tab().click().type("09 - Ciudad de México").click().tab().type("Azcapotzalco").click().tab()
        cy.get('#Telefono').type("5512345678")
        cy.get('#Correo').type("santos@gmail.com").tab().tab().click().type("ZAR1")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').type("Ninguno").click({force:true})
        cy.xpath('//*[@id="Form1"]/div[6]/div/div[2]/div[1]/div/span[1]/span/input').type("Anuncios TV").click({force:true})
        
        cy.get('#btnValidacion').click({force:true})



    })




})