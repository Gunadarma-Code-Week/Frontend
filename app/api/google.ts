import { auth, provider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const signWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
