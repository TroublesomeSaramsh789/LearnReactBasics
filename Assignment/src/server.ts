import express from "express";
import cors from "cors";
import API_CONTROLLER from './controller/apiController';
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(cors())
server.use(express.urlencoded())
server.use(express.json());
server.use("/api",API_CONTROLLER)

server.get("/",(req,res) => {
    res.send("Hello World")
})

export default server;