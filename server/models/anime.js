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
const database_1 = __importDefault(require("../database/database"));
class Anime {
    constructor() {
        this._verifyById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, database_1.default)("animes").select().where({ id });
            if (result[0] !== undefined) {
                return true;
            }
            return false;
        });
        this._verifyByName = (name) => __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, database_1.default)("animes").select().where({ name });
            if (result[0] !== undefined) {
                return true;
            }
            return false;
        });
        this.deleteAnime = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const exist = yield this._verifyById(id);
                if (exist) {
                    const query = yield (0, database_1.default)("animes").delete("*").where({ id });
                    res.status(200).send(query);
                }
                else {
                    res.status(404).send("anime not found");
                }
            }
            catch (error) {
                res.status(400).send(error.sqlMessage);
            }
        });
        this.registerAnime = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const anime = req.body;
                const existAnime = yield this._verifyByName(anime.name);
                if (!existAnime) {
                    yield (0, database_1.default)("animes").insert({
                        name: anime.name,
                        coverPageUrl: anime.coverPageUrl,
                        coverUrl: anime.coverUrl,
                        synopsis: anime.synopsis,
                        numberEpisode: anime.numberEpisode
                    });
                    res.status(201).send("Created successfully!");
                }
            }
            catch (error) {
                res.status(400).send(error.sqlMessage);
            }
        });
        this.updateAnime = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnime = req.body;
                const { id } = req.body;
                if (!newAnime) {
                    res.status(400).send("Incorrect fields, please check and try again");
                }
                if (!id) {
                    res.status(400).send("Fild ID unavailable");
                }
                const exist = yield this._verifyById(id);
                if (exist) {
                    yield (0, database_1.default)("animes").update(newAnime).where({ id });
                    res.status(200).send("Updated!");
                }
                else {
                    res.status(400).send("incorrect ID");
                }
            }
            catch (error) {
                res.status(error.status).send(error.sqlMessage);
            }
        });
    }
}
exports.default = Anime;
