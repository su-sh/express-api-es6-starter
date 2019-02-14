import knex from '../db';
const TABLE_NAME = 'users';

/**
 *
 *
 * @returns {Promise}
 */
export const getAllUsers = () => {
  return knex(TABLE_NAME);
};

/**
 *
 *
 * @param {Object} user
 * @returns {Promise}
 */
export const addUser = user => {
  return knex(TABLE_NAME).insert(user, '*');
};

/**
 *
 *
 * @param {Integer} id
 * @returns {*}
 */
export const getUser = id => {
  return knex(TABLE_NAME).where({ id });
};

/**
 *
 * @param {Integer} id
 * @param {Object} user
 *
 * @returns {Promise}
 */
export const updateUser = (id, user) => {
  return knex(TABLE_NAME)
    .where({ id })
    .update(user);
};

/**
 *
 * @param {Integer} id
 *
 * @returns {Object}
 */
export const deleteUser = id => {
  return knex(TABLE_NAME)
    .where({ id })
    .del();
};
