import { HomeMethods } from "../home/home.methods";
import { CartData } from "./cart.data";
import { CartElements } from "./cart.elements";

export class CartMethods{

    // Methods for insert the information for the modal
    static insertName(name){
        CartElements.inputsModalPlaceOrder.name.invoke('val', name)
    }
    static insertCountry(country){
        CartElements.inputsModalPlaceOrder.country.invoke('val', country)
    }
    static insertCity(city){
        CartElements.inputsModalPlaceOrder.city.invoke('val', city)
    }
    static insertCreditCard(card){
        CartElements.inputsModalPlaceOrder.creditCard.invoke('val', card)
    }
    static insertMonth(month){
        CartElements.inputsModalPlaceOrder.month.invoke('val', month)
    }
    static insertYear(year){
        CartElements.inputsModalPlaceOrder.year.invoke('val', year)
    }

    // Method to validate that the cart is not empty
    static validateProductsInCart(){
        CartElements.productsInCart.should('exist')
    }

    // Method to click on place order button and opens the modal
    static clickPlaceOrderButton(){
        CartElements.placeOrderButton.click()
    }

    // Method to close the place order modal
    static closePlaceOrderModal(){
        CartElements.buttonsModalPlaceOrder.close.click()
    }

    // Method to click on purchase button
    static clickPurchace(){
        CartElements.buttonsModalPlaceOrder.purchase.click()
    }

    // Method to validate the purchase
    static validatePurchase(){
        CartElements.thankYouMessage.should('exist')
    }

    static completePlaceOrderModal(){
        HomeMethods.goToCart()
        this.validateProductsInCart()
        this.clickPlaceOrderButton()
        this.insertName(CartData.validInformation.name)
        this.insertCountry(CartData.validInformation.country)
        this.insertCity(CartData.validInformation.city)
        this.insertCreditCard(CartData.validInformation.creditCard)
        this.insertMonth(CartData.validInformation.month)
        this.insertYear(CartData.validInformation.year)
        this.clickPurchace()
        this.validatePurchase()
    }
}