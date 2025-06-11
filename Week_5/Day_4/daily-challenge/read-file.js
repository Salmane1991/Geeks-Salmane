import fs from "node:fs";

function readFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Read error:", err);
    } else {
      console.log("File content:", data);
    }
  });
}

export { readFile };
