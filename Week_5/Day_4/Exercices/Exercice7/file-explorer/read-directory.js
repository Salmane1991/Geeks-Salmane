const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Directory read error:", err);
  } else {
    console.log("Files in directory:");
    console.log(files);
  }
});
