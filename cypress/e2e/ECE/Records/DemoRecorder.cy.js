/// <reference types="Cypress" />

import 'cypress-plugin-tab' //Para acceder a la función tabulador para pasar de un campo a otro
require ('cypress-xpath')


describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1600, 689)
    
       cy.visit('https://sistemacij-desarrollo.azurewebsites.net/Acceso/Login')
    
       cy.get('.k-state-border-down > .container-fluid > .row > #IE_1').click()
    
       cy.get('.k-state-border-down > .container-fluid > .row > .col-md-6 > #IE_1').click()
    
       cy.get('#IE_1 > .col-8 > #Form1 > .mt-5 > #btnLogin').click()
    
       cy.visit('https://sistemacij-desarrollo.azurewebsites.net/Principal')
    
       cy.get('#divMenuCircular > #slider-1 > #icon-2 > .no-border > .ico-mp').click()
    
       cy.visit('https://sistemacij-desarrollo.azurewebsites.net/ExpedienteClinicoElectronico/Principal')
    
       cy.get('#bodyId > .cont-top-smaller').click()
    
       cy.get('.row > .col-5 > .row > .col-12 > .ico-entrevistaInicial').click()
    
       cy.visit('https://sistemacij-desarrollo.azurewebsites.net/EntrevistaInicial/Identificacion?TipoServicioId=1')
    
       cy.get('.k-widget > #wmAvisoPrivacidad > div > div > #i_AvisoPrivacidad').click()
    
       cy.get('#wmAvisoPrivacidad > div > .footer > .text-center > .k-checkbox-label').click()
    
       cy.get('#wmAvisoPrivacidad > div > .footer > .text-center > #chkAviso').check('true')
    
       cy.get('#wmAvisoPrivacidad > div > .footer > .text-center > #btnAceptarAviso').click()
    
       cy.get('#bodyId > .cont-top-smaller > .container-fluid > .container-fluid').click()
    
       cy.get('#bodyId > .cont-top-smaller > .container-fluid > div > #toolEntrevistaInicial').click()
    
       cy.get('.form-group > .form-check > .form-check > #TipoConsulta_1 > .k-radio-label').click()
    
       cy.get('.form-group > .form-check > .form-check > #TipoConsulta_1 > #ComunTipoConsultaId_1').type('1')
    
       cy.get('.container-fluid > .container-fluid > #Form1 > .row:nth-child(12) > .col-12').click()
    
       cy.get('.row > .col-xl-3 > .form-group > div > #NumeroFamiliares').click()
    
       cy.get('.row > .col-xl-3 > .form-group > div > #NumeroFamiliares').type('2')
    
       cy.get('#bodyId > .cont-top-smaller > .container-fluid > .container-fluid > #Form1').click()
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #Nombre').click()
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #Nombre').type('Daniela')
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #ApellidoPaterno').type('Fernández')
    
       cy.get('#Form1 > .row:nth-child(13) > .col > .row:nth-child(1) > .semi').click()
    
       cy.get('.form-group > .k-widget > .k-picker-wrap > .k-select > .k-icon').click()
    
       cy.get('.k-content > tbody > tr > .k-state-hover > .k-link').click()
    
       cy.get('.k-content > tbody > tr > .k-state-hover > .k-link').click()
    
       cy.get('.k-content > tbody > tr > .k-state-hover > .k-link').click()
    
       cy.get('.k-content > tbody > tr > .k-state-hover > .k-link').click()
    
       cy.get('#Form1 > .row > .col > .row:nth-child(3) > .col-12').click()
    
       cy.get('.container-fluid > .container-fluid > #Form1 > .row:nth-child(12) > .col-12').click()
    
       cy.get('.col-lg-6:nth-child(1) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       cy.get('.k-animation-container > #cbEntidad-list > .k-list-scroller > #cbEntidad_listbox > .k-state-hover').click()
    
       cy.get('.col-lg-6:nth-child(2) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       cy.get('.k-animation-container > #cbMunicipio-list > .k-list-scroller > #cbMunicipio_listbox > .k-state-hover').click()
    
       cy.get('.container-fluid > #Form1 > .row > .col > .row:nth-child(5)').click()
    
       cy.get('#Form1 > .row:nth-child(15) > .col > .row > .semi').click()
    
       cy.get('.col > .row > .col-lg-7 > .form-group > #Calle').click()
    
       cy.get('.col > .row > .col-lg-7 > .form-group > #Calle').type('Calle nueve')
    
       cy.get('#Form1 > .row > .col > .row:nth-child(5) > .semi').click()
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #Numero').click()
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #Numero').type('12')
    
       cy.get('.row > .col > .row:nth-child(5) > .col-12 > p').click()
    
       cy.get('.row > .col > .row > .col-lg-7:nth-child(2) > .form-group').click()
    
       cy.get('.col > .row > .col-lg-7 > .form-group > #Colonia').click()
    
       cy.get('.col > .row > .col-lg-7 > .form-group > #Colonia').type('Colonia nueve')
    
       cy.get('.col > .row > .col-lg-3 > .form-group > #CodigoPostal').type('11490')
    
       cy.get('.container-fluid > #Form1 > .row > .col > .row:nth-child(5)').click()
    
       cy.get('.col-lg-4:nth-child(4) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       //cy.xpath('//*[@id="Form1"]/div[4]/div/div[7]/div[4]/div/span[1]/span/input').click()
    
       cy.get('.container-fluid > #Form1 > .row:nth-child(15) > .col > .row:nth-child(1)').click()
    
       cy.get('#bodyId > .cont-top-smaller > .pt-4').click()
    
       cy.get('.col-lg-4:nth-child(2) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       cy.get('.k-animation-container > #cbTipoSeguroSocialId-list > .k-list-scroller > #cbTipoSeguroSocialId_listbox > .k-state-hover').click()
    
       cy.get('.row:nth-child(15) > .col > .row > .col-12 > p').click()
    
       cy.get('.col-lg-8:nth-child(1) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       cy.get('.k-animation-container > #cbFuenteReferenciaId-list > .k-list-scroller > #cbFuenteReferenciaId_listbox > .k-state-hover').click()
    
       cy.get('.row > .col > .row > .col-lg-8:nth-child(1) > .form-group').click()
    
       cy.get('.row > .col > .row > .col-lg-8:nth-child(2) > .form-group').click()
    
       cy.get('.col-lg-8:nth-child(2) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()
    
       //cy.xpath('//*[@id="Form1"]/div[6]/div/div[2]/div[1]/div/span[1]/span/input').click()
    
       cy.get('.row > .col > .row > .col-lg-8:nth-child(2) > .form-group').click()
    
    })

    describe('test_name', function() {

        it('what_it_does', function() {
       
           cy.viewport(1600, 689)
        
           cy.visit('https://sistemacij-desarrollo.azurewebsites.net/EntrevistaInicial/Identificacion?TipoServicioId=1')
        
           cy.get('.container-fluid > .container-fluid > #Form1 > .justify-content-center > .col-12').click()
        
           //cy.get(':nth-child(6) > :nth-child(1) > .form-group > .k-widget > .k-dropdown-wrap > .k-input').click()

           cy.get('.form-group > .k-widget > .k-state-hover > .k-select > .k-icon').click()
        
           cy.get('.k-animation-container > #cbEntidad-list > .k-list-scroller > #cbEntidad_listbox > .k-state-hover').click()
        
           cy.get('.row > .col-lg-6 > .form-group > .k-widget > .k-state-hover').click()
        
           cy.get('.form-group > .k-widget > .k-state-hover > .k-select > .k-icon').click()
        
           cy.get('.k-animation-container > #cbMunicipio-list > .k-list-scroller > #cbMunicipio_listbox > .k-state-hover').click()
        
           cy.get('.container-fluid > #Form1 > .row > .col > .row:nth-child(5)').click()
        
        })
       
       })


       describe('test_name', function() {

        it('what_it_does', function() {
       
           cy.viewport(1600, 689)
        
           cy.visit('https://sistemacij-desarrollo.azurewebsites.net/EntrevistaInicial/Identificacion?TipoServicioId=1')
        
           cy.get('#Form1 > .row > .col > .row > .col-lg-3:nth-child(5)').click()
        
           cy.get('.col > .row > .col-lg-3 > .form-group > #CodigoPostal').click()
        
           cy.get('.col > .row > .col-lg-3 > .form-group > #CodigoPostal').type('11490')

           //cy.get(':nth-child(6) > :nth-child(1) > .form-group > .k-widget > .k-dropdown-wrap > .k-select')
        
           cy.get('.k-animation-container > #cbEntidad-list > .k-list-scroller > #cbEntidad_listbox > .k-state-hover').click()
        
           cy.get('.k-animation-container > #cbMunicipio-list > .k-list-scroller > #cbMunicipio_listbox > .k-state-hover').click()
        
        })
       
       })
       
       
   
   })
   