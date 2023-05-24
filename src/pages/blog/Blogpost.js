import React from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../data/posts.json';

function Blogpost() {

    const {blogId} = useParams();

    const blogpost = posts.find((blogpost) => {
        return blogpost.id === `${blogId}`;
    })

    return (
        <>
            <article className="blogpost">
                <h1>{blogpost.title} </h1>
                <h3>{blogpost.date}</h3>
                <p>{blogpost.content}</p>
            </article>
            <Link to="/blogposts">Terug naar het overzicht van de blogposts</Link>
        </>
    )
}

export default Blogpost;