import { Router, Request, Response } from "express";
import sqlite3 from "sqlite3";

const router: Router = Router();
const db = new sqlite3.Database("./db/sales.db");

router.get("/", (req: Request, res: Response) => {
  db.all("SELECT * FROM products", [], (err: Error | null, rows: any[]) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

export default router;