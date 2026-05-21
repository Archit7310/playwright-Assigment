import { Page, Locator } from '@playwright/test';

export class LoginPage{
    private submitButton: Locator;
    private errorMessageLocator: Locator;
    private userNameFieldCrossIcon: Locator;
    private passwordFieldCrossIcon: Locator;

    constructor(private page: Page) {
        this.page = page;
        this.submitButton = this.page.locator('#login-button');
        this.errorMessageLocator = this.page.locator('[data-test="error"]');
        this.userNameFieldCrossIcon = this.page.locator('//input[@data-test="username"]/following-sibling::*[@data-icon="times-circle"]');
        this.passwordFieldCrossIcon = this.page.locator('//input[@data-test="password"]/following-sibling::*[@data-icon="times-circle"]');
    }

    async login(userEmail: string, userPassword: string) {
        // Use baseURL from Playwright config.
        await this.page.goto('');
        await this.page.getByPlaceholder('Username').fill(userEmail);
        await this.page.getByPlaceholder('Password').fill(userPassword);
        await this.submitButton.click();
    }
    async errorMessage() {
        return this.errorMessageLocator;
    }
    async getErrorMessageText() {
        return await this.errorMessageLocator.textContent();
    }
    async isUserNameFieldCrossIconVisible() {
        return await this.userNameFieldCrossIcon.isVisible();
    }
    async isPasswordFieldCrossIconVisible() {
        return await this.passwordFieldCrossIcon.isVisible();
    }
    async bothcrossIconsVisible() {
        return await this.userNameFieldCrossIcon.isVisible() && await this.passwordFieldCrossIcon.isVisible();
    }
}
