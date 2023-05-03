"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
require("dotenv/config");
const PORT = process.env.PORT || 5000;
server_1.default.listen(PORT, () => console.log("running at port:", PORT));
