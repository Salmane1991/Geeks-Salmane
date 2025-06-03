new Promise((resolve, reject) => {
  
    setTimeout(()=>{
        resolve("Success")}, 4000)
    
    })
  
 
.then((result) => {
      console.log("THEN:", result);
})



.catch((error) => {
  console.log('CATCH:', error);
})
.finally(() => {
  console.log('FINALLY');
});
