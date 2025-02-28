const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to some file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the words in a file.")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.trim().split(/\s+/).length);
      }
    });
  });

program.parse();
