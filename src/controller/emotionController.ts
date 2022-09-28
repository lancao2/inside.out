import { Request, Response, NextFunction } from "express";
import { Emotion } from "../modules/emotionModules";

export const newEmotion = async (req: Request, res: Response) =>{
    try {
        const emotion = new Emotion(req)
        await emotion.uploadEmotion()
        if(emotion.errors.length > 0){
        res.status(400).json({erros: emotion.errors})
        }
        res.status(201).json({
            user: emotion.user,
            emotion: emotion.emotion,
            message: "Emoção criada com sucesso"
        })
        
    } catch (error) {
        res.status(400).json({message: "algo deu errado em subir sua emoção"})
    }

}