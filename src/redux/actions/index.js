const INCREMENT_LATEST_ID = 'INCREMENT_LATEST_ID';
const SAVE_NOTE = 'SAVE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';


export const incrementLatestId = () => ({ type: INCREMENT_LATEST_ID });

export const saveNote = payload => ({ type: SAVE_NOTE, payload });

export const updateNote = payload => ({ type: UPDATE_NOTE, payload });
