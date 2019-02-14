import * as usersDao from '../dao/usersDao';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return usersDao.getAllUsers();
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createUser(user) {
  return usersDao.addUser({ name: user.name, updated_at: new Date() });
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         user
 * @returns {Promise}
 */
export function updateUser(id, user) {
  return usersDao.updateUser(id, { name: user.name, updated_at: new Date() });
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {
  return usersDao.getUser(id);
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return usersDao.deleteUser(id);
}
