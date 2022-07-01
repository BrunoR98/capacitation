
async function getUser(forma) {
    const output = await forma();
    console.log(output);
}

async function forma1() {
    try{
        const userUrl = "https://jsonplaceholder.typicode.com/users";
        const promise = await fetch(userUrl);
        const users = await promise.json();
        return userDestructuring(users);
    } catch (e) {
        console.log(`Ha ocurrido un error inesperado: ${e}}`);
    }
}

function forma2() {
    const userUrl = "https://jsonplaceholder.typicode.com/users";
    const promise = fetch(userUrl);
    return new Promise((resolve, reject) => {
        resolve(
                promise.then(fetchUser => {return fetchUser.json()})
                .then(userJson => {return userDestructuring(userJson)})
                .then(userArray => {return userArray}))
        reject("Ha ocurrido un error inesperado");
    })
}   

const userDestructuring = (users) => {
    let array = [];
    for(userObj of users){
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
        let newUser = {
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


function getProducts(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (onSuccess) {
                resolve([
                    {id: 1, name: "Samsung Galaxy"},
                    {id: 2, name: "Yerba Hoja Verde"},
                    {id: 3, name: "Caramelos"},
                ]);
            } else {
                reject("Ha ocurrido un error");
            }
        }, 2000);
    })
}   
