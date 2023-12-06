import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
