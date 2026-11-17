import { Router } from "express";

const router = Router();

router.get("/",async(req,res)=>{

  res.json([
    {
      state:"QLD",
      rate:13.2
    },
    {
      state:"NSW",
      rate:10.8
    }
  ]);

});

export default router;
