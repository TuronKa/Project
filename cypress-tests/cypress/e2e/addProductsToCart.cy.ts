import { faker } from '@faker-js/faker';
import ItemToCart from '../pages/itemsToCart';
import product from '../fixtures/products.json'


describe('Add Products to Cart', () => {



    it('should select a product and add it to the cart', () => {

        cy.visit('/');

        const itemToCart = new ItemToCart(product.item1.id);


        itemToCart.openDetail()
    });

});
