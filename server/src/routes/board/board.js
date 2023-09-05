import { Router } from "express";

const board = Router();

board.get("/", (req, res) => {
  res.json([
    { id: 1, title: "test", content: "test 지훈" },
    { id: 2, title: "hello", content: "hello 지훈" },
    { id: 3, title: "bye", content: "bye 지훈" },
  ]);
});

export default board;
