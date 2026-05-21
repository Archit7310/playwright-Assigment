import { test, expect } from '../fixtures/basefixture';

test.describe('Login Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        // console.log('Logging in with credentials:', process.env.APP_USERNAME, process.env.APP_PASSWORD);
        await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
    });
    // test.afterEach(async ({ logoutPage }) => {
    //     await logoutPage.logout();
    // });

    test('should navigate to the inventory page after successful login', async ({ page, testData }) => {
        await expect(page).toHaveURL(testData.Navigation.homePageURL);
        await expect(page).toHaveTitle(testData.Navigation.homePageTitle)
    });
    //invalid login test case
    test('should show error message for invalid login', async ({ loginPage, page, testData }) => {
        await loginPage.login(testData.Invalid_Login.username, testData.Invalid_Login.password);
        expect(await loginPage.bothcrossIconsVisible()).toBeTruthy();
        expect(await loginPage.errorMessage()).toBeVisible();
        expect(await loginPage.getErrorMessageText()).toBe(testData.Invalid_Login.errorMessage);
    });
    //empty Field test case
    test('should show error message for empty credentials', async ({ loginPage, page, testData }) => {
        await loginPage.login(testData.Empty_Credentials.username, testData.Empty_Credentials.password);
        expect(await loginPage.bothcrossIconsVisible()).toBeTruthy();
        expect(await loginPage.errorMessage()).toBeVisible();
        expect(await loginPage.getErrorMessageText()).toBe(testData.Empty_Credentials.errorMessage);
    });
    //Empty password test case
    test('should show error message for empty password', async ({ loginPage, page, testData }) => {
        await loginPage.login(testData.Empty_Password.username, testData.Empty_Password.password);
        expect(await loginPage.bothcrossIconsVisible()).toBeTruthy();
        expect(await loginPage.errorMessage()).toBeVisible();
        expect(await loginPage.getErrorMessageText()).toBe(testData.Empty_Password.errorMessage);
    });
    //Empty username test case
    test('should show error message for empty username', async ({ loginPage, page, testData }) => {
        await loginPage.login(testData.Empty_Username.username, testData.Empty_Username.password);
        expect(await loginPage.bothcrossIconsVisible()).toBeTruthy();
        expect(await loginPage.errorMessage()).toBeVisible();
        expect(await loginPage.getErrorMessageText()).toBe(testData.Empty_Username.errorMessage);
    });
});
