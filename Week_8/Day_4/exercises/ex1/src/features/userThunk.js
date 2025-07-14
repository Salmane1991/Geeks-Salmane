import { setUser, setError } from './userSlice';

export function fetchUser() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      dispatch(setUser(data));
    } catch (error) {
      dispatch(setError('Failed to fetch user'));
    }
  };
}