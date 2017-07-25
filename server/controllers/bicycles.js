var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Bicycle = mongoose.model("Bicycle");
var User = mongoose.model("User");

module.exports = {

    addBicycle: function(req, res){
       
        var bicycle = new Bicycle({
            imgurl: req.body.imgurl,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            location: req.body.location,
            _user: req.session.id
        });
        bicycle.save().then((bicycle)=>{
            User.update({_id: req.session.id}, {$push: {bicycles: bicycle}}, function(err, user)
            {
                if(err)
                {
                    console.log("There were errors tying the bicycle to the user...");
                }
                else
                {
                    console.log("Bicycle successfully tied to user!");
                }
            });
            console.log(`Successfully saved ${bicycle.title}...`);
            res.json(bicycle);
            console.log("After res.json, before redirect...");
        }).catch((err)=>{
            res.status(500);
            console.log("Inside the .catch");
            console.log(err);
            res.json(err);
        })
    },

    // findUser: function(req, res){
    //     console.log("Inside findUser method in Express Controller");
    //     User.findOne({email: req.body.email}).exec(function(err, user){
    //         if(err){
    //             console.log("Errors during findUser!");
    //             res.json(err);
    //             res.status(500);
    //         } 
    //         else{
    //             if(user.password != req.body.password)
    //             {
    //                 console.log("Passwords did not match!");
    //                 res.status(500);
    //                 res.json({error: "Passwords did not match!"});
    //             }
    //             else
    //             {
    //                 req.session.id = user._id;
    //                 res.json(user);
    //             }
                
    //         }
    //     })
    // },

    logout: function(req, res)
    {
        req.session.destroy();
        res.redirect('/');
    }

    // updateStatus: function(req, res){
    //     console.log(`stuff from req.body = ${req.body.playerId}, ${req.body.status}, ${req.body.idx}`)
    //     console.log("inside players.js updateStatus");
    //     let player = new Player();
    //     console.log(player)
    //     let idx = req.body.idx;
    //     let setter = {};
    //     setter[`status.${idx}`]=req.body.status; //this line builds the query which is used in the line below as $set:setter... $set is followed by a querry of what key to match and what value to set it to. Because we want to use a variable in the key we have to build this query here first and pass it in as a whole.
    //     player = Player.findOneAndUpdate({_id:req.body.playerId},{$set:setter}, {new:true}, function(err, result){
    //         if(err){
    //             console.log(err);
    //             res.json(err);
    //         }
    //         else{
    //             console.log(result);
    //             player = result;
    //         }
    //     })
    // },
    // destroy: function(req, res){
        
    //     console.log("inside delete player controller")
    //     console.log(`the player id is ${req.body.playerId}`)
    //     Player.remove({_id:req.body.playerId}, function(err, result){
    //         if(err){
    //             console.log("failed to delete player")
    //             res.json(err);
    //         }
    //         else{
    //             console.log("deleted player")
    //             console.log(result.name)
    //             res.json("good job")
    //         }
    //     }).exec();
}
