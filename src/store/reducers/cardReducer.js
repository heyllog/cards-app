export const LOAD_DATA = 'LOAD_DATA';
export const CANCEL_OPERATION = 'CANCEL_LOAD_DATA';
export const PUT_DATA = 'PUT_DATA';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_CARD = 'DELETE_CARD';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
  };
};

export const cancelOperation = () => {
  return {
    type: CANCEL_OPERATION,
  };
};

export const addNewCard = (data) => {
  return {
    type: ADD_NEW_CARD,
    payload: data,
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};

export const newTransaction = (data) => {
  return {
    type: NEW_TRANSACTION,
    payload: data,
  };
};

const initialState = {
  data: null,
  status: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return action.payload;
    case SET_STATUS: {
      if (state.data) {
        return {
          data: [...state.data],
          status: action.payload,
        };
      } else {
        return {
          data: null,
          status: action.payload,
        };
      }
    }
    default:
      return state;
  }
};
