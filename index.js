import express from "express";
import { findDuplicatesAB } from "./challange1.js";
import { getListPage } from "./listStorage.js";

const app = express();
app.use(express.json());

const port = 3000;

app.post("/", (req, res) => {
  const { list: listB } = req.body;

  const data = { hasDuplicates: findDuplicatesAB(listA, listB) };

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

getListPage(1);
