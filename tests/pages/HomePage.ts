import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
    }

    async goto() {
    await this.page.goto('https://www.automationexercise.com');
    }

    async isLoaded() {
    await this.page.waitForSelector('#slider'); // exemplo de validação
    }

    async clickSignupLogin() {
    await this.page.click('a[href="/login"]');
    }
}
