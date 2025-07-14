import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/userThunk';

function UserData() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const error = useSelector(state => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserData;