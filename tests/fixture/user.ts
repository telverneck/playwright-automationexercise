export function generateUserData() {
    const timestamp = Date.now();
    return {
        name: 'Test User',
        email: `user_${timestamp}@mail.com`,
        password: '123456'
    };
}
