"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const anime_1 = __importDefault(require("../../models/anime"));
console.log(process.env.DB_PASSWORD);
const anime = new anime_1.default();
const newAnime = {
    name: "overlord",
    numberEpisode: 1,
    synopsis: "anything...",
    coverUrl: "overlord-cover.com",
    coverPageUrl: "overlord-thumb.com"
};
(0, globals_1.describe)("verifying  if the anime already exist", () => {
    (0, globals_1.test)("it should return  a boolean", () => {
        const result = anime._animeVerify(newAnime.name);
        (0, globals_1.expect)(result).toBe(false);
    });
});
(0, globals_1.describe)("POST /registerAnime", () => {
    (0, globals_1.test)("it should returns status 201 if the data is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post("/user")
            .send(newAnime);
        (0, globals_1.expect)(res.status).toEqual(201);
    }));
});
