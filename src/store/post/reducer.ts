import { IPost } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./namspase";

export interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?limit=10`
  );
  const data = await response.json();

  return data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post.TCreatePostPayload>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<Post.TDeletePostPayload>) => {
      state.posts = state.posts.filter((post) => action.payload.id !== post.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<Post.TCreatePostPayload[]>) => {
          console.log("Auction", action.payload);

          state.loading = false;
          state.posts = action.payload;
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const postAuction = { ...postSlice.actions };

export const postReducer = postSlice.reducer;
