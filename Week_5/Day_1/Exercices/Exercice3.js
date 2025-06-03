

Promise.resolve(3)
  .then((result) => result + 1)  // no log
  .then((result) => result + 1)  // no log
  .then((result) => console.log(result))  // ✅ only here
  .catch((error) => console.log("CATCH:", error))
  .finally(() => console.log("FINALLY"));

  Promise.reject("Boo!")
  .catch((error)=>console.log("Catch", error))

  