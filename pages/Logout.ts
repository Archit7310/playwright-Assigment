import{Page,Locator} from '@playwright/test';

export class LogoutPage{
    private HamburgerMenu: Locator;
    private LogoutButton: Locator;

    constructor(private page: Page) {
        this.page = page;
        this.HamburgerMenu = this.page.locator('#react-burger-menu-btn');
        this.LogoutButton = this.page.locator('#logout_sidebar_link');
    }

    async logout() {
        await this.HamburgerMenu.waitFor({ state: 'visible' });
        await this.HamburgerMenu.click();
        await this.LogoutButton.waitFor({ state: 'visible' });
        await this.LogoutButton.click();
    }

}
