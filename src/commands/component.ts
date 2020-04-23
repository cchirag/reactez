import { Command, flags } from "@oclif/command";
import * as chalk from "chalk";
import * as fs from "fs";

export default class Component extends Command {
  static aliases = ["c"];
  static description = "Generate React Components";

  static examples = [
    "rcli component ComponentName \n For a default Functional Component",
    "rcli component ComponentName -c \n For a Class Component",
  ];

  static flags = {
    class: flags.boolean({ char: "c" }),
  };

  static args = [{ name: "componentName" }];

  async run() {
    const { args, flags } = this.parse(Component);
    const componentName = args.componentName;
    var compDir = `src/components/${componentName}`;

    var boilerPlate = "";

    if (flags.cls) {
      boilerPlate = `import React from 'react'; \nimport './${componentName}.styles.css'; \nclass ${componentName} extends React.component{ \n }  \nexport default ${componentName};`;
    } else {
      boilerPlate = `import React from 'react'; \nimport './${componentName}.styles.css'; \nconst ${componentName} = () => { } \nexport default ${componentName};`;
    }

    function createComponent() {
      fs.writeFileSync(
        `${compDir}/${componentName}.component.jsx`,
        boilerPlate
      );
      fs.writeFileSync(`${compDir}/${componentName}.styles.css`, "");
    }
    if (!fs.existsSync(compDir)) {
      fs.mkdirSync(compDir, { recursive: true });
      createComponent();
      this.log(
        `${chalk.green("[Success]")} ${componentName} component was created.`
      );
    } else {
      createComponent();
      this.log(
        `${chalk.green("[Success]")} ${componentName} component was created.`
      );
    }
  }
}
