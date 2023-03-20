import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPost } from "../actions/postActions";
import { Post } from "../components/Post";

import { getComments } from "../actions/commentsActions";
import { Comment } from "../components/Comment";

const PostPage = ({ match, dispatch, post, errors, loading, comments }) => {
  useEffect(() => {
    const { postId } = match.params;
    dispatch(getPost(postId));
    dispatch(getComments(postId));
  }, [dispatch, match]);

  const showPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (errors.post) return <p>There has been an error.</p>;

    return <Post post={post} summary={false} />;
  };

  const showComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (errors.comments) return <p>There has been an error.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <div className="container">
      {showPost()}
      <h2>Comments</h2>
      {showComments()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  comments: state.comments.comments,
  errors: { post: state.post.errors },
  loading: { post: state.post.loading },
});

export default connect(mapStateToProps)(PostPage);