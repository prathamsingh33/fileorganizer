let fs=require('fs');
let path=require('path');

let dir=process.argv.slice(2);
let maindir=dir[0];
let secondarydir=dir.slice(1);

let maindirpath=path.join(process.cwd(),maindir);
if(!fs.existsSync(maindirpath))
fs.mkdirSync(maindirpath);

for(let i=0;i<secondarydir.length;++i)
{
    let secondarydirpath=path.join(maindirpath,secondarydir[i]);
    if(!fs.existsSync(secondarydirpath))
    fs.mkdirSync(secondarydirpath);
    for(let j=1;j<4;++j)
    {
        let modulepath=path.join(secondarydirpath,`module${j}`);
        fs.mkdirSync(modulepath);
        let filepath=path.join(modulepath,`content.md`);
        fs.writeFileSync(filepath,`Hello for the ${j}th time`);
    }
}