const express = require("express");
import cors from "cors";
import contactsRouter from "./routes/api/contacts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

export default app;