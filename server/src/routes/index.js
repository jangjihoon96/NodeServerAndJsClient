import { Router } from "express";
import board from "./board/board.js";

const router = Router();

// 필요한 라우터 추가하기
router.use("/", board);

export default router;
