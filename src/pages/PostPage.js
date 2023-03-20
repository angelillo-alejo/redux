import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getPost} from '../actions/postActions';
import {Post} from '../components/Post';

const PostPage = ({ match, dispatch, post, errors, loading }) => {

  useEffect(() => {
    const { postId } = match.params;
    dispatch(getPost(postId));
  }, [dispatch, match]);

  const showPost = () => {
    if (loading.post) return <p>Loading post...</p>
    if (errors.post) return <p>There has been an error.</p>

    return <Post post={post} summary={false} />
  }

  return (
    <div className="container">
      {showPost()}
  
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post.post,
  errors: { post: state.post.errors },
  loading: { post: state.post.loading },
});

export default connect(mapStateToProps)(PostPage);