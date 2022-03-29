#!/usr/bin/env node

import chalk from "chalk"
import boxen from "boxen"

// Text + chalk definitions
const data = {
    name: chalk.white("             Jean-Marie Farina"),
    handle: chalk.white("JM"),
    work: chalk.white("Formation at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~jeanma_farina"),
    github: chalk.gray("https://github.com/") + chalk.green("jeanmaFarina"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("jean-marie-farina-5a0561222/"),
    npx: chalk.red("npx") + " " + chalk.white("farina"),
    labelWork: chalk.green.bold("       Work:"),
    labelNpm: chalk.green.bold("        npm:"),
    labelGitHub: chalk.green.bold("     GitHub:"),
    labelLinkedIn: chalk.green.bold("   LinkedIn:"),
    labelWeb: chalk.green.bold("        Web:"),
    labelCard: chalk.green.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.magenta(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,

                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,

                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);
