import { Logger } from "../../util/logger"
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
        Logger.subStep('Click on a categorie on the left menu')
        this.goToCategorie(categorie)

        Logger.subStep('Click on a product')
        this.clickOnProduct(productName)

        Logger.subStep('Add the product')
        this.clickOnAddProduct()

        Logger.subStep('Validate if product was added with the alert')
        this.validateAddProduct()

        Logger.subStep('Go Home')
        this.goHome()
    }


}