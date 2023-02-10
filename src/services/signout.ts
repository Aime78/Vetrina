import {signOut} from 'firebase/auth';
import {authentication} from 'config/firebase';

const handleSignout = () => {
  signOut(authentication);
};

export default handleSignout;
