"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexConfig = {
    client: "mysql2",
    connection: {
        host: "172.17.0.2",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "myanimes"
    }
};
const Connection = (0, knex_1.default)(knexConfig);
exports.default = Connection;
