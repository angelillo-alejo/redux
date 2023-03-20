// Comments: como hemos indicado en el concepto general de nuestra aplicación también tenemos que crear 
// un componente que muestre los comentarios de cada post. Los comentarios que obtendremos se compondrán
//  de un título, una dirección de e-mail y el cuerpo del mensaje:

import React from "react";

export const Comment = ({ comment }) => (
  <div className="d-flex text-muted pt-3">
    <p className="pb-3 mb-0 small lh-sm border-bottom">
      <strong className="d-block text-gray-dark">{comment.title}</strong>
      <strong className="d-block text-gray-dark">{comment.email}</strong>
      {comment.body}
    </p>
  </div>
);