// async is key word that is being used to create async function 
//async is always return a promise.
//if you not return a promise it can be of any value or string that would be automaticaly wrapped inside a promise.

async function getData(){
    return " Namate Shiva"
}

const dataPromise = getData();
console.log(dataPromise);
// promise: fulfilled  with Namate Shiva
// now how to get actual data from promise 

dataPromise.then((res)=> console.log(res));


// now create one promise and return with promise

const p = new Promise(function (res ,rej){
    res ("hello shankar");
});


async function pData (){
    return p;

}
const datap =pData();
datap.then((res)=> console.log(res));