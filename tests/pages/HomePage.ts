import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
    }

    async goto() {
     await this.page.goto('https://www.automationexercise.com');

    // Check if Cookie Consent button is visible and click it
    const cookieBtn = this.page.locator('.fc-dialog-container button.fc-cta-consent');
    if (await cookieBtn.isVisible()) {
        await cookieBtn.click();
    }
    }

    async isLoaded() {
    await this.page.waitForSelector('#slider'); 
    }

    async clickSignupLogin() {
    await this.page.click('a[href="/login"]');
    }
}
