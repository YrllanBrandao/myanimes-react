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
const express_1 = __importDefault(require("express"));
const Routes = express_1.default.Router();
// models
const anime_1 = __importDefault(require("../models/anime"));
Routes.post("/anime", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const anime = new anime_1.default();
    anime.registerAnime(req, res);
}));
Routes.put("/anime", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const anime = new anime_1.default();
    anime.updateAnime(req, res);
}));
Routes.delete("/anime/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const anime = new anime_1.default();
    anime.deleteAnime(req, res);
}));
exports.default = Routes;
