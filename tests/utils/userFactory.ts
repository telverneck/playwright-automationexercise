import { faker } from "@faker-js/faker";
import { UserData } from "../pages/SignInPage";

export function generateUser(): UserData {
    return {
        password: faker.internet.password({ length: 10 }),
        day: faker.number.int({ min: 1, max: 28 }).toString(),
        month: faker.number.int({ min: 1, max: 12 }).toString(),
        year: faker.number.int({ min: 1970, max: 2000 }).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        country: "United States", 
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobile: faker.phone.number({ style: "national" }) // 10 digits
    };
}
