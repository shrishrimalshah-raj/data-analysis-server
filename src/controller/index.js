import express from "express";

import { QuestionRouter } from "./Question";
import {
  FIIRouterIndex,
  FIIRouterFuture,
  FIIRouterCall,
  FIIRouterPut,
} from "./FII";
import {
  PRORouterIndex,
  PRORouterFuture,
  PRORouterCall,
  PRORouterPut,
} from "./PRO";
import {
  CLIENTRouterIndex,
  CLIENTRouterFuture,
  CLIENTRouterCall,
  CLIENTRouterPut,
} from "./CLIENT";
import { NIFTYRouterIndex } from "./NIFTY";
import { NseStocksRouter } from "./STOCK/NSESTOCK";
import { FNOPCRRouter } from "./FNOPCR";

const router = express.Router();

router.use("/questions", QuestionRouter);

// FII ROUTES
router.use("/fii/index", FIIRouterIndex);
router.use("/fii/future", FIIRouterFuture);
router.use("/fii/call", FIIRouterCall);
router.use("/fii/put", FIIRouterPut);

// PRO ROUTES
router.use("/pro/index", PRORouterIndex);
router.use("/pro/future", PRORouterFuture);
router.use("/pro/call", PRORouterCall);
router.use("/pro/put", PRORouterPut);

// CLIENT ROUTES
router.use("/client/index", CLIENTRouterIndex);
router.use("/client/future", CLIENTRouterFuture);
router.use("/client/call", CLIENTRouterCall);
router.use("/client/put", CLIENTRouterPut);

// NIFTY ROUTES
router.use("/nifty/index", NIFTYRouterIndex);

// NSE STOCKS ROUTER
router.use("/nse/stock", NseStocksRouter);

// FNO PCR STOCK ROUTER
router.use("/fno/pcr", FNOPCRRouter);

// FNO PCR STOCK ROUTER
router.use("/base64/:id", (req, res) => {
  const { id } = req.params;
  let buff = new Buffer(id);
  let base64data = buff.toString("base64");
  res.send(base64data);
});

export default router;
