import { create } from "zustand";

const token =
  typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

const userId =
  typeof window !== "undefined"
    ? localStorage.getItem("userId")
    : null;


const cooperativeId =
  typeof window !== "undefined"
    ? localStorage.getItem("cooperativeId")
    : null;


const userRole =
  typeof window !== "undefined"
    ? localStorage.getItem("userRole")
    : null;





// Offset Store
export const useOffsetStore = create((set) => ({
  offset: 0, 
  setOffset: (offset) => set({ offset }),
}));


// Auth Store
export const useAuthStore = create((set) => ({
    success: false,
    setSuccess: (open) => {
      set({ success: open });
    },
    successModal: false,
    setSuccessModal: (open) => {
      set({ successModal: open });
    },
    token: token, 
    setToken: (token) => {
      localStorage.setItem('token', token); // Save token to localStorage on login
      set({ token });
    },
    userId: userId,
    setUserId: (userId) => {
      localStorage.setItem('userId', userId); // Save userId to localStorage on login
      set({ userId });
    },
    cooperativeId: cooperativeId,
    setCooperativeId: (cooperativeId) => {
      localStorage.setItem('cooperativeId', cooperativeId); // Save cooperativeId to localStorage on login
      set({ cooperativeId });
    },
    userRole: userRole,
    setUserRole: (userRole) => {
      localStorage.setItem('userRole', userRole); // Save userRole to localStorage on login
      set({ userRole });
    },
}));

