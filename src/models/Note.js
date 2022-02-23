const mongoose =require("mongoose");

const NoteSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    markdown:{
        type:String,
        required:true,
    }
})



module.exports=mongoose.models.Note || mongoose.model("Note",NoteSchema);