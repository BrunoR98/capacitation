
async function getUser(forma) {
    await forma();
}

async function forma1 () {
    try{
        const promise = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await promise.json();
        const array = userDestructuring(users);
        console.log(array);
    } catch (e) {
        console.log(`Ha ocurrido un error inesperado: ${e}}`);
    }
}


const userDestructuring = (data) => {
    const array = [];
    for(userObj of data){
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

