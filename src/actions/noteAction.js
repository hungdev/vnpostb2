import * as actionTypes from './actionTypes';

export const addNote = (content) => {
  return {
    type: actionTypes.ADD_NOTE,
    content,   // content: content trong es6
  };
};
export const removeNote = (content) => {
  return {
    type: actionTypes.REMOVE_NOTE,
    content,   // content: content trong es6
  };
};
export const updateNote = (content) => {
  return {
    type: actionTypes.UPDATE_NOTE,
    content,   // content: content trong es6 // content: {name, index}
  };
};

