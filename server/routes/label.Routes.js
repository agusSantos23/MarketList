import express from "express"

import { createLabel, deleteLabel, getLabel } from "../controllers/label.Controller.js"

const router = express.Router()

router.get("/:userId", getLabel)

router.post("/create", createLabel)

router.delete("/delete/:labelId", deleteLabel)

export default router