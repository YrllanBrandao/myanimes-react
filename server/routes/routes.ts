import express from 'express';
const Routes: any  = express.Router();

// models
import Anime from '../models/anime';

Routes.post("/anime", async(req:any, res:any)=>{
    const anime = new Anime();
    anime.registerAnime(req, res);
})
Routes.put("/anime", async(req:any, res:any)=>{
    const anime = new Anime();
    anime.updateAnime(req, res);
})

Routes.delete("/anime/:id", async(req:any, res:any)=>{
    const anime = new Anime();
    anime.deleteAnime(req, res);
})
export default Routes;