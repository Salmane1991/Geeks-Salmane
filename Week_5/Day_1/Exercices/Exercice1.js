function compareToTen(num) {
return new Promise((resolve, reject) => {
    if( num <= 10){
        resolve(`The ${num} is less than 10 `) 
    }else{
        reject(`The ${num} is bigger than 10 `)
    }
  
})

}

compareToTen(15)
.then((result) => {
  console.log('Sucess', result);
})
.catch((error) => {
  console.log('Failure', error);
})

compareToTen(8)
.then((result) => {
  console.log('Sucess', result);
})
.catch((error) => {
  console.log('Failure', error);
})