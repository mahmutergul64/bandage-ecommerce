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
    console.error("Roller çekilirken hata oluştu (Thunk):", error);
  }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    const response = await API.post('/login', credentials);
    
    dispatch(setUser(response.data));

    if (rememberMe) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Login Hatası:", error);
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
    API.defaults.headers.common['Authorization'] = token;

    const response = await API.get('/verify');

    dispatch(setUser(response.data));

    localStorage.setItem('token', response.data.token);
    API.defaults.headers.common['Authorization'] = response.data.token;

  } catch (error) {
    console.error("Token doğrulama başarısız:", error);
    localStorage.removeItem('token');
    delete API.defaults.headers.common['Authorization'];
    dispatch(setUser({}));
  }
};