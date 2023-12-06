require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/auth");
const artistsRoute = require("./routes/artists");
const albumRoute = require("./routes/albums");
const songRoute = require("./routes/songs");
const app = express();
connection();
app.use(cors());

app.use(express.json());
app.use("/api/users/", userRoute);
app.use("/api/artists/", artistsRoute);
app.use("/api/albums/", albumRoute);
app.use("/api/songs/", songRoute);

app.listen(4000, () => console.log("lisitening to port 4000"));