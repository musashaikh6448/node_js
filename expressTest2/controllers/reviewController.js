import reviewModel from "../Model/reviewModel.js";

export const createReview = async (req, res) => {
  try {
    const { reviewNumber, reviewComments, stars } = req.body;
    const createReview = await reviewModel.create({
      reviewNumber,
      reviewComments,
      stars,
    });

    if (!reviewNumber || !reviewComments || !stars) {
      res.status(400).json({
        succecc: false,
        messege: "all fields are required",
      });
    }

    res.status(201).json({
      succecc: true,
      messege: "review Submitted successfully",
      review: createReview,
    });
  } catch (error) {
    res.status(400).json({
      succecc: false,
      messege: "error while creating review",
      error: error.messege,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const updateReview = await reviewModel.findByIdAndUpdate(id, req.body);
    if (!updateReview) {
      res.status(400).json({
        succecc: false,
        messege: "Invalid review",
      });
    }
    res.status(201).json({
      succecc: true,
      messege: "review updated successfully",
      updatedReview: updateReview,
    });
  } catch (error) {
    res.status(400).json({
      succecc: false,
      messege: "error while updating review",
      error: error.messege,
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteReview = await reviewModel.findByIdAndDelete(id);
    if (!deleteReview) {
      return res.status(400).json({
        succecc: false,
        messege: "invalid review",
      });
    }

    res.status(201).json({
      succecc: true,
      messege: "review deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      succecc: false,
      messege: "error while deleting review",
      error: error.messege,
    });
  }
};

export const getReview = async (req, res) => {
  try {
    const getReview = await reviewModel.find();
    res.status(201).json({
      succecc: true,
      messege: "got reviews",
      review: getReview,
    });
  } catch (error) {
    res.status(400).json({
      succecc: false,
      messege: "erroe while getting reviews",
      error: error.messege,
    });
  }
};
