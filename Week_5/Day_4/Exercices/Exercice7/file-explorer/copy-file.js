const fs = require("fs");

fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Read error:", err);
  } else {
    fs.writeFile("destination.txt", data, (err) => {
      if (err) {
        console.error("Write error:", err);
      } else {
        console.log("File copied successfully");
      }
    });
  }
});
