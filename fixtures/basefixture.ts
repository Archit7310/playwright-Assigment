import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { LogoutPage } from '../pages/Logout';
import testData from '../test-data/testdata.json';
import { ProductPage } from '../pages/products';
import product from '../test-data/product.json';
import { CartPage } from '../pages/cartpage';
import { CheckoutPage } from '../pages/checkoutpage';
import { CheckoutOverviewPage } from '../pages/checkoutOverviewpage';
import { CheckoutCompletePage } from '../pages/checkoutCompletepage';

type MyFixtures = {

    loginPage: LoginPage;
    logoutPage: LogoutPage;
    testData: typeof testData;
    productPage: ProductPage;
    product: typeof product;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;

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
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    product: async ({ }, use) => {
        await use(product);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
    checkoutOverviewPage: async ({ page }, use) => {
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await use(checkoutOverviewPage);
    },
    checkoutCompletePage: async ({ page }, use) => {
        const checkoutCompletePage = new CheckoutCompletePage(page);
        await use(checkoutCompletePage);
    }
});

export { expect } from '@playwright/test';