// tests/visual/home.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.skip('Home visual snapshot', async ({ page }) => {
  // skip the test for now, remove when ready to run
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await homePage.isLoaded();
    await homePage.clickSignupLogin();

  // Take screenshot of the home page and compare with baseline
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('home.png');
});
