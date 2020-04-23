import { Command, flags } from "@oclif/command";
import * as inquirer from "inquirer";
import component from "./component";
import page from "./page";
export default class Generate extends Command {
  static aliases = ["g"];

  static description = "Generate Components and Pages with ease!";

  async run() {
    let options = [
      { name: "Class Component" },
      { name: "Functional Component" },
      { name: "Class Component Page" },
      { name: "Functional Component Page" },
    ];
    let selectedOption = "";
    let componentName = "";
    await inquirer
      .prompt([
        {
          type: "list",
          message: "Select the required option.",
          name: "generateFiles",
          choices: options.map((option) => {
            return option.name;
          }),
        },
      ])
      .then(async (response) => {
        await inquirer
          .prompt([
            {
              type: "input",
              name: "componentName",
              message: `Type the ${response.generateFiles} name.`,
            },
          ])
          .then((response) => {
            componentName = response.componentName;
          });
        selectedOption = response.generateFiles;
      });

    if (selectedOption === "Class Component") {
      component.run([componentName, "--cls"]);
    } else if (selectedOption === "Functional Component") {
      component.run([componentName]);
    } else if (selectedOption === "Class Component Page") {
      page.run([componentName, "--cls"]);
    } else if (selectedOption === "Functional Component Page") {
      component.run([componentName]);
    }
  }
}
