// Posts: en esta página usaremos la función connect de react-redux para conectar 
// React a Redux. Esta función conectara la store a un componente de React




import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postsActions';
import {Post} from '../components/Post';


const Posts = ({dispatch, posts, loading, errors}) => {

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  const showPosts = () => {

    if (loading) return <p>Loading posts...</p>
    if (errors) return <p>There has been an error.</p>

    return posts.map((post) => <Post key={post.id} post={post} summary={true} />);
  }

  return (
    <div className="container">
      <h1 className="mb-4">Posts</h1>
      <hr/>
      {showPosts()}
    </div>
  );
}

//Una vez conectados pasaremos un parámetro llamado mapStateToProps que usará el 
// estado que queramos de la store y lo pasará a las propiedades del componente. 
// En este caso solo usaremos las propiedades posts, errors y loading que mapearemos 
// con el estado del reducer postReducer:

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  errores: state.posts.errors,
  cargando: state.posts.loading,
});

export default connect(mapStateToProps)(Posts);