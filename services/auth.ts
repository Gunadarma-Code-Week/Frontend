import { Login, Register } from "@/interfaces/auth";
import instance from "@/lib/axiosInstance";

export const signInService = async (formData: Login) => {
  try {
    const response = await instance.post("/login", formData);
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const registerService = async (formData: Register) => {
  try {
    const response = await instance.post("/register", formData);
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
