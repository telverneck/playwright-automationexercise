// tests/visual/home.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Home visual snapshot', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await homePage.isLoaded();
    await homePage.clickSignupLogin();

  // Take screenshot of the home page and compare with baseline
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('home.png');
});
