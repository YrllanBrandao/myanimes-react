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
const anime_1 = __importDefault(require("../../models/anime"));
const supertest_1 = __importDefault(require("supertest"));
const anime = new anime_1.default();
const newAnime = {
    id: 1,
    name: "overlord",
    numberEpisode: 1,
    synopsis: "anything...",
    coverUrl: "overlord-cover.com",
    coverPageUrl: "overlord-thumb.com"
};
(0, globals_1.describe)("verifying  if the anime already exist", () => {
    const INVALID_NAME = "noone";
    (0, globals_1.test)("it should return  a boolean", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield anime._verifyByName(INVALID_NAME);
        (0, globals_1.expect)(result).toBe(false);
    }));
});
(0, globals_1.describe)("verifying  if the anime already exist by id", () => {
    (0, globals_1.test)("it should return  false", () => __awaiter(void 0, void 0, void 0, function* () {
        const FAKE_ID = 33;
        const result = yield anime._verifyById(FAKE_ID);
        (0, globals_1.expect)(result).toBe(false);
    }));
});
(0, globals_1.describe)("verifying if the register anime exist before delete him", () => {
    it("it should return false", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .delete("/anime/23");
        (0, globals_1.expect)(res.status).toEqual(404);
    }));
});
