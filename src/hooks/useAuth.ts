import React, {useEffect, useState} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {authentication} from 'config/firebase';

const useAuth = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      authentication,
      user => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      }
    );
    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
};

export default useAuth;
