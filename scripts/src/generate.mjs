import path from "path";
import fs from "fs";
import {
  color,
  srcDirectory,
  Folders,
  getTemplate,
  __dirname,
} from "./utils.mjs";
import swapnsync from "child_process";

var spawnSync = swapnsync.spawnSync;

/**
 * Function to generate a React component folder.
 * @param {string} root The root directory where the folders should be created.
 * @param {string[]} directories List of directories to create.
 */
export const generateCommonReactProjectStructure = (root) => {
  console.log(color("info", "-> START GENERATION ..."));
  Folders.forEach((directory) => {
    console.log(
      color("info", `-> Generation en cours du fichier ${directory}`)
    );
    generationFolder(root, directory);
    generateIndexFile(root, directory);
    console.log(
      color(
        "info",
        `-> Generation du fichier ${directory} effecuté avec succès`
      )
    );
  });
};

/**
 * Function to install and configure tailwind on a project.
 */
export const installAndConfigTaiwind = () => {
  console.log(color("info", "▶️  Starting Installation setup..."));

  var installTailwind = "npm install -D tailwindcss postcss autoprefixer ";
  console.log(
    color("subtitle", "      Running the following command: " + installTailwind)
  );

  var installTailwindResult = spawnSync(installTailwind, {
    stdio: "inherit",
    shell: true,
  });
  if (installTailwindResult.status === 0) {
    console.log(color("success", "✅  Tailwind installed successfully..."));
  } else {
    console.log(color("danger", "❌ Error during  Tailwind installed..."));
    process.exit(result.status);
  }

  var initTailwindcss = "npx tailwindcss init -p";
  console.log(
    color("subtitle", "      Running the following command: " + initTailwindcss)
  );

  var initTailwindcssResult = spawnSync(initTailwindcss, {
    stdio: "inherit",
    shell: true,
  });

  if (initTailwindcssResult.status === 0) {
    console.log(color("success", "✅  Init tailwind completed..."));
  } else {
    console.log(color("danger", "❌ Error during Tailwind initilisation..."));
    process.exit(initTailwindcssResult.status);
  }

  //const postCssPath = path.join(__dirname, "postcss.config.js");
  const tailwindConfigPath = path.join(
    __dirname,
    "../../",
    "tailwind.config.js"
  );
  const indexCssPath = path.join(srcDirectory, "index.css");
  // const posctCssContent = `
  // module.exports = {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   }
  // }
  // `;
  const tailwindConfigFile = `
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  `;

  if (!fs.existsSync(tailwindConfigPath)) {
    console.log(
      color(
        "danger",
        `❌ Error during add Tailwind configuration: ${tailwindConfigPath} not found`
      )
    );
    return;
  }

  if (!fs.existsSync(indexCssPath)) {
    console.log(
      color(
        "danger",
        `❌ Error  Add the Tailwind directives to your CSS: ${indexCssPath} not found`
      )
    );
    return;
  }

  const indexContent = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ${fs.readFileSync(indexCssPath).toString()}
  `;

  // fs.writeFileSync(postCssPath, posctCssContent);
  fs.writeFileSync(tailwindConfigPath, tailwindConfigFile);
  fs.writeFileSync(indexCssPath, indexContent);
};

/**
 * Function to create a folder in a specified root directory.
 * @param {string} rootDirectory The root directory where the folder should be created.
 * @param {string} directoryName The name of the folder to create.
 */
export const generationFolder = (rootDirectory, directoryName) => {
  const workingDirectory =
    rootDirectory && directoryName
      ? `${rootDirectory}/${directoryName}`
      : `${directoryName}`;
  const folderPath = path.join(srcDirectory, workingDirectory);

  console.log(color("info", `${folderPath}`));

  // Check if the specified directory exists, if not, create it recursively
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

/**}
 * Function to generate a .tsx file for a React component.
 * @param {string} root The root directory where the folder is located.
 * @param {string} name The name of the folder.
 */
export const generateTsxFile = (root, isFile, name) => {
  // const selectedTemplate = getTemplate()[type];
  const jsxTemplate = `
      import React from 'react';
      import './${name}.css';
      
      function ${name}() {
        return (
          <div>
            {/* Contenu de votre composant */}
          </div>
        );
      }
      
      export default ${name};
      `;

  const absolutePath = isFile ? root : path.join(root, name);
  console.log(color("info", `abolute path ${absolutePath}`));

  const jsxFilePath = path.resolve(srcDirectory, absolutePath, `${name}.tsx`);

  if (!fs.existsSync(absolutePath)) {
    fs.mkdirSync(absolutePath, { recursive: true });
  }

  fs.openSync(jsxFilePath, "w");
  fs.writeFileSync(jsxFilePath, jsxTemplate);
  console.log(color("success", "-> TSX FILE SUCCESSFULLY"));
};

/**
 * Function to generate a .css file for a React component.
 * @param {string} root The root directory where the folder is located.
 * @param {string} directory The name of the folder.
 */
export const generateCssFile = (root, directory) => {
  const cssFilePath = path.resolve(
    srcDirectory,
    `${root}/${directory}`,
    `${directory}.css`
  );

  fs.openSync(cssFilePath, "w");
  fs.writeFileSync(cssFilePath, "");
  console.log(color("success", "-> CSS FILE SUCCESSFULLY"));
};

/**
 * Function to generate an index.ts file for a folder.
 * @param {string} root The root directory where the folder is located.
 * @param {string} directory The name of the folder.
 */
export const generateIndexFile = (root, directory) => {
  const workingDirectory =
    root && directory ? `${root}/${directory}` : `${directory}`;

  const indexTemplate = `
      export { default } from "./${directory}"
      `;

  const indexFilePath = path.join(srcDirectory, workingDirectory, "index.ts");

  fs.writeFileSync(indexFilePath, indexTemplate);
  console.log(color("success", "-> INDEX FILE SUCCESSFULLY"));
};

/**
 * Function to generate an index.ts file for a folder.
 * @param {string} root The root directory where the folder is located.
 * @param {string} directory The name of the folder.
 */
export const generateTsFile = (rootPath, fileName) => {
  const indexFilePath = path.join(srcDirectory, rootPath, `${fileName}.ts`);

  fs.writeFileSync(indexFilePath, "export default backend;");
  console.log(color("success", "-> TS FILE SUCCESSFULLY"));
};

/**
 * Function to udpate the index file after generation of a components by adding his export
 * @param {string} directory directory names where components where to be generated
 */

export const updateComponentsIndexFile = (root, componentName) => {
  const componentsDirectory = path.join(srcDirectory, root);
  // const componentFiles = fs.readdirSync(componentsDirectory);

  // const componentNames = componentFiles
  //   .filter((file) => file.endsWith(".tsx"))
  //   .map((file) => path.basename(file, ".tsx"));

  const indexFilePath = path.join(componentsDirectory, "index.ts");

  if (!fs.existsSync(indexFilePath)) {
    fs.writeFileSync(indexFilePath, "", { flag: "wx" }); // Create the file if it doesn't exist
  }

  // componentNames.map((name) => {
  //   fs.writeFileSync(
  //     indexFilePath,
  //     `export { default as ${name} } from './${name}';\n`,
  //     { flag: "a" }
  //   );
  // });
  try {
    const data = fs.readFileSync(indexFilePath, "utf-8");

    const exports = `export { default as ${componentName} } from './${componentName}';\n`;
    if (data.includes(exports)) {
      console.log(color("danger", `L'export existe déjà dans le fichier`));
      throw new Error(
        `L'export existe déjà du composant ${color(
          "danger",
          `${componentName}`
        )} dans le fichier`
      );
    }
    fs.writeFileSync(indexFilePath, exports, {
      flag: "a",
    });

    console.log(
      color("success", "-> COMPONENTS INDEX FILE UPDATED SUCCESSFULLY")
    );
  } catch (err) {
    console.error(
      "Erreur survenue lors de la mise a jour du fichier index",
      err
    );
  }
};

/**
 * Function to generate a React component folder.
 * @param {string} root The root directory where the folders should be created.
 * @param {string[]} directories List of directories to create.
 */
export const generateReactComponentFolder = async (root, directories) => {
  console.log(color("info", "-> START GENERATION ..."));
  for (const directory of directories) {
    console.log(color("info", "-> GENERATION EN COURS ..."));
    generationFolder(root, directory);
    generateTsxFile(root, false, directory);
    generateCssFile(root, directory);
    generateIndexFile(root, directory);
    updateComponentsIndexFile(root, directory);
  }

  console.log(color("info", "-> DONE"));
};
