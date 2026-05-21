# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/addtocart.spec.ts >> Add To Cart Functionality >> Verify user can add single product to cart @smoke
- Location: tests/addtocart.spec.ts:9:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage{
  4  |     public submitButton: Locator;
  5  |     public errorMessageLocator: Locator;
  6  |     public userNameFieldCrossIcon: Locator;
  7  |     public passwordFieldCrossIcon: Locator;
  8  | 
  9  |     constructor(public page: Page) {
  10 |         this.page = page;
  11 |         this.submitButton = this.page.locator('#login-button');
  12 |         this.errorMessageLocator = this.page.locator('[data-test="error"]');
  13 |         this.userNameFieldCrossIcon = this.page.locator('//input[@data-test="username"]/following-sibling::*[@data-icon="times-circle"]');
  14 |         this.passwordFieldCrossIcon = this.page.locator('//input[@data-test="password"]/following-sibling::*[@data-icon="times-circle"]');
  15 |     }
  16 | 
  17 |     async login(userEmail: string, userPassword: string) {
  18 |         // Use baseURL from Playwright config.
  19 |         await this.page.goto('');
  20 |         await this.page.getByAltText('Swag Labs').isVisible({timeout : 5000})
> 21 |         await this.page.getByPlaceholder('Username').fill(userEmail);
     |                                                      ^ Error: locator.fill: value: expected string, got undefined
  22 |         await this.page.getByPlaceholder('Password').fill(userPassword);
  23 |         await this.submitButton.click();
  24 |     }
  25 |     async errorMessage() {
  26 |         return this.errorMessageLocator;
  27 |     }
  28 |     async getErrorMessageText() {
  29 |         return await this.errorMessageLocator.textContent();
  30 |     }
  31 |     async isUserNameFieldCrossIconVisible() {
  32 |         return await this.userNameFieldCrossIcon.isVisible();
  33 |     }
  34 |     async isPasswordFieldCrossIconVisible() {
  35 |         return await this.passwordFieldCrossIcon.isVisible();
  36 |     }
  37 |     async bothcrossIconsVisible() {
  38 |         return await this.userNameFieldCrossIcon.isVisible() && await this.passwordFieldCrossIcon.isVisible();
  39 |     }
  40 | }
  41 | 
```