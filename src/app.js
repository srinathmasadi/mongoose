const mongoose = require("mongoose");
//connection creation and creating a new database
mongoose.connect("mongodb://localhost:27017/ttchannel", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Connection successful..."))
.catch((err) => console.log(err));

//Schema

const playlistSchema= new mongoose.Schema({
    name:{
    type: String,
    required:true,
    unique:true,
    lowercase:true
},
    ctype: String,
    videos: Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default: Date.now
    }
})

//Mongoose Model
//collection creation
const Playlist=mongoose.model("Playlist",playlistSchema);

//Insert document
const createDocument = async () => {
    try{
        const jsPlaylist= new Playlist({
            name:"Javascript",
            ctype: "Backend End",
            videos: 80,
            author:"Masadi Srinath",
            active:true,
        })
        const mongoPlaylist= new Playlist({
            name:"Mongo",
            ctype: "Database",
            videos: 80,
            author:"Masadi Srinath",
            active:true,
        })
        const mongoosePlaylist= new Playlist({
            name:"Mongoose",
            ctype: "Database",
            videos: 80,
            author:"Masadi Srinath",
            active:true,
        })
    
    
    const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist]);
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
// createDocument();

//Read Operations
const getDocument = async()=>{
    const result= await Playlist.find({ctype:"Database"});
    console.log(result);
}
// getDocument();

//Update
const updateDocument= async (_id)=>{
    try{
        const result=await Playlist.findByIdAndUpdate({_id},{
            $set: {
                author:"Dukey Srinath"
            }
        }, {
                new: true,
                useFindAndModify: false
            
        });

        console.log(result);

    }catch(err){
        console.log(err);
    }
}

 //updateDocument("60f2a88c5e1da05580437e34");

 //Delete the documents
const deletDocument= async(_id)=>{
    try{
        const result= await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
   
}
 deletDocument("60f521c14c0fee1b5b81c9a7");