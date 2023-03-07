import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContacts = createAction('tasks/addContacts', contacts => {
  console.log(contacts);
  return {
    payload: {
      contacts,

      id: nanoid(),
      // completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');
