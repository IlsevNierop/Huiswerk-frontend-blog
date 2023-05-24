import React from 'react';
import posts from '../../data/posts.json';
import './Blog.css';
import {Link} from "react-router-dom";

function Blog() {
    return (
        <>
            <h1>Wat leuk dat je op onze fantastische blog bent!</h1>
            <p>Momenteel zijn er {posts.length} blogposts voor je om te lezen</p>
            <ul>
                {posts.map((blogpost) => {
                    return (
                        <li key={blogpost.id}><Link to={`/blogposts/${blogpost.id}`}>{blogpost.title}</Link></li>
                    )
                })}
            </ul>

        </>
    )
}

export default Blog;