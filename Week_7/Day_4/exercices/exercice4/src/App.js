import React from "react";

function App() {
  const postData = async () => {
    try {
      await fetch("https://webhook.site/c262735a-dfd6-476d-a42e-81bb95abb311", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
        }),
      });
      console.log(" POST sent successfully");
    } catch (error) {
      console.error(" POST failed:", error);
    }
  };

  return <button onClick={postData}>Press me to post some data</button>;
}

export default App;
