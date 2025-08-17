import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { generateRandomEmail } from './utils/helpers';
import { generateUserData } from './fixture/user';
import { SignInPage } from './pages/SignInPage';
import { generateUser } from "../tests/utils/userFactory";


test.describe('User Signup and Login', () => {

    test('User should be able to login @regression @signin', async ({ page }) => {
        const home = new HomePage(page);
        const login = new LoginPage(page);
        const signin = new SignInPage(page);
        const email = generateRandomEmail();
        const user = generateUserData();
        const userdata = generateUser();
        
        await home.goto();
        await home.clickSignupLogin();
        await login.isLoaded();
        
        
        await login.fillSignupForm(user.name, user.email);

        await expect(page.getByText('Enter Account Information')).toBeVisible();
        await signin.fillForm(userdata);
        await signin.validateAccountCreated();

    })
});
