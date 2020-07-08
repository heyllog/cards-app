export const LOAD_DATA = 'LOAD_DATA';
export const CANCEL_LOAD_DATA = 'CANCEL_LOAD_DATA';
export const PUT_DATA = 'PUT_DATA';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_CARD = 'DELETE_CARD';
export const SET_DELETED = 'SET_DELETED';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';
export const CANCEL_ADD_NEW_CARD = 'CANCEL_ADD_NEW_CARD';
export const CANCEL_DELETE_CARD = 'CANCEL_DELETE_CARD';
export const CANCEL_NEW_TRANSACTION = 'CANCEL_NEW_TRANSACTION';

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

export const cancelLoadData = () => {
  return {
    type: CANCEL_LOAD_DATA,
  };
};

export const cancelAddNewCard = () => {
  return {
    type: CANCEL_ADD_NEW_CARD,
  };
};

export const cancelDeleteCard = () => {
  return {
    type: CANCEL_DELETE_CARD,
  };
};

export const cancelNewTransaction = () => {
  return {
    type: CANCEL_NEW_TRANSACTION,
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

export const setDeleted = (id) => {
  return {
    type: SET_DELETED,
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
  readyToUse: false,
  wasDeleted: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        data: action.payload,
        readyToUse: true,
        wasDeleted: state.wasDeleted,
      };
    case SET_STATUS: {
      if (state.data) {
        return {
          data: [...state.data],
          readyToUse: action.payload,
          wasDeleted: state.wasDeleted,
        };
      } else {
        return {
          data: null,
          readyToUse: action.payload,
          wasDeleted: state.wasDeleted,
        };
      }
    }
    case SET_DELETED: {
      return {
        data: [...state.data],
        readyToUse: state.readyToUse,
        wasDeleted: action.payload,
      };
    }
    default:
      return state;
  }
};
