let fs=require('fs');
let path=require("path");


// ask the TA about getting adequate spacing every time a new directory is entered

let count =0;
function treeFn(srcPath)
{
    let baseName=path.basename(srcPath);
    console.log(baseName);
    // console.log("\n\t"+"└──");
    let content=fs.readdirSync(srcPath);
    // console.log(content);
    let allEntities="";
    for(let i=0;i<content.length;i++)
    {
        let contentPath=path.join(srcPath,content[i]);
        let statusObj=fs.lstatSync(contentPath);
        if(statusObj.isFile())
        {
            allEntities+='\n\t'+"├──"+content[i];
            count++;
        }
        else if (statusObj.isDirectory())
        {
        allEntities+='\n\t'+"├──"+content[i]+'\t\t'+treeFnHelper(contentPath);
        }
    }
    console.log(allEntities);
}
function treeFnHelper(srcPath)
{
        let contents=fs.readdirSync(srcPath);
        let allEntities="";
        for(let i=0;i<contents.length;++i)
        {        
        let statusObj=fs.lstatSync(path.join(srcPath,contents[i]));
        if(statusObj.isDirectory())
        {
          allEntities+='\n\t'+"├──"+contents[i]+'\t\t'+treeFnHelper(path.join(srcPath,contents[i]));
        }
        else if(statusObj.isFile())
        {
        allEntities+='\n\t'+"├──"+ path.basename(path.join(srcPath,contents[i]));
        count++;
        // console.log(content[i]);
        }
        }
        return allEntities;
}

console.log(count);
module.exports=
{
    treeFn:treeFn
}


 