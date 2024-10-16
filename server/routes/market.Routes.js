import express from "express"

import { createMarket, getMarket, deleteMarket } from "../controllers/market.Controller.js"

const router = express.Router()

router.get("/:userId", getMarket)

router.post("/create", createMarket)

router.delete("/delete/:marketId", deleteMarket)

export default router
