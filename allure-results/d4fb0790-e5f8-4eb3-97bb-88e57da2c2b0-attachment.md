# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/addtocart.spec.ts >> Add To Cart Functionality >> Verify user can add single product to cart @smoke
- Location: tests/addtocart.spec.ts:9:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test="inventory-item-name"]:has-text("sauce-labs-backpack")')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="inventory-item-name"]:has-text("sauce-labs-backpack")')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs 1 Your Cart QTY Description 1
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Remove"
- button "Go back Continue Shopping":
  - img "Go back"
  - text: Continue Shopping
- button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/basefixture';
  2  | 
  3  | test.describe('Add To Cart Functionality', () => {
  4  | 
  5  |     test.beforeEach(async ({ loginPage }) => {
  6  |         await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
  7  |     });
  8  | 
  9  |     test('Verify user can add single product to cart @smoke', async ({ productPage, product, cartPage }) => {
  10 |         await productPage.addProductToCart(
  11 |             product.backpack.name
  12 |         );
  13 |         // Validate badge count
  14 |         await expect(productPage.cartBadge).toHaveText('1');
  15 |         // Open cart
  16 |         await productPage.openCart();
  17 |         // Validate product name
> 18 |         expect(await cartPage.getProductName(product.backpack.name)).toBeVisible();
     |                                                                      ^ Error: expect(locator).toBeVisible() failed
  19 |         // Validate product price
  20 |         await expect(await cartPage.getProductPrice(product.backpack.price)).toBeVisible();
  21 |     });
  22 | 
  23 |     // test('Verify user can add multiple products', async ({
  24 |     //     inventoryPage
  25 |     // }) => {
  26 | 
  27 |     //     await inventoryPage.addProductToCart(
  28 |     //         productData.backpack.name
  29 |     //     );
  30 | 
  31 |     //     await inventoryPage.addProductToCart(
  32 |     //         productData.bikeLight.name
  33 |     //     );
  34 | 
  35 |     //     // Validate badge count
  36 |     //     await expect(inventoryPage.cartBadge)
  37 |     //         .toHaveText('2');
  38 |     // });
  39 | 
  40 |     // test('Verify user can remove product from cart', async ({
  41 |     //     inventoryPage,
  42 |     //     cartPage
  43 |     // }) => {
  44 | 
  45 |     //     await inventoryPage.addProductToCart(
  46 |     //         productData.backpack.name
  47 |     //     );
  48 | 
  49 |     //     await inventoryPage.navigateToCart();
  50 | 
  51 |     //     await cartPage.removeProduct(
  52 |     //         productData.backpack.name
  53 |     //     );
  54 | 
  55 |     //     // Validate empty cart
  56 |     //     await expect(cartPage.cartItems)
  57 |     //         .toHaveCount(0);
  58 |     // });
  59 | 
  60 |     // test('Verify cart badge disappears after removing product', async ({
  61 |     //     inventoryPage
  62 |     // }) => {
  63 | 
  64 |     //     await inventoryPage.addProductToCart(
  65 |     //         productData.backpack.name
  66 |     //     );
  67 | 
  68 |     //     // Validate badge visible
  69 |     //     await expect(inventoryPage.cartBadge)
  70 |     //         .toBeVisible();
  71 | 
  72 |     //     // Remove product
  73 |     //     await inventoryPage.removeProduct(
  74 |     //         productData.backpack.name
  75 |     //     );
  76 | 
  77 |     //     // Validate badge removed
  78 |     //     await expect(inventoryPage.cartBadge)
  79 |     //         .toHaveCount(0);
  80 |     // });
  81 | });
```