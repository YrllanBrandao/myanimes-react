import { describe, expect, test } from "@jest/globals";
import server from '../../server';
import request from 'supertest';
import Anime from "../../models/anime";
import dotenv from 'dotenv'
console.log(process.env.DB_PASSWORD)
const anime = new Anime();

const newAnime = {
    name: "overlord",
    numberEpisode: 1,
    synopsis: "anything...",
    coverUrl: "overlord-cover.com",
    coverPageUrl: "overlord-thumb.com"
}

describe("verifying  if the anime already exist", ()=>{

   test("it should return  a boolean", ()=>{
    const result = anime._animeVerify(newAnime.name);

    expect(result).toBe(false)
   })
})
describe("POST /registerAnime", ()=>{

    test("it should returns status 201 if the data is passed", async ()=>{
        const  res:any = await request(server)
        .post("/user")
        .send(newAnime);
        expect(res.status).toEqual(201);
    })
})



