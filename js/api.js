/**
 * Author: Renaudo Bruno, Agustín.
 * Date: 01/07/22
 * Comments: You can use two functions, getUser return an array with ten user´s objects
 * and getAlbums return an array of objects with user´s albums.
 * - For getUsers, you just need to specify what 'forma' function you want to use.
 * - For getAlbums, you need to add an user´s id.
 * - 'forma' and 'id' are param´s.
 *  Example: You can write in console => getUsers(forma1) or getAlbums(1,forma1)
 */

async function getUser(forma) {
    try{
        const output = await forma();
        console.log(output);
    } catch(e) {
        console.log(`Ha ocurrido un error inesperado: ${e}}`);
    }
}

async function getAlbums(id, forma) {
    try{
        const output = await forma(id);
        console.log(output);
    } catch(e) {
        console.log(`Ha ocurrido un error inesperado: ${e}}`);
    }
}

/*
    In both functions (forma1 and forma2), if they are called without arguments,
    corresponds to execute what is related to users, and corresponds to execute what is
    related to albums if they are called with id argument.
*/ 

async function forma1() {
    if (arguments.length === 0) {
        try{
            const userUrl = "https://jsonplaceholder.typicode.com/users";
            const promise = await fetch(userUrl);
            const users = await promise.json();
            return userDestructuring(users);
        } catch (e) {
            console.log(`Ha ocurrido un error inesperado: ${e}}`);
        }
    } else if (arguments.length === 1) {
        try{
            const albumUrl = `https://jsonplaceholder.typicode.com/users/${arguments[0]}/albums`;
            const albumPromise = await fetch(albumUrl);
            const userAlbum = await albumPromise.json();
            return userAlbum;
        } catch (e) {
            console.log(`Ha ocurrido un error inesperado: ${e}`);
        }
    }
}

function forma2() {
    if (arguments.length === 0) {
        const userUrl = "https://jsonplaceholder.typicode.com/users";
        const userPromise = fetch(userUrl);
        return new Promise((resolve, reject) => {
            resolve(
                userPromise
                        .then(fetchUser => {return fetchUser.json()})
                        .then(userJson => {return userDestructuring(userJson)})
                        .then(userArray => {return userArray})
                        .catch(e => {console.log(`Ha ocurrido un error inesperado: ${e}`)})
            );
            reject("Ha ocurrido un error inesperado");
        })
    } else if (arguments.length === 1) {
        const albumUrl = `https://jsonplaceholder.typicode.com/users/${arguments[0]}/albums`
        const albumPromise = fetch(albumUrl);
        return new Promise((resolve, reject) => {
            resolve(
                albumPromise
                        .then(fetchAlbum => {return fetchAlbum.json()})
                        .then(userAlbum => {return userAlbum})
                        .catch(e => {console.log(`Ha ocurrido un error inesperado: ${e}`)})
            );
            reject("Ha ocurrido un error inesperado");
        })
    }
}   

const userDestructuring = (users) => {
    let array = [];
    for (userObj of users) {
        const {
                id,
                name,
                username,
                email,
                address: {
                    street,
                    suite,
                    city,
                    geo: {
                        lng,
                    },
                },
                website,
                company: { 
                    name: companyName, 
                    catchPhrase, 
                    bs, 
                } 
        } = userObj;

        //I create the user without the indicated props, respecting the destructuring.
        const newUser = {
                id,
                name,
                username,
                email,
                address: {
                    street,
                    suite,
                    city,
                    geo: {
                        lng,
                    }, 
                },
                website,
                company: {
                    companyName,
                    catchPhrase,
                    bs,
                },
            }
    array.push(newUser);
    }
    return array;
}
