import React from 'react';
import posts from '../../data/posts.json';
import './Blog.module.css';
import {Link} from "react-router-dom";
import styles from "./Blog.module.css";

function Blog() {
    return (
        <>
            <h1 className={styles["header-blog"]}>Wat leuk dat je op onze fantastische blog bent!</h1>
            <h3>Hieronder zie je alle blogs die online staan</h3>
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