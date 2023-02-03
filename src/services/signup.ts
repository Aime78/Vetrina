import {createUserWithEmailAndPassword} from 'firebase/auth';
import {authentication} from 'config/firebase';
import userData from 'types/userData';

const signup = async (userData: userData) => {
  const {email, password} = userData;
  try {
    const user = await createUserWithEmailAndPassword(
      authentication,
      email,
      password
    );
    return user;
  } catch (error: any) {
    const errorMessage = error.message;
    return errorMessage;
  }
};

export default signup;
