import { Logger } from "../../util/logger";
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

        Logger.subStep('Go to the cart')
        HomeMethods.goToCart()

        Logger.subStep('Validate if cart is empty')
        this.validateProductsInCart()

        Logger.subStep('Click on place order to open modal')
        this.clickPlaceOrderButton()

        Logger.subStep('Insert name on the form')
        this.insertName(CartData.validInformation.name)

        Logger.subStep('Insert country on the form')
        this.insertCountry(CartData.validInformation.country)

        Logger.subStep('Insert city on the form')
        this.insertCity(CartData.validInformation.city)

        Logger.subStep('Insert credit card number on the form')
        this.insertCreditCard(CartData.validInformation.creditCard)

        Logger.subStep('Insert month on the form')
        this.insertMonth(CartData.validInformation.month)

        Logger.subStep('Insert year on the form')
        this.insertYear(CartData.validInformation.year)

        Logger.subStep('Click on Purchace button')
        this.clickPurchace()

        Logger.subStep('Validate purchase with the modal of confirmation')
        this.validatePurchase()
    }
}