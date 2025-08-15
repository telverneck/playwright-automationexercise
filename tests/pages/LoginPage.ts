import { Page, expect } from '@playwright/test';
import { LoginPageElements as elements } from './Elements/LoginPageElements';

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
        await this.page.fill(elements.signupNameText, name);
        await this.page.fill(elements.signupEmailText, email);
        await this.page.click(elements.signupButton);
    }
    async fillLoginForm(email: string, password: string) {
        await this.page.fill(elements.emailText, email);
        await this.page.fill(elements.passwordText, password);
        await this.page.click(elements.loginButton);
    }
}
