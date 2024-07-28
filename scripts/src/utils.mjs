import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const joinedPath = (rootDirectory, directoryName, ...args) =>
  path.join(__dirname, `../src/${rootDirectory}/${directoryName}`);

var styles = {
  // Styles for colored console output
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

export const color = (modifier, string) => {
  return styles[modifier].open + string + styles[modifier].close;
};

export const srcDirectory = path.join(__dirname, "../../src");

export const Folders = [
  "api",
  "components",
  "hooks",
  "pages",
  "layout",
  "model",
  "UI",
  "routes",
  "store",
  "helpers/",
];

export const MainPromptQuestions = [
  {
    type: "list",
    name: "command",
    message: "Veuillez sélectionner une commande :",
    choices: [
      {
        name: "Créer la structure initiale d'un projet React avec OGN",
        value: "ogn-react-structure",
      },
      {
        name: "Installation et configuration de tailwind",
        value: "install-configure-tailwind",
      },
      { name: "Générer un composant React", value: "react-component" },
      {
        name: "Creation d'un fichier .tsx",
        value: "create-tsx-file",
      },
      {
        name: "Creation d'un fichier .ts",
        value: "install-configure-tailwind",
      },
    ],
  },
];

export const ReactComponentGenerationPromptQuestions = [
  {
    type: "input",
    name: "rootFolder",
    message: "Entrer le nom du repertoire parent:",
    validate: (input) => {
      if (input) {
        return true;
      }
      return "Merci de fournir le dossier parent.";
    },
  },
  {
    type: "input",
    name: "folderList",
    message: "Entrer le nom du dossier (separer par des espaces):",
    validate: (input) => {
      if (input) {
        return true;
      }
      return "Merci de fournir au moins le nom du fichier";
    },
  },
];

export const generateTsxFilePromptQuestions = [
  {
    type: "input",
    name: "rootFolderPath",
    message: "Entrer le chemin ou le fichier doit être creer",
    validate: (input) => {
      if (input) {
        return true;
      }
      return "Merci de fournir le chemin du fichier ou le fichier doit être creer";
    },
  },
  {
    type: "input",
    name: "fileName",
    message: "Entrer le nom du fichier à creer",
    validate: (input) => {
      if (input) {
        return true;
      }
      return "Merci de fournir le nom du fichier à creer";
    },
  },
];

export const jsxTemplate = (name) =>
  `
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

export const indexExportTemplate = (directory) =>
  `
  export { default } from "./${directory}"
  `;

export const tsTemplate = () =>
  `
  export const a=0"
  `;

export const getTemplate = () => ({
  ["jsx"]: jsxTemplate,
  ["ts"]: tsTemplate,
});
