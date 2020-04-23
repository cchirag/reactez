import * as chalk from "chalk";
import { Command, flags } from "@oclif/command";
import * as fs from "fs";

export default class Page extends Command {
  static aliases = ["p"];
  static description = "Generate React Components";

  static examples = [
    "rcli component PageName \n For a default Functional Component page",
    "rcli component PageName -c \n For a Class Component page",
  ];

  static flags = {
    class: flags.boolean({ char: "c" }),
  };

  static args = [{ name: "pageName" }];

  async run() {
    const { args, flags } = this.parse(Page);
    const componentName = `${args.pageName}`;
    var compDir = `src/pages/${componentName}`;

    var boilerPlate = "";

    if (flags.class) {
      boilerPlate = `import React from 'react'; \nimport './${componentName}.styles.css'; \nclass ${componentName}Page extends React.component{ \n }  \nexport default ${componentName}Page;`;
    } else {
      boilerPlate = `import React from 'react'; \nimport './${componentName}.styles.css'; \nconst ${componentName}Page = () => { } \nexport default ${componentName}Page;`;
    }

    function createComponent() {
      fs.writeFileSync(`${compDir}/${componentName}.page.jsx`, boilerPlate);
      fs.writeFileSync(`${compDir}/${componentName}.styles.css`, "");
    }
    if (!fs.existsSync(compDir)) {
      fs.mkdirSync(compDir, { recursive: true });
      createComponent();
      this.log(
        `${chalk.green("[Success]")} ${componentName} page was created.`
      );
    } else {
      createComponent();
      this.log(
        `${chalk.green("[Success]")} ${componentName} page was created.`
      );
    }
  }
}
