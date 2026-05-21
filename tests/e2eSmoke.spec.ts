import { test, expect } from '../fixtures/basefixture';
test.describe('Login Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        // console.log('Logging in with credentials:', process.env.APP_USERNAME, process.env.APP_PASSWORD);
        await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
    });
    test('Smoke - Add multiple products, checkout and finish order', async ({
        productPage,
        cartPage,
        checkoutPage,
        checkoutOverviewPage,
        checkoutCompletePage,
        product,testData
    }) => {
        // Add multiple products
        await productPage.addProductToCart(product.backpack.name);

        await productPage.addProductToCart(product.bikeLight.name);
        // Validate cart badge count
        await expect(productPage.cartBadge).toHaveText('2');
        // Navigate to cart
        await productPage.openCart();
        // Validate products in cart
        await expect(cartPage.getProductName(product.backpack.name)).toBeVisible();
        await expect(cartPage.getProductPrice(product.backpack.price)).toBeVisible();
        await expect(cartPage.getProductName(product.bikeLight.name)).toBeVisible();
        await expect(cartPage.getProductPrice(product.bikeLight.price)).toBeVisible();
        // Checkout
        await cartPage.clickCheckout();

        // Fill checkout information
        await checkoutPage.enterFirstName(testData.checkoutInfo.firstName);
        await checkoutPage.enterLastName(testData.checkoutInfo.lastName);
        await checkoutPage.enterPostalCode(testData.checkoutInfo.postalCode);

        await checkoutPage.clickContinue();
        // Finish order
        await checkoutOverviewPage.clickFinish();
        // Validate success message
        expect(await checkoutCompletePage.getSuccessMessage()).toEqual(testData.successmessage);
        // Validate complete header
        await expect(checkoutCompletePage.getCompleteHeader()).toBeVisible();
        // console.log("checkout completed");
    });
});