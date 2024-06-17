const fs = require('fs');
const path = require('path');

// Define the file paths
const inputFilePath = path.join(__dirname, 'ContentAboutProjectsToGo.txt');
const outputFilePath = path.join(__dirname, 'output.json');

// Read the .txt file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the file content into an array of lines
    const lines = data.split('\n').map(line => line.trim());
    const jsonObject = {};
    let currentKey = null;

    lines.forEach(line => {
        if (line.startsWith('')) {
            // Remove the '' symbol and trim the key
            currentKey = line.replace(/^+\s*/, '').trim();
            jsonObject[currentKey] = [];
        } else if (line.startsWith('- [ ]') && currentKey) {
            // Extract the value without brackets
            const value = line.replace(/^\s*-\s*\[\s*\]\s*/, '').replace(/\[.*?\]/, '').trim();
            jsonObject[currentKey].push(value);
        }
    });

    // Write the JSON object to the .json file
    fs.writeFile(outputFilePath, JSON.stringify(jsonObject, null, 2), 'utf8', err => {
        if (err) {
            console.error('Error writing the JSON file:', err);
            return;
        }
        console.log('JSON file has been saved.');
    });
});
