var express = require("express"),
    app = express(),
    http = require("http").Server(app).listen(80),
    upload = require("express-fileupload");
app.use(upload())

console.log("Server Started");

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res) => {
    if(req.files){
        var file = req.files.fileToUpload,
            fileName = file.name;
        file.mv("./upload/"+fileName, (err) => {
            if(err){
                console.log(err);
                res.send("error occured");
            }else{
                res.send("successfully uploaded file "+fileName+"!");
            }
        });
    }
});