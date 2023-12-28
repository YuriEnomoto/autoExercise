import { el } from "./elements"

const HomePage = {

    go: function() {
        cy.visit('/')
        cy.get(el.featuresItens).should('be.visible')
    }

}

export default HomePage