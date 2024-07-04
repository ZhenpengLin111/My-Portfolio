import { Helmet } from 'react-helmet';
import "./index.css"
import CUNY_JOIN from "../../assets/CUNY_JOIN.png";
import Recipe_Finder from "../../assets/Recipe-Finder.png"
import MyBlog from "../../assets/MyPortfolio.png";
import ArticlePoster from "../../assets/ArticleManager.png"
import Work from './Work'
import Footer from '@/Components/Footer';
import ScrollBtn from '@/Components/ScrollBtn';
import { useState, useRef } from 'react';

function Projects() {
     // Keep track of the scrolling position of the component
     const ProjectRef = useRef(null)
     const [scrollPos, setScrollPos] = useState(0)
     const handleScroll = (e) => {
         const { scrollTop } = e.target
         setScrollPos(scrollTop)
     }
    return (
        <div className="Projects" onScroll={handleScroll} ref={ProjectRef}>
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
                    <Work
                    link={"https://zplarticlemanager.netlify.app"} 
                    pic={ArticlePoster}
                    name={'ArticleManager'}
                    description={'ArticleManager is a Vue 3 application that simulates a real-world article management system. It allows users to authenticate, update profiles, and create, edit, or delete articles, providing efficient content management and user interaction.'}
                    tags={['Vue.Js', 'Element Plus', 'Axios']}
                    />
                    <Work
                    link={"https://zplrecipefinder.netlify.app/"} 
                    pic={Recipe_Finder}
                    name={'Recipe Finder'}
                    description={'A website simplifies meal planning by enabling you to discover recipes based on specific nutrients or available ingredients. Enjoy the convenience of finding the perfect dish for any occasion, personalized to your dietary preferences. '}
                    tags={['React Js', 'Axios']}
                    />
                    <Work
                    link={"https://main.d1hx4eb06kng5e.amplifyapp.com"}
                    pic={CUNY_JOIN} 
                    name={'CUNY_JOIN'}
                    description={'A comprehensive website which aims to serve the CUNY student community by providing two essential functions: scholarship searching and a student forum. '}
                    tags={['React Js', 'AWS']}
                    />
                    <Work
                    link={"https://zplmyportfolio.netlify.app/"}
                    pic={MyBlog}
                    name={'My Portfolio'}
                    description={'A portfolio website that introduces myself and document my growth on Web dev.'}
                    tags={['React Js']}
                    />
                </ul>
            </div>
            <Footer />
            <ScrollBtn scrollPos={scrollPos} ele={ProjectRef}/>
        </div>
    );
}

export default Projects;