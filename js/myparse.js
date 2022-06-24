/** Autor: Renaudo Bruno Agustín.
 * Día: 24/06/22
 * TP1: Parsear un JSON de forma manual.
 * Comentarios: Es un código cero reutilizable, tuve que enmascarar los valores
 * para que se muestren como los originales. Estoy seguro que hay una forma
 * totalmente mas clara y fácil de realizar.
 */

const textArea = document.getElementById('json-textarea');
let convBtn = document.getElementById('conv-btn');

let incomingJSON;

let json = {};

//Se utilizan para representar los objetos anidados dentro del array
let obj1 = {};
let obj2 = {};

let singleLine = [];
let firstMember = [];
let secondsMember = [];

let prop = [];

let subArray = [];
let firstSubObj = [];
let secondSubObj = [];
let array = [];

const validation = () => {
    if(textArea.value === ""){
        alert('Debe ingresar el JSON.');
    }else{
        jsonParse();
    }
}

const jsonParse = () => {
    incomingJSON = textArea.value;
    singleLine = incomingJSON.split(",");

    //Separo las claves - valor y las guardo en el array prop
    for(let single of singleLine){
        prop.push(single.split(" : "));
    }

    //Separo en dos arrays diferentes las claves y los valores
    for(let i = 0; i < prop.length; i++){
        firstMember.push(prop[i][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''));
        secondsMember.push(prop[i][1].replaceAll("\"","").replaceAll("\n","").replaceAll('}','').trim());
    }

    /*Utilizo este array para trabajar el arreglo anidado,
    donde su primer elemento subArray[0] contiene ambos objetos
    */
    subArray = incomingJSON.split('[');
    subArray = subArray[1].split(']');

    singleLine = subArray[0].split(",");
    prop = [];

    for(let single of singleLine){
        prop.push(single.split(" : "));
    }


    for(let j = 0; j < prop.length; j++){
        firstSubObj.push(prop[j][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''))
        firstSubObj.push(prop[j][1].replaceAll("\"","").replaceAll("\n","").replaceAll('}','').trim());
    }


    for(let k = 2; k < prop.length; k++){
        secondSubObj.push(prop[k][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''))
        secondSubObj.push(prop[k][1].replaceAll("\"","").replaceAll("\n","").replaceAll('}','').trim());
    }


    //Enmascaro los valores dado que sino salen como string
    firstSubObj[3] = Number(firstSubObj[3]);
    secondSubObj[3] = Number(secondSubObj[3]);
    secondsMember[1] = Number(secondsMember[1]);
    secondsMember[6] = Boolean(secondsMember[6]);

    //Formo los dos objetos anidados dentro del array

    array.push(obj1 = {[firstSubObj[0]] : firstSubObj[1],
            [firstSubObj[2]] : firstSubObj[3]
    })

    array.push(obj2 = {[secondSubObj[0]] : secondSubObj[1],
        [secondSubObj[2]] : secondSubObj[3]
    })

    json = {[firstMember[0]] : secondsMember[0],
        [firstMember[1]] : secondsMember[1],
        [firstMember[2]] : array,
        [firstMember[6]] : secondsMember[6],
        [firstMember[7]] : secondsMember[7]}
    
    alert('Conversión exitosa, puede acceder al objeto json.');

}

convBtn.addEventListener('click', validation);
