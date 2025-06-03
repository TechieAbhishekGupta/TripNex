const fs = require("fs");
const path = require("path");

function printDirectoryTree(dirPath, indent = "") {
  const items = fs.readdirSync(dirPath);
  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    const isLast = index === items.length - 1;
    const symbol = isLast ? "+-- " : "|-- ";
    const stat = fs.statSync(fullPath);

    console.log(indent + symbol + item);

    if (
      stat.isDirectory() &&
      !["node_modules", ".git", "dist", "build"].includes(item)
    ) {
      printDirectoryTree(fullPath, indent + (isLast ? "    " : "|   "));
    }
  });
}

printDirectoryTree(__dirname);
