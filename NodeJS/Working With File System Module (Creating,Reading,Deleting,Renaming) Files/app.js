const fs = require('fs');

//create a file
fs.writeFile('example.text',"this is an example",(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File successfully created');
        fs.readFile('example.txt','utf8',(err, file)=>{
            if(err)
                console.log(err);
            else    
                console.log(file);
        });
});

//rename a file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');
});

//append a file
fs.appendFile('example2.txt','Some date being appended',(err)=>{
    if(err)
        console.log('Successfully appened data to the file');
    else
        console.log('Successfully appended data to file');
});

//delete a file
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully delete the file');
});
