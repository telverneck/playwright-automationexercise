export function generateRandomEmail(prefix = 'test'): string {
    return `${prefix}_${Date.now()}@mail.com`;
}
