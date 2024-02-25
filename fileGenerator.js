const fs = require("fs");
const path = require("path");

const numberOfFiles = 31; // Number of files to generate
const directory = "./files"; // Target directory for file generation

// Function to generate random content
function generateRandomContent() {
  const length = Math.floor(Math.random() * 50) + 10; // Generate content of random length between 10 and 60 characters
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Ensure the directory exists
fs.mkdir(directory, { recursive: true }, (err) => {
  if (err) throw err;

  // Create files within the directory with random content
  for (let i = 1; i <= numberOfFiles; i++) {
    const fileName = path.join(directory, `file${i}.txt`);
    const content = generateRandomContent(); // Generate random content for each file
    fs.writeFile(fileName, content, (writeErr) => {
      if (writeErr) throw writeErr;
      console.log(`${fileName} created with random content.`);
    });
  }
});
