import { Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {

    public successMessage: Locator;
    public completeHeader: Locator;
    public backHomeButton: Locator;

    constructor(public page: Page) {

        this.successMessage = page.locator('.complete-header');
        this.completeHeader = page.locator('.complete-text');
        this.backHomeButton = page.locator('#back-to-products');
    }
    getSuccessMessage() {
        return this.successMessage.textContent();
    }

    getCompleteHeader() {
        return this.completeHeader;
    }

    async clickBackHome() {
        await this.backHomeButton.click();
    }
}