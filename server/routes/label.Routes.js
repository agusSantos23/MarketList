import express from "express"

import { createLabel, deleteLabel, getLabel, getLabelElement } from "../controllers/label.Controller.js"

const router = express.Router()

router.get("/:userId", getLabel)

router.get("/labelElements/:labelId", getLabelElement)

router.post("/create", createLabel)

router.delete("/delete/:labelId", deleteLabel)

export default router