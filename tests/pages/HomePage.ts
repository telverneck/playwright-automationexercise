import { Page } from '@playwright/test';
import { HomePageElements as elements } from './Elements/HomePageElements';


export class HomePage {
    readonly page: Page;
    

    constructor(page: Page) {
    this.page = page;
    }

    async goto() {
        await this.page.goto('/');
        this.acceptCookieConsent();

    }

    async acceptCookieConsent() {
        const cookieBtn = this.page.locator(elements.cookieConsentButton);
        if (await cookieBtn.isVisible()) {
            await cookieBtn.click();
        }
    }

    async isLoaded() {
        await this.page.waitForSelector(elements.slider); 
    }

    async clickSignupLogin() {
        await this.page.click(elements.signupLoginLink);
    }
}
