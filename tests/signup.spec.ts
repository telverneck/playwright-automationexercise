import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { generateRandomEmail } from './utils/helpers';

test('User should be able to login', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const email = generateRandomEmail();

    await home.goto();
    await home.clickSignupLogin();
    await login.isLoaded();

    const randomEmail = email;

    await login.fillSignupForm('Test User', randomEmail);

    await expect(page.getByText('Enter Account Information')).toBeVisible();
});
