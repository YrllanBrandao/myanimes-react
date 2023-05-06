import { describe, expect, test } from "@jest/globals";
import server from '../../server';
import request from 'supertest';
import Anime from "../../models/anime";
import supertest from "supertest";
const anime = new Anime();

const newAnime = {
    id: 1,
    name: "overlord",
    numberEpisode: 1,
    synopsis: "anything...",
    coverUrl: "overlord-cover.com",
    coverPageUrl: "overlord-thumb.com"
}

describe("verifying  if the anime already exist", ()=>{

    const INVALID_NAME = "noone";
   test("it should return  a boolean", async ()=>{
    const result = await anime._verifyByName(INVALID_NAME);

    expect(result).toBe(false);
   })
})
describe("verifying  if the anime already exist by id", ()=>{

    test("it should return  false", async ()=>{
        const FAKE_ID = 33;
     const result = await anime._verifyById(FAKE_ID);
 
     expect(result).toBe(false);
    })
 })


describe("verifying if the register anime exist before delete him", ()=>{
   
    it("it should return false", async ()=>{
        const res = await  supertest(server)
        .delete("/anime/23");
        
        expect(res.status).toEqual(404);
    })
})  
