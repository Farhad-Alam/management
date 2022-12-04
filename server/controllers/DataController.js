import { Data } from "../models/Data.js";

export const createData = async (req, res) => {
  try {
    const { name, sector, term } = req.body;

    if (!name || !sector || !term) {
      res.status(400).json({
        success: false,
        msg: "Please fill all the feilds",
      });
    }

    const data = await Data.create(req.body);

    res.status(201).json({
      success: true,
      msg: "Data has been Created",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
export const getData = async (req, res) => {
  try {
    const data = await Data.find();

    if (!data) {
      res.status(404).json({
        success: false,
        msg: "Something went wrong",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
export const getSingleData = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Data.findById(req.params.id);

    if (!data) {
      res.status(404).json({
        success: false,
        msg: "Something went wrong",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
export const updateData = async (req, res) => {
  try {
    const data = await Data.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        msg: "Data not Found",
      });
    }

    res.status(200).json({
      success: true,
      data,
      msg: "Data Updated SuccessFully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
export const deleteData = async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        msg: "Data not Found",
      });
    }

    res.status(200).json({
      success: true,
      msg: "Data deleted SuccessFully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};
