import React from 'react';
import styles from "./Home.module.css";

function Home() {

    return (
        <>
            <div className="outer-container">
                <article className={`inner-container ${styles["home-inner"]}`}>
                    <h1>Welkom op dit blog platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dolore dolorem iusto
                        laudantium nam
                        perferendis placeat. Aut dolore ea maxime neque quae quo recusandae sint voluptate. Accusantium
                        alias
                        amet animi at autem cumque deleniti dignissimos dolor expedita illo ipsam nam, officiis omnis
                        placeat
                        rem saepe tenetur veniam voluptate voluptatem.</p>
                </article>
            </div>
        </>
    )
}

export default Home;