var mongoose = require("mongoose");
const path = require("path");

users = require("./../controllers/users.js");
bicycles = require("./../controllers/bicycles.js");

module.exports = function(app){

    app.post("/findUser", function(req, res){
        console.log("Inside Find User Server Express route... " + req.body.email);
        users.findUser(req, res);
    })

    app.post("/addUser", function(req, res){
        console.log("Inside Add User Server Express route..." + req.body.email);
        users.create(req, res);
    })

    app.get("/logout", function(req, res){
        console.log("Inside Logout Express route...");
        users.logout(req, res);
    })

    app.get("/getSession", function(req, res){
        console.log("Inside Get Session Server Express route..." + req.session.id);
        if(req.session.id == null)
        {
            res.status(500);
            console.log("Session is currently null.");
            res.json({error: "Session is currently null!"});
        }
        else
        {
            res.status(200);
            res.json({id: req.session.id});
        }
        
    })

    app.post("/addBicycle", function(req, res){
        console.log("Inside Add Bike Server Express route..." + req.body.title);
        bicycles.addBicycle(req, res);
    })

    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
 


}

