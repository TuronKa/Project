export default class ItemToCart {
    productId = ''
    constructor(productId: string) { this.productId = productId }
    addProductToCart = () => cy.get(`[data-test="product-${this.productId}"]`);

    itemName = () => this.addProductToCart().find('[data-test="product-name"]')
    openDetail = () => this.itemName().click()

    addToCartButton = () => cy.get('[data-test="add-to-cart"]')

    addToCart = () => this.addToCartButton().click()

    checkProductQuantityInCart = () => cy.get('[data-test="nav-cart"]')

    homePage = () => cy.visit('/')

    openCart = () => cy.get('[data-test="nav-cart"]').should('be.visible').click({ force: true })

    checkProduct1DetailsInCart = () => {
        cy.get('[data-test="product-title"]').should('be.visible').contains('Combination Pliers')
        cy.get('[data-test="product-price"]').should('be.visible').contains('$14.15')
        cy.get('[data-test="product-quantity"]').should('be.visible').eq(1)
    }

    checkProduct2DetailsInCart = () => {
        cy.get('[data-test="product-title"]').should('be.visible').contains('Pliers')
        cy.get('[data-test="product-price"]').should('be.visible').contains('$12.01')
        cy.get('[data-test="product-quantity"]').should('be.visible').eq(1)


    }
    proceedButton = () => cy.get('[data-test="proceed-1"]').click()

    checkUserIsLoggedIn = () => {
        cy.get('[data-test="nav-menu"]').should('be.visible').contains('Doe');

    }

    proceedButton2 = () => cy.get('[data-test="proceed-2"]').click()

    billingAddress = () => {
        cy.get('[data-test="street"]').should('be.visible').and('have.length', 1);
        cy.get('[data-test="city"]').should('be.visible').and('have.length', 1);
        cy.get('[data-test="state"]').type('AT');
        cy.get('[data-test="country"]').should('be.visible').and('have.length', 1);
        cy.get('[data-test="postal_code"]').type('12345');

    }

    proceedButton3 = () => cy.get('[data-test="proceed-3"]').click()

    selectPaymentMethod = () => {
        cy.get('[data-test="payment-method"]').should('be.visible').select('Cash on Delivery')
    }

    confirmButton = () => cy.get('[data-test="finish"]').click()

    successMessage = () => cy.get('[data-test="payment-success-message"]')
        .should('be.visible').contains('Payment was successful')
}

