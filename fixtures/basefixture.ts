import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { LogoutPage } from '../pages/Logout';
import testData from '../test-data/testdata.json';
type MyFixtures = {

    loginPage: LoginPage;
    logoutPage: LogoutPage;
    testData: typeof testData;

};
export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    logoutPage: async ({ page }, use) => {
        const logoutPage = new LogoutPage(page);
        await use(logoutPage);
    },
    testData: async ({ }, use) => {
        await use(testData);
    }
});

export { expect } from '@playwright/test';