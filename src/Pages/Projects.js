import { Helmet } from 'react-helmet';
import "../Styles/Projects.css";
import CUNY_JOIN from "../assets/CUNY_JOIN.png";
import Recipe_Finder from "../assets/Recipe-Finder.png"
import MyBlog from "../assets/MyBlog.png";

function Projects() {
    
    return (
        <div className="Projects">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | ZPL の 小窝</title>
                <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
            </Helmet>
            <div className="Projects-content">
                <div className="Projects-header">
                    <h1>Projects</h1>
                    <p>Showcase of my works on full-stack development.</p>
                </div>
                <ul className="works">
                    <li className="work">
                        <a href="https://main.d1hx4eb06kng5e.amplifyapp.com" target="_blank" rel="noopener noreferrer">
                        <img className="work-pic" src={CUNY_JOIN} alt=''/>
                            <h4 className="work-name">CUNY_JOIN</h4>
                            <p className="work-description">
                                A comprehensive website which aims to serve the CUNY student community by 
                                providing two essential functions: scholarship searching and a student forum. 
                            </p>
                            <div className="tags">
                                <div className="tag">React Js</div>
                                <div className="tag">AWS</div>
                            </div>
                        </a>
                    </li>
                    <li className="work">
                        <a href="https://zplrecipefinder.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="work-pic" src={Recipe_Finder} alt=''/>
                            <h4 className="work-name">Recipe Finder</h4>
                            <p className="work-description">
                                A website simplifies meal planning by enabling you to discover recipes based on 
                                specific nutrients or available ingredients. Enjoy the convenience of finding the perfect dish for any occasion, 
                                personalized to your dietary preferences. 
                            </p>
                            <div className="tags">
                                <div className="tag">React Js</div>
                                <div className="tag">Express Js</div>
                                <div className="tag">Axios</div>
                            </div>
                        </a>
                    </li>
                    <li className="work">
                        <a href="https://zplmyblog.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="work-pic" src={MyBlog} alt=''/>
                            <h4 className="work-name">My Blog</h4>
                            <p className="work-description">
                                A blog website that introduces myself and document my growth on Web dev.
                            </p>
                            <div className="tags">
                                <div className="tag">React Js</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;