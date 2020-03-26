import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contents: ['a', 'c', 'c'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      // console.log('accccc', action);
      return { ...state, contents: [...state.contents, action.content] };
    case actionTypes.UPDATE_NOTE:
      // console.log('accccc', action);
      /**
       * action: {name: 'ten', index: index}
       */
      const dataUpdated = state.contents.map((el, i) => {
        if (parseFloat(i) === parseFloat(action.content.index)) {
          return action.content.name;
        }
        return el;
      });
      return { ...state, contents: dataUpdated };

    case actionTypes.REMOVE_NOTE:
      // console.log('accccc', action);
      // const newState = _.cloneDeep(state)
      // delete newState.contents[action.content]
      const newDataRemoved = state.contents.filter((e, i) => i !== action.content);
      // state.content.map((e, i) => {
      //   if(i === action.index) {
      //     return action.name
      //   }
      //   return e
      // })


      return { ...state, contents: newDataRemoved };

    default:
      return state;
  }
};

