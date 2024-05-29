export class HomeElements{
    static get categoriesLeftMenu (){
        return cy.get('.list-group > a')
    }
    static productFromList(productName){
        return cy.contains('a', productName)
    }
    static get cartMenu(){
        return cy.get('#cartur')
    }
    static get homeMenu(){
        return cy.contains('a', 'Home')
    }
}