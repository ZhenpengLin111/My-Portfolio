import "./index.css"
import { Helmet } from 'react-helmet';
import Giscus from '@giscus/react';
import Footer from "@/Components/Footer";
import { useState, useRef } from "react";
import ScrollBtn from "@/Components/ScrollBtn";

function About() {
    // Keep track of the scrolling position of the component
    const AboutRef = useRef(null)
    const [scrollPos, setScrollPos] = useState(0)
    const handleScroll = (e) => {
        const { scrollTop } = e.target
        setScrollPos(scrollTop)
    }
    return (
        <div className="About" onScroll={handleScroll} ref={AboutRef}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | ZPL の 小窝</title>
                <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
            </Helmet>
            <div className="About-content">
                <div className="About-content-top">
                    <h1 className="about">About</h1>
                    <ul className="cards">
                        <li>
                            <h1>Who Am I</h1>
                            <p>
                                Hi! I'm Zhenpeng Lin, a recent computer science major alumni with a passion for full-stack development.
                                Armed with skills in JavaScript, Python, C++, HTML, React and etc,
                                I embark on the exciting journey of crafting engaging and user-friendly web experiences.
                            </p>
                        </li>
                        <li>
                            <h1>My Interests</h1>
                            <p>
                                Beyond coding, my interests span a diverse range of activities.
                                From intense workouts at the gym to immersive gaming sessions,
                                I find joy in the dynamic balance of staying active and embracing the digital realm. A music enthusiast at heart,
                                I appreciate the power of melodies to enhance every moment.
                            </p>
                            <p>
                                Currently calling Brooklyn, NY, my home, I draw inspiration from the vibrant energy of the city.
                                When I'm not coding, you'll find me immersed in captivating TV series and movies,
                                exploring stories that broaden my perspectives.
                            </p>
                        </li>
                        <li className="Contacts">
                            <h1>My Contacts:</h1>
                            <ol>
                                <a href="mailto:penglin524@gmail.com" >
                                    <div className="dot"></div>
                                    <span>Mail</span>
                                </a>
                            </ol>
                            <ol>
                                <a href="https://github.com/ZhenpengLin111" target="_blank" rel="noopener noreferrer">
                                    <div className="dot"></div>
                                    <span>Github</span>
                                </a>
                            </ol>
                            <ol>
                                <a href="https://www.linkedin.com/in/zhenpeng-lin-317621227" target="_blank" rel="noopener noreferrer">
                                    <div className="dot"></div>
                                    <span>LinkedIn</span>
                                </a>
                            </ol>
                            <ol>
                                <a href="https://space.bilibili.com/387132771?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
                                    <div className="dot"></div>
                                    <span>Bilibili</span>
                                </a>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="About-content-bottom">
                    <Giscus
                        id="comments"
                        repo="ZhenpengLin111/My-Portfolio"
                        repoId="R_kgDOLuC-CQ"
                        category="Announcements"
                        categoryId="DIC_kwDOLuC-Cc4Cerul"
                        mapping="pathname"
                        term="Welcome to @giscus/react component!"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="bottom"
                        theme="preferred_color_scheme"
                        lang="en"
                        loading="lazy"
                    />
                </div>
            </div>
            <Footer />
            <ScrollBtn scrollPos={scrollPos} ele={AboutRef} />
        </div>
    );
}

export default About;