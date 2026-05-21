import { test, expect } from '../fixtures/basefixture';

test.describe('Add To Cart Functionality', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
    });
    test.afterEach(async ({ logoutPage }) => {
        await logoutPage.logout();
    });
    test('Verify user can add single product to cart @smoke', async ({ page, productPage, product, cartPage }) => {
        await productPage.addProductToCart(product.backpack.name);
        // Validate badge count
        await expect(productPage.cartBadge).toHaveText('1');
        // Open cart
        await productPage.openCart();
        // Validate product 
        await expect(cartPage.getProductName(product.backpack.name)).toBeVisible();
        await expect(cartPage.getProductPrice(product.backpack.price)).toBeVisible();
    });
    test('Verify user can add multiple products', async ({ productPage, product }) => {
        await productPage.addProductToCart(product.backpack.name);
        await expect(productPage.cartBadge).toHaveText('1');
        await productPage.addProductToCart(product.bikeLight.name);
        // Validate badge count
        await expect(productPage.cartBadge).toHaveText('2');
    });

    test('Verify user can remove product from cart', async ({ productPage, product, cartPage }) => {
        await productPage.addProductToCart(product.backpack.name);
        await expect(productPage.cartBadge).toHaveText('1');
        await productPage.openCart();
        await cartPage.removeProduct(product.backpack.name);
        // Validate empty cart
        await expect(cartPage.cartItems).toHaveCount(0);
    });


    test('Verify cart badge disappears after removing product', async ({ page, productPage, product, cartPage }) => {
        await productPage.addProductToCart(product.backpack.name);
        await expect(productPage.cartBadge).toHaveText('1');
        // Remove product
        await cartPage.removeProduct(product.backpack.name);
        // Validate badge removed
        await expect(productPage.cartBadge).toHaveCount(0);
    });
    test('Verify add multiple products and remove them and verify cart is empty', async ({ page, productPage, product, cartPage }) => {
        await productPage.addProductToCart(product.backpack.name);
        await productPage.addProductToCart(product.bikeLight.name);
        await expect(productPage.cartBadge).toHaveText('2');
        await cartPage.removeProduct(product.backpack.name);
        await cartPage.removeProduct(product.bikeLight.name);
        await productPage.openCart();
        await expect(cartPage.cartItems).toHaveCount(0);
    });
    test('Validate continue shopping button', async ({ productPage, cartPage, product }) => {
        await productPage.addProductToCart(product.backpack.name);
        await expect(productPage.cartBadge).toHaveText('1');
        await productPage.openCart();
        await expect(cartPage.continueShoppingButton).toBeVisible();
        await cartPage.clickContinueShopping();
        await productPage.addProductToCart(product.bikeLight.name);
        await expect(productPage.cartBadge).toHaveText('2');
        await productPage.openCart();
        await expect(cartPage.getProductName(product.backpack.name)).toBeVisible();
        await expect(cartPage.getProductName(product.bikeLight.name)).toBeVisible();
    });
});