import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    async isLoaded() {
        await expect(
            this.page.getByRole('heading', { name: 'Login to your account' })
        ).toBeVisible();
}
    async fillSignupForm(name: string, email: string) {
        await this.page.fill('input[data-qa="signup-name"]', name);
        await this.page.fill('input[data-qa="signup-email"]', email);
        await this.page.click('button[data-qa="signup-button"]');
    }
    async fillLoginForm(email: string, password: string) {
        await this.page.fill('input[data-qa="login-email"]', email);
        await this.page.fill('input[data-qa="login-password"]', password);
        await this.page.click('button[data-qa="login-button"]');
    }
}
