import { expect, test } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { HomePage } from '../pages/HomePage';


test.describe('Accessibility Test', () => {
    test('Home page should have no accessibility violations', async ({ page }) => {
        const homePage = new HomePage(page);
        
        await homePage.goto();
        
        const {violations} = await new AxeBuilder({ page }).analyze();
        expect(violations).toHaveLength(0);
    });
});
