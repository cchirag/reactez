import { Command } from "@oclif/command";
import * as fs from "fs";
import * as child_process from "child_process";
import * as chalk from "chalk";
export default class Axios extends Command {
  static description =
    "Install axios automatically and generate a basic axios file";

  async run() {
    const axiosBoilerplate =
      "import axios from 'axios'; \n export default axios.create({ \n baseURL: 'http://example.com' \n });";

    const axiosDir = "src/services";

    function createAxios() {
      child_process.execSync("npm i axios", { stdio: [0, 1, 2] });
      fs.writeFileSync(`${axiosDir}/axios.js`, axiosBoilerplate);
    }
    if (!fs.existsSync(axiosDir)) {
      fs.mkdirSync(axiosDir);
      createAxios();
      this.log(
        `${chalk.green(
          "[Success]"
        )} Axios implementation successful. \n Go to src/services/axios.js to setup your axios`
      );
    } else {
      createAxios();
      this.log(
        `${chalk.green(
          "[Success]"
        )} Axios implementation successful. \n Go to src/services/axios.js to setup your axios`
      );
    }
  }
}
