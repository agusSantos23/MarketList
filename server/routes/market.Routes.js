import express from 'express';

import { createMarket, getMarket } from '../controllers/market.Controller.js';

const router = express.Router()

router.get('/:userId', getMarket)

router.post('/create', createMarket)

export default router
