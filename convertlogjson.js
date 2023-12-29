const fs = require('fs');

let a = 0;
let x = 0;
const logEntries = [];

const logFilePath = "2023-12-03.log";
const outputJsonFilePath = "output.json";

const readLog = () => {
  const logFileContent = fs.readFileSync(logFilePath, 'utf8');
  const lines = logFileContent.split('\n');

  for (const line of lines) {
    const pat = /t#(\d+),(\d+),(\d+),(\d+),(\d+\.\d+),(\d+\.\d+),xxxxxxBeliefSat-{(\d+)/;
    const temp = line.match(pat);

    if (temp) {
      const keys = ['sss', 'reset', 'wd_lsb', 'wd_msb', 'temp1', 'temp2', 'packet_no'];
      const values = temp.slice(1);

      const entry = keys.reduce((acc, key, i) => {
        acc[key] = values[i];
        return acc;
      }, {});

      // Add 'id' field to each object
      entry['id'] = ++a;

      // Remove double quotes from keys
      const entryNoQuotes = Object.fromEntries(
        Object.entries(entry).map(([key, value]) => [key.replace(/"/g, ''), value])
      );

      logEntries.push(entryNoQuotes);

      x++;
    }
  }
};

const writeToJsonFile = () => {
  fs.writeFileSync(outputJsonFilePath, JSON.stringify(logEntries, null, 2), 'utf8');
  console.log(`Log entries have been written to ${outputJsonFilePath}`);
};

readLog();
writeToJsonFile();
