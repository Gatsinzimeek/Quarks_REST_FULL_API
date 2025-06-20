import { v4 as uuidv4 } from 'uuid';
import { users } from '../data/users.js';

export const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const id = uuidv4();
  const newUser = { id, name, email };
  users[id] = newUser;
  res.status(201).json(newUser);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.json(user);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const existingUser = users[id];

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({ error: 'At least one field (name or email) is required to update.' });
  }

  if (name) existingUser.name = name;
  if (email) existingUser.email = email;

  res.json(existingUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users[id];

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  delete users[id];
  res.json({ message: 'User deleted successfully.' });
};
