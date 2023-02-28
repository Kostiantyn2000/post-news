import React, { FC } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { IPost } from "@/types";
import styles from "./index.module.css";
import { TrashIcon } from "@/components/core";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { postAuction } from "@/store/post";

export const Post: FC<IPost> = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(postAuction.deletePost({ id: id }));
  };

  return (
    <Card className={styles.cardPost} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {id} Post
        </Typography>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Typography color="textSecondary">
          By Unknown on {new Date().toLocaleTimeString()}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <TrashIcon onDelete={onDelete} />
      </Box>
    </Card>
  );
};
