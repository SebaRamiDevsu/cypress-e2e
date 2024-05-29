export class CartElements{

    // Return the place order button to open modal
    static get placeOrderButton(){
        return cy.get('[data-target="#orderModal"]')
    }
    // return all the inputs for the modal
    static get inputsModalPlaceOrder(){
        return {
            get name() {
                return cy.get('#name')
            },
            get country() {
                return cy.get('#country')
            },
            get city() {
                return cy.get('#city')
            },
            get creditCard() {
                return cy.get('#card')
            },
            get month() {
                return cy.get('#month')
            },
            get year() {
                return cy.get('#year')
            }
        }
    }
    // return all buttons inside modal
    static get buttonsModalPlaceOrder(){
        return {
            get close() {
                return cy.contains('button', 'Close')
            },
            get purchase() {
                return cy.contains('button', 'Purchase')
            }
        }
    }
    // return items in cart
    static get productsInCart(){
        return cy.get('#tbodyid > tr')
    }
    // return confirming message from purchase
    static get thankYouMessage(){
        return cy.get('.sa-success')
    }
}