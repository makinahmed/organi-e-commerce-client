import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../RTK/Slice/blogSlice";
import { Box } from "@mui/system";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.displayBlog);
  useEffect(() => {
    dispatch(fetchBlog());
  }, []);
  return (
    <Grid container justifyContent="center" spacing={12}>
      {blogs.slice(2,5).map((blog) => (
        <Grid item>
          <Card sx={{ minWidth: 345, maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={blog.img}
            />
            <CardContent sx={{ textAlign: "left" }}>
              <Box sx={{ color: "gray", textAlign: "left" }}>
                <CalendarTodayIcon
                  sx={{ display: "inline-block", padding: "0 10px 0 0" }}
                />
                {blog.date}
                <ChatBubbleOutlineOutlinedIcon
                  sx={{ display: "inline-block", padding: "0 10px" }}
                />
                {blog.review}
              </Box>
              <Typography
                gutterBottom
                variant="h4"
                sx={{ color: "black", fontWeight: 900, marginTop: 2 }}
                component="div"
              >
                {blog.title.toUpperCase()}
              </Typography>
              <Typography
                sx={{ fontSize: 15,letterSpacing:.5 }}
                variant="body2"
                color="text.secondary"
              >
                {blog.description.slice(0, 150)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
