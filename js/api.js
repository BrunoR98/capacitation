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
En ambas funciones forma si son llamadas sin argumentos
corresponde ejecutarse lo relacionado a users y con un argumento
(id) corresponde ejecutarse lo relacionado a albums.
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
            console.log(`Ha ocurrido un error inesperado: ${e}}`);
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

        //Creo el usuario respetando el destructuring sin las props indicadas.
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
