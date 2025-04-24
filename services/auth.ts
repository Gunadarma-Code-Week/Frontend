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

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("gcw_token");
    const response = await instance.get("/profile/my", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
        Accept: "*/*",
      },
      // withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const validateGoogleToken = async (token: string) => {
  try {
    const response = await instance.post("/auth/validate-google-id-token", {
      google_id_token: token,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
