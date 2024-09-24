import userModel from "../Model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    const userData = await userModel.create({
      name,
      email,
      mobile,
      password,
    });
    res.status(201).json({
      success: true,
      message: "got user data",
      data: userData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      massage: "error while creating data",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await userModel.findByIdAndUpdate(id, req.body);
    if (!updateUser) {
      return res.status(201).json({
        success: false,
        message: "all fields are required",
      });
    }

    res.status(201).json({
      success: true,
      message: "user updated successfully",
      data: updateUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while updating user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(400).json({
        success: false,
        message: "invalid User",
      });
    }

    res.status(201).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while deleting user",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const getUser = await userModel.find();
    0.0;
    res.status(201).json({
      success: true,
      message: "got user data",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while getting data",
    });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const getOneUser = await userModel.findOne({ _id: id });
    if (!getOneUser) {
      return res.status(400).json({
        success: false,
        message: "invalid user",
      });
    }

    res.status(201).json({
      success: true,
      message: "got one user details",
      data: getOneUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while getting user",
      error: error.message,
    });
  }
};
