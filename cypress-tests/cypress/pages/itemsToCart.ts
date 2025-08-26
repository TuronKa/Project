export default class ItemToCart {
    productId = ''
    constructor(productId: string) { this.productId = productId }
    addProductToCart = () => cy.get(`[data-test="product-${this.productId}"]`);

    itemName = () => this.addProductToCart().find('[data-test="product-name"]')
    openDetail = () => this.itemName().click()
}
