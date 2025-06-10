const fs = require("fs");

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Read error:", err);
    } else {
      console.log("File content:", data);
    }
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Write error:", err);
    } else {
      console.log("File written successfully");
    }
  });
}

module.exports = { readFile, writeFile };
