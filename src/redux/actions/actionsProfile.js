import constType from "../constants/constProfile";

const getDataUserRequest = () => ({
  type: constType.GET_DATA_USER_REQUEST,
});

const getDataUserSuccess = (user) => ({
  type: constType.GET_DATA_USER_SUCCESS,
  payload: user,
});

const getDataUserError = (error) => ({
  type: constType.GET_DATA_USER_ERROR,
  payload: error,
});

const addDataUserRequest = (user) => ({
  type: constType.ADD_DATA_USER_REQUEST,
  payload: { ...user },
});

const addDataUserSuccess = (user) => {
  return {
    type: constType.ADD_DATA_USER_SUCCESS,
    payload: { ...user },
  };
};

const addDataUserError = (error) => ({
  type: constType.ADD_DATA_USER_ERROR,
  payload: error,
});

export default {
  getDataUserRequest,
  getDataUserSuccess,
  getDataUserError,

  addDataUserRequest,
  addDataUserSuccess,
  addDataUserError,
};
