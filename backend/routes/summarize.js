import { Router } from "express"; 

import { summarizeTodos } from "../controllers/summarizeController.js";

const router = Router();

router.post('/', summarizeTodos);
  
export default router;