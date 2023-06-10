import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const {
        id,
        product_name,
        category_name,
        description,
        created_by,
        status,
        created_at,
        updated_at,
      } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.product_name = product_name;
        uu.category_name = category_name;
        uu.description = description;
        uu.created_by = created_by;
        uu.status = status;
        uu.created_at = created_at;
        uu.updated_at = updated_at;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
      // const uu = state.find((user) => user.id == id);
      // if (uu) {
      //   return state.filter((f) => f.id !== id);
      // }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
