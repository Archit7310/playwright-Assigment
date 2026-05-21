import { Page,Locator } from '@playwright/test';
import { CommonUtils } from '../utils/commanUtils';


export class ProductPage {
    public cartIcon: Locator;
    public cartBadge: Locator;

    constructor(public page: Page) {
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }
    

    async addProductToCart(productName: string) {
        const formattedProduct = CommonUtils.formatProductName(productName);
        await this.page.locator(`button[data-test="add-to-cart-${formattedProduct}"]`).click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}