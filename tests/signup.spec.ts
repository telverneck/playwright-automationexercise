import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { generateRandomEmail } from './utils/helpers';
import { generateUserData } from './fixture/user';


test.describe('User Signup and Login', () => {

    test('User should be able to login @regression @login', async ({ page }) => {
        const home = new HomePage(page);
        const login = new LoginPage(page);
        const email = generateRandomEmail();

        const user = generateUserData();
        
        await home.goto();
        await home.clickSignupLogin();
        await login.isLoaded();
        
        
        await login.fillSignupForm(user.name, user.email);

        await expect(page.getByText('Enter Account Information')).toBeVisible();
    })
});
