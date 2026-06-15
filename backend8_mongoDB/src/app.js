const express = require("express");
const noteModel = require("./models/notes.model.js");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "Note created successfully"
    });
});

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message:"notes fetched sucessfully",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id);

    res.status(201).json({
        message:"Note deleted sucessfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(201).json({
        message:"Note updated sucessfully"
    })
})

module.exports = app;