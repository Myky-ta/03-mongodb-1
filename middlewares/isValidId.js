import mongoose from "mongoose";

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const isValid = mongoose.Types.ObjectId.isValid(contactId);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  next();
};

export default isValidId;