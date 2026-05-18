import { API } from "../../api/axiosInstance";

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

export const fetchRoles = () => async (dispatch, getState) => {
  if (getState().client.roles.length > 0) {
    return; 
  }
  try {
    const response = await API.get('/roles');
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    const response = await API.post('/auth/login', credentials);
    const token = response.data;

    const userData = {
      email: credentials.email,
      name: credentials.email.split('@')[0],
      token: token
    };
    
    dispatch(setUser(userData));
    localStorage.setItem('token', token);

    return userData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setUser({}));
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  
  if (!token) return;

  try {
    const userData = {
      token: token,
      name: "My Account" 
    };
    
    dispatch(setUser(userData));
  } catch (error) {
    console.error(error);
    localStorage.removeItem('token');
    dispatch(setUser({}));
  }
};