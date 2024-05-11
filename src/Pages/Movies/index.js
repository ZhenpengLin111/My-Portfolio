import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import "./index.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Movies() {
    useEffect(() => {
        const spanClasses = document.querySelector('.Movies-top span');
        const h1Classes = document.querySelector('.Movies-top h1');
        const moviesList = document.querySelector('.Movies-list');
    
        const handleScroll = () => {
            const scrollPosition = moviesList.scrollTop;
    
          // You can adjust the threshold value based on when you want the effect to trigger
          const threshold = 100;
    
          if (scrollPosition > threshold) {
            spanClasses.style.opacity = '1';
            h1Classes.style.opacity = '0';
          } else {
            spanClasses.style.opacity = '0';
            h1Classes.style.opacity = '1';
          }
        };
    
        // Add scroll event listener
        moviesList.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          moviesList.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array to ensure the effect runs only once on mount
    
    
    return(
        <div className="Movies">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movies | ZPL の 小窝</title>
                <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
            </Helmet>
            <div className="Movies-content">
                <div className="Movies-top">
                    <h1> 
                        <p>The Movies I Chased</p>
                        <p>Over the Years</p> 
                    </h1>
                    <span>
                        <p>The movie will end but we won't.</p>
                        <p>电影会谢幕但我们不会。</p>
                    </span>  
                </div>
                <div className="Movies-list">
                <div className="movie-card">
                    <h1>Toy Story</h1>
                    <span>124 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.3/10</span>
                    </span>
                    <p>A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.</p>
                </div>
                <div className="movie-card">
                    <h1>The Avengers</h1>
                    <span>142 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.0/10</span>
                    </span>
                    <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
                </div>
                <div className="movie-card">
                    <h1>Avengers: Age of Ultron</h1>
                    <span>142 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>7.3/10</span>
                    </span>
                    <p>When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.</p>
                </div>
                <div className="movie-card">
                    <h1>Avengers: Infinity War</h1>
                    <span>149 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.4/10</span>
                    </span>
                    <p>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</p>
                </div>
                <div className="movie-card">
                    <h1>Avengers: Endgame</h1>
                    <span>181 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.4/10</span>
                    </span>
                    <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
                </div>
                <div className="movie-card">
                    <h1>Spider-Man: Homecoming</h1>
                    <span>130 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>7.4/10</span>
                    </span>
                    <p>Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.</p>
                </div>
                <div className="movie-card">
                    <h1>Incredibles 2</h1>
                    <span>92 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>7.6/10</span>
                    </span>
                    <p>The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.</p>
                </div>
                <div className="movie-card">
                    <h1>Batman Begins</h1>
                    <span>140 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.2/10</span>
                    </span>
                    <p>After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.</p>
                </div>
                <div className="movie-card">
                    <h1>The Dark Knight</h1>
                    <span>152 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>9.0/10</span>
                    </span>
                    <p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
                </div>
                <div className="movie-card">
                    <h1>The Dark Knight Rises</h1>
                    <span>165 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>8.4/10</span>
                    </span>
                    <p>Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.</p>
                </div>
                <div className="movie-card">
                    <h1>Detective Conan: The Phantom of Baker Street</h1>
                    <span>107 min</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} className="star"/>
                        <span>7.8/10</span>
                    </span>
                    <p>Conan and his friends were invited to the premier of an new virtual computer game. But someone programmed the game, that if they can't answer the riddle in the game, they all have to die.</p>
                </div>
                </div>
            </div>
            

        </div>
    );
}

export default Movies;