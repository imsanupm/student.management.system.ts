import express from "express";
import session from "express-session";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

app.set("view engine", "ejs");

// views directory setup
app.set("views", path.join(__dirname, "views"));

// static assets
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
 session({
   secret: process.env.SESSION_SECRET || "secret",
   resave: false,
   saveUninitialized: false
 })
);

app.use(routes);

export default app;