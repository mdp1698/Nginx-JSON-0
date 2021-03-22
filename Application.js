var fs = require('fs') 
var yargs = require('yargs') 

var fileArray = [] 
var filename = yargs.argv.filename 

console.log('filename:',filename)

fs.readFile("fileNames.txt",(err,data)=>{
    if(data){
        fileArray = JSON.parse(data);
        console.log("file exists result:",fileArray.includes(filename))
        if(fileArray.includes(filename)){
            return console.error("file already exists")
    
        }
        else{
            fileArray.push(filename)
            console.log("fileArray",fileArray)
            fs.writeFile("fileNames.txt",JSON.stringify(fileArray),(err)=>{
                if(err)
                console.log(err)
            })

            fs.writeFile(filename,"You are awesome", (err)=>{
                if(err)
                throw err;
                else
                console.log("data successfully written")
            })
        }
    }
})