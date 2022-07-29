export function loginValidator(user, data) {
    for(let element of data){
        if(element.email === user.email && element.password === user.password){
            return true;
        }  
    }
    throw new Error('Invalid credentials.');
}