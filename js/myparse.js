
const textArea = document.getElementById('json-textarea');
let convBtn = document.getElementById('conv-btn');

let incomingJSON;

let json = {};
let obj1 = {};
let obj2 = {};

let singleLine = [];
let firstMember = [];
let secondsMember = [];

let prop = [];

let subArray = [];
let firstSubArray = [];
let secondSubArray = [];
let array = [];

const validation = () => {
    if(textArea.value === ""){
        alert('Debe ingresar el JSON');
    }else{
        jsonParse();
    }
}

const jsonParse = () => {
    incomingJSON = textArea.value;
    singleLine = incomingJSON.split(",");

    for(let single of singleLine){
        prop.push(single.split(" : "));
    }

    //Nombre de propiedades en firstMember y valores en secondsMember
    for(let i = 0; i < prop.length; i++){
        firstMember.push(prop[i][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''));
        secondsMember.push(prop[i][1].replaceAll("\n","").replaceAll('}','').trim());
    }

    subArray = incomingJSON.split('[');
    subArray = subArray[1].split(']');

    singleLine = subArray[0].split(",");
    prop = [];

    for(let single of singleLine){
        prop.push(single.split(" : "));
    }


    for(let j = 0; j < prop.length; j++){
        firstSubArray.push(prop[j][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''))
        firstSubArray.push(prop[j][1].replaceAll("\n","").replaceAll('}','').trim());
    }


    for(let k = 2; k < prop.length; k++){
        secondSubArray.push(prop[k][0].replaceAll("\"","").replaceAll("\n","").replaceAll(" ","").replaceAll('{',''))
        secondSubArray.push(prop[k][1].replaceAll("\n","").replaceAll('}','').trim());
    }

    array.push(obj1 = {[firstSubArray[0]] : firstSubArray[1],
            [firstSubArray[2]] : firstSubArray[3]
    })

    array.push(obj2 = {[secondSubArray[0]] : secondSubArray[1],
        [secondSubArray[2]] : secondSubArray[3]
    })

    json = {[firstMember[0]] : secondsMember[0],
        [firstMember[1]] : secondsMember[1],
        [firstMember[2]] : array,
        [firstMember[6]] : secondsMember[6],
        [firstMember[7]] : secondsMember[7]}
}

convBtn.addEventListener('click', validation);
