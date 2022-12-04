import express from "express";
import {
  createData,
  deleteData,
  getData,
  getSingleData,
  updateData,
} from "../controllers/DataController.js";

const router = express.Router();

router.route("/create").post(createData);
router.route("/get").get(getData);
router.route("/get/:id").get(getSingleData);
router.route("/update/:id").put(updateData);
router.route("/delete/:id").delete(deleteData);

export default router;
