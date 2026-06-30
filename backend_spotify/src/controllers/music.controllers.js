const musicModel = require("../models/music.models")
const {uploadFile} = require("../services/storage.services")
const jwt = require("jsonwebtoken")

async function createMusic(req,res) {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded.role == "artist"){
            return res.status(403).json({message:"you don't have access to create music"})
        }
    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = musicModel.create({
        uri:result.url,
        title,
        artist:decoded.id
    })
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
    }
}

module.exports = {createMusic}