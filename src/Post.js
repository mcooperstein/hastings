import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4">Post Title</h1>
        <p className="lead">
          by:
          <a href="#"> Start Bootstrap</a>
        </p>
        <hr/>
        <p>Posted on January 1, 2018 at 12:00 PM</p>
        <hr/>
        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
        <hr/>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
      </div>
    )
  }
}

export default Post;
