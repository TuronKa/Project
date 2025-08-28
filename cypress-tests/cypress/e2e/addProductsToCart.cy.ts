import { faker } from '@faker-js/faker';
import ItemToCart from '../pages/itemsToCart';
import product from '../fixtures/products.json';
import LoginData from '../pages/loginData';


describe('Add Products to Cart', () => {



    it('should select a product and add it to the cart', () => {

        cy.visit('/');

        const itemToCart = new ItemToCart(product.item1.id);


        itemToCart.openDetail()
        itemToCart.addToCart()

        itemToCart.checkProductQuantityInCart().should('contain', '1')

        itemToCart.homePage()

        const itemToCart2 = new ItemToCart(product.item2.id);

        itemToCart2.openDetail()
        itemToCart2.addToCart()

        itemToCart2.checkProductQuantityInCart().should('contain', '2')

        //cy.wait(5000)

        itemToCart.openCart()

        itemToCart.checkProduct1DetailsInCart()
        itemToCart2.checkProduct2DetailsInCart()

        itemToCart.proceedButton()

        cy.login();

        itemToCart.checkUserIsLoggedIn();

        itemToCart.proceedButton2();

        itemToCart.billingAddress();

        itemToCart.proceedButton3();

        itemToCart.selectPaymentMethod();

        itemToCart.confirmButton();

        itemToCart.successMessage();

    });

});
