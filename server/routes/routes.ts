import express from 'express';
const Routes: any  = express.Router();

// models
import Anime from '../models/anime';

Routes.post("/anime", async(req:any, res:any)=>{
    const anime = new Anime();
    anime.registerAnime(req, res);
})



export default Routes;