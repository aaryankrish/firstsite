import React from 'react';
import {Link} from 'react-router-dom';

const Posts = ({ posts, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <ul className='cards list-group'>
        {posts.map(post => (
          <li key={post.id} className='list-group-item  '>
          <h2> {post.title}</h2>
            <br/>
            <p><strong>Description</strong></p>
            {post.body}
            <br/>
            <Link to="/info&id={post.id}"><button className="btn ">info</button></Link>
          </li>
        ))}
      </ul>
    );
  };

export default Posts;