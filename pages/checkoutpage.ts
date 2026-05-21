import { Locator, Page } from '@playwright/test';

export class CheckoutPage {

    public continueButton: Locator;

    constructor(public page: Page) {

        this.continueButton = page.locator('#continue');
    }

    async enterFirstName(firstName: string) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    async enterPostalCode(postalCode: string) {
        await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}