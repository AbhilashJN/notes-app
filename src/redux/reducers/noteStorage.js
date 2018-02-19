const defaultState = {
  notes: [],
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_NOTE': {
      return {
        ...prevState, notes: prevState.notes.concat([action.payload]),
      };
    }
    case 'UPDATE_NOTE': {
      const searchID = action.payload.id;
      const currNotes = prevState.notes;
      let i = 0;
      for (i = 0; i < currNotes.length; i += 1) {
        if (currNotes[i].id === searchID) {
          break;
        }
      }
      currNotes[i] = Object.assign({}, action.payload);
      return {
        ...prevState, notes: currNotes,
      };
    }
    default: {
      return prevState;
    }
  }
};


export default reducer;

