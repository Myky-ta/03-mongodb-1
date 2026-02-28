import express from "express";
import isValidId from "../../middlewares/isValidId.js";
import {
  getAllContacts,
  getContact,
  createContact,
  deleteContact,
  updateContactById,
  updateFavorite,
} from "../../controllers/contactsControllers.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:contactId", isValidId, getContact);
router.post("/", createContact);
router.delete("/:contactId", isValidId, deleteContact);
router.put("/:contactId", isValidId, updateContactById);
router.patch("/:contactId/favorite", isValidId, updateFavorite);

export default router;