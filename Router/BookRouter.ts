import express from "express"
import {AllBooks, uploadBooks} from "../Controller/BooksController"

const Router = express.Router();

Router.route("/uploadBooks").post(uploadBooks);
Router.route("/allBooks").get(AllBooks)

export default Router;
