import Contact from "../models/contact.js";

export const listContacts = () => Contact.find();

export const getContactById = (contactId) =>
  Contact.findById(contactId);

export const addContact = (data) =>
  Contact.create(data);

export const removeContact = (contactId) =>
  Contact.findByIdAndDelete(contactId);

export const updateContact = (contactId, data) =>
  Contact.findByIdAndUpdate(contactId, data, { new: true });

export const updateStatusContact = (contactId, body) =>
  Contact.findByIdAndUpdate(contactId, body, { new: true });