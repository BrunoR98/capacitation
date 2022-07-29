export function loginValidator(userDB, password) {
    const user = userDB[0];
    if(userDB.length === 0) {
        throw new Error('User not found.');
    } else if(user.password !== password) {
        throw new Error('Invalid credentials.');
    }
    return true;
}