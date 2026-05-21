import { Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {

    public pageTitle: Locator;
    public finishButton: Locator;

    constructor(public page: Page) {

        this.pageTitle = page.locator('.title');
        this.finishButton = page.locator('#finish');
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}