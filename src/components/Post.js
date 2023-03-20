// Post: este componente nos mostrará cada uno de los posts en la ruta /posts/postId. 

// Adicionalmente este componente mostrará los posts en la lista de posts del blog, 
// usando para ello una propiedad llamada summary que nos muestre un resumen del post 
// si el valor es true. Si el valor es false nos mostrará el contenido completo del post. 


import React from 'react';
import {Link} from 'react-router-dom';

export const Post = ({post, summary = false}) => (
  <article>
    {summary ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
    <hr/>
    <p>{summary ? post.body.substring(0, 100) : post.body}</p>

    {summary && (
      <Link to={`/posts/${post.id}`} className="btn btn-primary">
        Ver Post
      </Link>
    )}
    <hr/>
  </article>
);