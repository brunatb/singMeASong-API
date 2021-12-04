import express from "express";
import * as songsController from "./controllers/songsController.js";

const routes = express.Router();

routes.post("/recommendations", songsController.postSong);

routes.post("/recommendations/:id/upvote", songsController.upvoteSong);
routes.post("/recommendations/:id/downvote", songsController.downvoteSong);

routes.get("/recommendations/top/:amount", songsController.listTopSongs);

export default routes;
