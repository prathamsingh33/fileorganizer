let fs=require("fs");
let path=require("path");

let inputdir=process.argv.slice(2);
let dir=inputdir[0];
fs.writeFileSync("C:\Users\singh\Desktop\J.S\fileOrganizer\activity\summary.txt",getAllText(dir));
function getAllText(dir)
{
    let ans="";
    let arr=fs.readdirSync(dir);
    for(content of arr)
    {
        let joinedpath=path.join(dir,content);
        let statusObj=fs.lstatSync(joinedpath);
        if(statusObj.isFile())
        {
            if(path.extname(joinedpath)==".txt")
            {
                ans+=fs.readdirSync(joinedpath);
            }
        }
        else if(statusObj.isDirectory())
        {
            ans+=getAllText(joinedpath);
        }
    }
    return ans;
}