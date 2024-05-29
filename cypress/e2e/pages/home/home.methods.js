import { HomeElements } from "./home.elements"

export class HomeMethods{
    static goToCart(){
        HomeElements.cartMenu.click()
    }
    static goHome(){
        HomeElements.homeMenu.click()
    }
    // Categorie is an index, a numeric value
    static goToCategorie(categorie){
        HomeElements.categoriesLeftMenu.eq(categorie).click()
    }
    // product is a string value
    static clickOnProduct(productName){
        HomeElements.productFromList(productName).click()
    }
    // Validate that the product is added to the cart
    static validateAddProduct(){
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Product added.')
        })
    }
    // Add product
    static clickOnAddProduct(){
        cy.contains('a', 'Add to cart').should('exist')
        cy.contains('a', 'Add to cart').click()
    }
    static addProductToCard(categorie, productName){
        this.goToCategorie(categorie)
        this.clickOnProduct(productName)
        this.clickOnAddProduct()
        this.validateAddProduct()
        this.goHome()
    }


}