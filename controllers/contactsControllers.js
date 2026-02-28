import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

export const getContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(result);
};

export const createContact = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

export const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);

  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json({ message: "contact deleted" });
};

export const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);

  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(result);
};

export const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  if (typeof favorite !== "boolean") {
    return res.status(400).json({ message: "missing field favorite" });
  }

  const result = await updateStatusContact(contactId, { favorite });

  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(result);
};