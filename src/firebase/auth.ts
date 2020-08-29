import { auth } from './index';

export const loginWithGoogleAccount = async (): Promise<void> => {
  await auth()
    .signInWithPopup(new auth.GoogleAuthProvider())
    .catch(({ code: errorCode, message: errorMessage }) => {
      // Handle Errors here.
      // ...
      console.log(errorCode, errorMessage);
    });
};

export const loginAnonymously = async (): Promise<void> => {
  await auth().signInAnonymously();
};

export const logout = async (): Promise<void> => {
  await auth().signOut();
};

export const deleteUser = async (): Promise<void> => {
  const { currentUser } = auth();
  await auth().signOut();
  await currentUser?.delete().catch((error) => {
    console.log(error);
  });
};
