let fs=require("fs");

let content=fs.readFileSync('a.txt');
// console.log(content+"");

// fs.writeFileSync('abc.txt','timon n pumba');

// fs.appendFileSync('abc.txt','Hakunama tata');

// fs.unlinkSync('abc.txt');        //deletes the file

// directories
//to make a folder
// fs.mkdirSync('pathModule');

//to delete a folder
// fs.rmdirSync('pathModule');

//to check if a file exists or not
// let doesExist=fs.existsSync('fs1.js');
// console.log('fs1.js file',doesExist);

//statusObj of file/folder
let statusObj=fs.lstatSync('a.txt');
console.log(statusObj);

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

// let fileArr=fs.readdirSync('/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/dir');
// console.log(fileArr);
//  'readdirsync' return an array consisting of names of all the files present in the mentioned directory.



// let srcPath='/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/fsModule/f1.txt';
// let destPath='/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/fsModule/f2.txt';
// let toBeCopiedFileName=path.basename(srcPath);
// let dest=path.join('/Users/abhishekgoel/Desktop/PP_14/fileOrganizer/dir',toBeCopiedFileName);
// console.log(dest);

// fs.copyFileSync(srcPath,destPath);
// 'copyFileSync' overrides f2.txt with content of f1.txt

// fs.copyFileSync(srcPath,dest); 
// 'copyFileSync' will check if the directory mentioned in the path has a file with the mentioned basename 
// If not then it will create a file with that basename in that directory and then copy the contents to that file

// console.log(process.cwd());
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// '|__'
// "└──"