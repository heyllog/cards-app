export const LOAD_DATA = 'LOAD_DATA';
export const CANCEL_LOAD_DATA = 'CANCEL_LOAD_DATA';
export const PUT_DATA = 'PUT_DATA';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const SET_DELETED = 'SET_DELETED';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';
export const CANCEL_ADD_NEW_CARD = 'CANCEL_ADD_NEW_CARD';
export const CANCEL_DELETE_CARD = 'CANCEL_DELETE_CARD';
export const CANCEL_NEW_TRANSACTION = 'CANCEL_NEW_TRANSACTION';
export const CARD_CREATED = 'CARD_CREATED';
export const TRANSACTION_COMPLETE = 'TRANSACTION_COMPLETE';

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
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

export const setCardCreated = (data = null) => {
  return {
    type: CARD_CREATED,
    payload: data,
  };
};

export const setTransactionComplete = (data) => {
  return {
    type: TRANSACTION_COMPLETE,
    payload: data,
  };
};

const initialState = {
  data: null,
  readyToUse: false,
  wasDeleted: null,
  cardCreated: null,
  transactionComplete: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        ...state,
        data: action.payload,
        readyToUse: true,
      };

    case SET_DELETED:
      return {
        ...state,
        wasDeleted: action.payload,
      };

    case CARD_CREATED:
      return {
        ...state,
        cardCreated: action.payload,
      };

    case TRANSACTION_COMPLETE:
      return {
        ...state,
        transactionComplete: action.payload,
      };

    default:
      return state;
  }
};
