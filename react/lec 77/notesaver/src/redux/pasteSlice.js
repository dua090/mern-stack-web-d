import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully!");
    },
    updatePaste: (state, action) => {
      const { _id, newText } = action.payload;
      const index = state.pastes.findIndex((paste) => paste._id === _id);
      if (index !== -1) {
        state.pastes[index].content = newText;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated!");
      }
    },
    removeFromPastes: (state, action) => {
      state.pastes = state.pastes.filter((paste) => paste._id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted!");
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared!");
    },
  },
});

// Export action creators
export const { addToPastes, updatePaste, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
