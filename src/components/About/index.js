import React from 'react';
import Nav from '../Nav';
import styles from './about.module.scss';



function About() {
    return (

        <div>
            <Nav/>
            <div className={styles['about-page']}>
                <div className={styles["about-avatar"]}>
                <h1 className = {styles['about-title']}>
                    Мусаев Самат Абдрахманович
                </h1>
                <img src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg" alt="portrait"/>
                </div>
                <div className={styles["about-info"]}>
                    <div className={styles['about-text']}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde atque enim maxime debitis ipsam eligendi assumenda, odit dolorem laborum rem officia aliquam ab sint ducimus sed porro rerum beatae pariatur?
                        Placeat consectetur, recusandae molestiae tempora nobis porro autem laudantium voluptatibus aspernatur, ab inventore debitis totam quam ad at itaque rerum vero cupiditate! Voluptates amet eum expedita perspiciatis modi, provident error.
                        Mollitia in commodi ex consequatur facere delectus atque accusamus nulla magnam possimus distinctio totam quia vero ad voluptatibus deleniti, cupiditate explicabo iusto sed et omnis culpa saepe. Soluta, assumenda debitis!
                        Quos odio repudiandae nesciunt qui animi ipsum autem similique mollitia? Beatae repudiandae cumque eos dolorum tenetur nihil aperiam neque reiciendis temporibus harum. Magni eum quae culpa qui reiciendis inventore voluptatem.
                        Minima sit, autem minus voluptatibus quasi ut sint assumenda commodi! Magni voluptas iure enim at officia facere, quasi commodi animi ducimus excepturi sequi quis labore voluptatem aperiam sed doloribus facilis!
                    </div>
                </div>
            </div>
    </div>

    );
    }


    export default About