import React from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../data/posts.json';
import styles from "./Blogpost.module.css";

function Blogpost() {

    const {blogId} = useParams();

    const blogpost = posts.find((blogpost) => {
        return blogpost.id === `${blogId}`;
    })

    return (
        <>
            <div className="outer-container">
                <section className={`inner-container ${styles["blogpost-inner"]}`}>
                    <article className={styles["blogpost"]}>
                        <h1>{blogpost.title} </h1>
                        <h3>{blogpost.date}</h3>
                        <p>{blogpost.content}</p>
                    </article>

            <Link to="/blogposts">Terug naar het overzicht van de blogposts</Link>
                </section>
            </div>
        </>
    )
}

export default Blogpost;