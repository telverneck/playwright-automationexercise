import { Page, expect } from '@playwright/test';
import { SignInElements as elements } from './Elements/SignInPageElements';

export interface UserData {
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
}

export class SignInPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private async fillText(locator: string | { role: string, name: string }, value: string) {
        if (typeof locator === "string") {
            await this.page.fill(locator, value);
        } 
        else {
            await this.page.getByRole(locator.role as any, { name: locator.name }).fill(value);
        }
    }

    private async select(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    async fillForm(user: UserData) {
        await this.fillText(elements.passwordInput, user.password);
        await this.select(elements.daySelect, user.day);
        await this.select(elements.monthSelect, user.month);
        await this.select(elements.yearSelect, user.year);
        await this.fillText(elements.firstNameInput, user.firstName);
        await this.fillText(elements.lastNameInput, user.lastName);
        await this.fillText(elements.addressInput, user.address);
        await this.page.getByLabel(elements.countrySelect.label).selectOption(user.country);
        await this.fillText(elements.stateInput, user.state);
        await this.fillText(elements.cityInput, user.city);
        await this.fillText(elements.zipcodeInput, user.zipcode);
        await this.fillText(elements.mobileInput, user.mobile);

        await this.page.click(elements.createAccountBtn);
    }

    async validateAccountCreated() {
        await this.page.locator(elements.accountCreatedMsg).isVisible();
        await this.page.locator(elements.congratulationsMsg).isVisible();
        await this.page.locator(elements.advantageMsg).isVisible();
        await this.page.getByRole(elements.continueBtn.role as any, { name: elements.continueBtn.name }).click();
    }
}
