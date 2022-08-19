import express from "express";
import routes from "./routers/user.routes";

const app = express();

app.use(express.json());

app.use(routes);

export default app;
