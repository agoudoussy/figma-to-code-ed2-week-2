import inquirer from "inquirer";
import {
  generateReactComponentFolder,
  generateCommonReactProjectStructure,
  generateTsxFile,
  generateTsFile,
  installAndConfigTaiwind,
} from "./generate.mjs";
import {
  generateTsxFilePromptQuestions,
  MainPromptQuestions,
  ReactComponentGenerationPromptQuestions,
} from "./utils.mjs";

/**
 * Function to prompt for fileType and execute generateIndexFile.
 */
export const promptAndGenerationReactComponent = () => {
  inquirer
    .prompt(ReactComponentGenerationPromptQuestions)
    .then((answers) => {
      const { rootFolder, folderList } = answers;
      // generateIndexFile(rootFolder, fileType);
      generateReactComponentFolder(rootFolder, folderList.split(" "));
    })
    .catch((err) => {
      console.error("Error during prompting:", err);
    });
};

export const promptInstallAndConfigure = () => {
  inquirer
    .prompt(ReactComponentGenerationPromptQuestions)
    .then((answers) => {
      const { rootFolder, folderList } = answers;
      // generateIndexFile(rootFolder, fileType);
      generateReactComponentFolder(rootFolder, folderList.split(" "));
    })
    .catch((err) => {
      console.error("Error during prompting:", err);
    });
};

export const promptAndGenerateTsxFile = () => {
  inquirer
    .prompt(generateTsxFilePromptQuestions)
    .then((answers) => {
      const { rootFolderPath, fileName } = answers;
      generateTsxFile(rootFolderPath, true, fileName);
    })
    .catch((err) => {
      console.error("Error during prompting:", err);
    });
};

export const promptAndGenerateTsFile = () => {
  inquirer
    .prompt(generateTsxFilePromptQuestions)
    .then((answers) => {
      const { rootFolderPath, fileName } = answers;
      generateTsFile(rootFolderPath, fileName);
    })
    .catch((err) => {
      console.error("Error during prompting:", err);
    });
};

export const commandLineRunner = () => ({
  ["ogn-react-structure"]: generateCommonReactProjectStructure,
  ["install-configure-tailwind"]: installAndConfigTaiwind,
  ["react-component"]: promptAndGenerationReactComponent,
  ["create-tsx-file"]: promptAndGenerateTsxFile,
  ["create-ts-file"]: promptAndGenerateTsFile,
});

/**
 * Function to prompt for the command and execute the corresponding function.
 */
export const promptForCommand = () => {
  inquirer
    .prompt(MainPromptQuestions)
    .then((answers) => {
      const { command } = answers;

      const selecterdCommand = commandLineRunner()[command];
      selecterdCommand();
    })
    .catch((err) => {
      console.error("Error during prompting:", err);
    });
};
