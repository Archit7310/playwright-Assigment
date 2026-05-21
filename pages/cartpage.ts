import { Locator, Page } from '@playwright/test';
import { CommonUtils } from '../utils/commanUtils';

export class CartPage {
    public cartItems: Locator;
    public continueShoppingButton: Locator;
    public checkoutButton: Locator;

    constructor(public page: Page) {
        this.cartItems = page.locator('.cart_item');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('#checkout');
    }

    getProductName(productName: string) {
        return this.page.locator(`[data-test="inventory-item-name"]:has-text("${productName}")`);
    }

    getProductPrice(productPrice: string) {
        return this.page.locator(`[data-test="inventory-item-price"]:has-text("${productPrice}")`);
    }
    async removeProduct(productName: string) {
        const formattedProduct = CommonUtils.formatProductName(productName);
        await this.page.locator(`button[data-test="remove-${formattedProduct}"]`).click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }
    async clickCheckout() {
        await this.checkoutButton.click();
    }
}