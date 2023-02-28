import { Loader } from "@/components";
import { Post } from "@/components/cards";
import { RootState } from "@/store";
import { fetchPosts } from "@/store/post";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const NewsScreen = () => {
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const [skip, setSkip] = useState<number>(10);

  const posts = useSelector((state: RootState) => state.post.posts);
  const loading = useSelector((state: RootState) => state.post.loading);

  const handleLoadMore = () => {
    setSkip((prev) => prev + skip);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {posts.slice(0, skip).map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "15px 0 15px 0",
        }}
      >
        <Button onClick={handleLoadMore} variant="contained" color="primary">
          {loading ? `${t("loading")}...` : `${t("Load More")}`}
        </Button>
      </Box>
    </>
  );
};
