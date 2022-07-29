export function loginValidator(user, data) {
    for(let element of data){
        if(element.email === user.email){
            return true;
        }
    }
    return false;

}