
const textArea = document.getElementById('json-textarea');
let convBtn = document.getElementById('conv-btn');

let incomingJSON;
let json = {};
let singleLine = [];
let firstMember = [];
let secondsMember = [];
let prop = [];

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

    //Funcionan todos menos el array anidado
    json = {[firstMember[0]] : secondsMember[0],
        [firstMember[1]] : secondsMember[1],
        [firstMember[2]] : secondsMember[2],
        [firstMember[3]] : secondsMember[3],
        [firstMember[4]] : secondsMember[4],
        [firstMember[5]] : secondsMember[5],
        [firstMember[6]] : secondsMember[6],
        [firstMember[7]] : secondsMember[7]
    }


}

convBtn.addEventListener('click', validation);
