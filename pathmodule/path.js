let path=require("path");
let fs=require("fs");

// let inputarr=process.argv.slice[2];
// let filename=inputarr[0];
// let content=inputarr[1];

// console.log(filename+" "+content);

let currentpath=process.cwd();              //returns the current working directory 

let joinedpath=path.join(currentpath,"abc","def.txt");
// console.log(joinedpath);

let basename=path.basename("C:\Users\singh\Desktop\J.S\fileOrganizer\fsmodule\a.txt");
let extname=path.extname("C:\Users\singh\Desktop\J.S\fileOrganizer\fsmodule\a.txt");

console.log(basename+" "+extname);