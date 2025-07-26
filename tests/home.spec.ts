import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('Should load and go to login', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.isLoaded();
  await homePage.clickSignupLogin();

  await expect(page).toHaveURL(/.*\/login/);
});
