#!/usr/bin/env node
const shell = require('shelljs');
const args = process.argv.slice(2);

argument = args[0];


if(argument){
    if(argument.startsWith('.')){
        const path  = argument.split('/')[1];
        if(path){
            console.log('create-express-ts in /' + path);
            cloneEmptyProject(`./${path}`);
        }else{
            console.log('create-express-ts in current folder');
            cloneEmptyProject('.');
        }
    }
    else 
        printHelp();
}

function cloneEmptyProject(path){
    shell.exec(`git clone https://github.com/UoooBarry/empty-express-ts ${path}`);
    console.log("🌈 🌈 🌈 Installing dependencies...");
    installDeps(path);
    console.log('🍺 🍺 🍺! Enjoy!');
}

function installDeps(path){
    const installCommand = 'npm install';
    if(path === '.')
        shell.exec(installCommand);
    else
        shell.exec(`cd ${path} && ${installCommand}`);
}

function printHelp(){
    console.log('arguments:');
    console.log("1.path: input . = current folder, ./folder = folder inside current folder")
}
