# Playwright Automation Framework

This project is built using Playwright with TypeScript for automating SauceDemo application.

## Features

* Login Automation
* Add to Cart
* Remove Product
* Checkout Flow
* Smoke Testing
* Allure Reporting

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Allure Report

---

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

## Install Allure

```bash
sudo npm install -g allure-commandline
npm install -D allure-playwright
```

---

## Run Tests

```bash
npx playwright test
```

## Run in Headed Mode

```bash
npx playwright test --headed
```

---

## Generate Allure Report

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## Framework Highlights

* Page Object Model (POM)
* Dynamic Locators
* Reusable Utilities
* Constructor-based Locators
* Assertions using Playwright Expect

---

## Smoke Test Covers

* Login
* Add Multiple Products
* Cart Validation
* Checkout
* Order Completion

---

Author: Archit Khurana
