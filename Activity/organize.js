let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = 
{
    'media': ["mp4", "mkv", "mp3"],
    'archives': ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    'documents': ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    'app': ['exe', 'dmg', 'pkg', "deb"],
    'presentation': ['pptx'],
    'pictures': ['png','jpg','jpeg']
}

function organizeFn(newPath,srcPath)
{   
    let entities=fs.readdirSync(newPath);
    let organizeFolder=path.join(srcPath,'organizedFiles1');
    // console.log(organizeFolder);
    if(!fs.existsSync(organizeFolder))
    {
        fs.mkdirSync(organizeFolder);
    }
    console.log('**',entities,'**');
    for(let i=0;i<entities.length;i++)
    {        
        let file=entities[i];
        console.log(file);
        let checkspace=entities[i].split(" ");
        let checkdot=entities[i].split(".");
        console.log(checkspace);
        console.log(checkdot);
        if(checkspace.length>1||checkdot.length>2)
        continue;
        
        // console.log('##',);
        if(fs.lstatSync(path.join(newPath,file)).isFile())
        {
        // console.log(file);
            let type=checkType(path.join(newPath,file));
            let typeFolder=path.join(organizeFolder,type);
            if(!fs.existsSync(typeFolder))
            {
                fs.mkdirSync(typeFolder)
            }

            let src=path.join(newPath,entities[i]);
            let dest=path.join(typeFolder,entities[i]);
            fs.copyFileSync(src,dest);
        }
        else if(fs.lstatSync(path.join(srcPath,file)).isDirectory())
        {
            // let newpath=path.join(newPath,entities[i]);
            // organizeFn(newpath,srcPath);
            continue;
        }
    }
}

function checkType(file)
{
    for(let type in types)
    {
        for(let ext of types[type])
        {
            if(path.extname(file).split('.')[1]==ext)
            {
                return type;
            }
        }
    }
    return 'others';
}



module.exports=
{
    organizeFn:organizeFn
}