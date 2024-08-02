import "./index.scss"
import { Helmet } from 'react-helmet';
import Homeimg from "../../assets/aloneBoy.png"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Work from "../Projects/Work";
import ArticleManager from '@/assets/ArticleManager.png'
import CUNY_JOIN from '@/assets/CUNY_JOIN.png'
import Recipe_Finder from '@/assets/Recipe-Finder.png'
import My_Portfolio from '@/assets/MyPortfolio.png'
import { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts';
import Icon from "./icon";
import Footer from "@/Components/Footer";
import ScrollBtn from "@/Components/ScrollBtn";
import CountdownTimer from '@/assets/Countdown-Timer.png'


function Home() {
    const chartRef = useRef(null)
    const chartContainer = useRef(null)
    useEffect(() => {
        // E-chart for skills set
        chartRef.current = echarts.init(chartContainer.current);

        const data = [
            {
                // name: 'My Skills',
                itemStyle: { color: '#430f58' },
                children: [
                    {
                        name: 'Programming Languages',
                        value: 25,
                        itemStyle: { color: '#6643b5' },
                        children: [
                            {
                                name: 'HTML',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'CSS',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'JavaScript',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'TypeScript',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'C++',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'Python',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            }
                        ]
                    },
                    {
                        name: 'Frameworks and Libraries',
                        value: 12,
                        itemStyle: { color: '#6643b5' },
                        children: [
                            {
                                name: 'React',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'Vue.js',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'Node.js',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            }
                        ]
                    },
                    {
                        name: 'Tools and Technologies',
                        value: 17,
                        itemStyle: { color: '#6643b5' },
                        children: [
                            {
                                name: 'AJAX',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'Webpack',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'Git',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            },
                            {
                                name: 'MySQL',
                                value: 3,
                                itemStyle: { color: '#8594e4' }
                            }
                        ]
                    }
                ]
            },
        ];
        const option = {
            series: {
                type: 'sunburst',
                // emphasis: {
                //     focus: 'ancestor'
                // },
                data: data,
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
        option && chartRef.current.setOption(option);

        return () => {
            chartRef.current.dispose();
        };
    }, []);

    // Keep track of the scrolling position of the component
    const HomeRef = useRef(null)
    const [scrollPos, setScrollPos] = useState(0)
    const handleScroll = (e) => {
        const { scrollTop } = e.target
        setScrollPos(scrollTop)
        handleSectionVis()
    }

    // Visibilities of different sections
    const [aboutMeVis, setAboutMeVis] = useState(false)
    const [projectsVis, setProjectsVis] = useState(false)
    const [skillsVis, setSkillsVis] = useState(false)
    const [contactVis, setContactVis] = useState(false)

    const handleSectionVis = () => {
        const aboutMe = document.querySelector('.About-Me')
        const myProjects = document.querySelector('.My-Projects')
        const mySkills = document.querySelector('.My-Skills')
        const contact = document.querySelector('.Contact')
        if (aboutMe) {
            const sectionTop = aboutMe.getBoundingClientRect().top
            setAboutMeVis(sectionTop <= window.innerHeight / 2)
        }
        if (myProjects) {
            const sectionTop = myProjects.getBoundingClientRect().top
            setProjectsVis(sectionTop <= window.innerHeight / 2)
        }
        if (mySkills) {
            const sectionTop = mySkills.getBoundingClientRect().top
            setSkillsVis(sectionTop <= window.innerHeight / 2)
        }
        if (contact) {
            const sectionTop = contact.getBoundingClientRect().top
            setContactVis(sectionTop <= window.innerHeight / 2)
        }

    }

    return (
        <div className="Home" onScroll={handleScroll} ref={HomeRef}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ZPL の 小窝</title>
                <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
            </Helmet>
            <div className="Home-container">
                <div className="Home-desc">
                    <p>Hey!</p>
                    <p>I'm <span>Zhenpeng</span>.</p>
                    <p>An aspiring full-stack developer with a great passion for creating dynamic and user-friendly web applications.</p>
                    <ul className="icons">
                        <Icon href={"https://github.com/ZhenpengLin111"} icon={faGithub} />
                        <Icon href={"https://www.linkedin.com/in/zhenpeng-lin-317621227"} icon={faLinkedin} />
                        <Icon href={"https://space.bilibili.com/387132771?spm_id_from=333.1007.0.0"} icon={faBilibili} />
                        <Icon href={"mailto:penglin524@gmail.com"} icon={faEnvelope} />
                    </ul>
                </div>
                <div className="Home-img">
                    <img src={Homeimg} alt=""></img>
                </div>
            </div>
            <div className={`About-Me ${aboutMeVis ? 'fade-in' : ''}`}>
                <h1 className={`${aboutMeVis ? 'fade-in-bottom' : ''}`}>About Me</h1>
                <p className={`${aboutMeVis ? 'fade-in-bottom' : ''}`}>I am passionate about full-stack development and dedicated to creating engaging user experiences. While I am still in the early stages of my journey, I have been actively learning and practicing key full-stack technologies. I am particularly interested in responsive design and improving web performance.</p>
                <p className={`${aboutMeVis ? 'fade-in-bottom' : ''}`}>My background is in Computer Science, where I gained a solid understanding of programming principles, algorithms, and data structures. During my studies, I developed a keen interest in web development, particularly in creating interactive and aesthetically pleasing user interfaces. I have been channeling this interest into learning full-stack development through online courses, tutorials, and personal projects.</p>
                <p className={`${aboutMeVis ? 'fade-in-bottom' : ''}`}>My goal is to become a proficient full-stack developer, capable of building seamless and engaging web experiences. I am committed to continuous learning and improvement, and I am excited to contribute to innovative projects in the web development field.</p>
            </div>
            <div className={`My-Projects ${projectsVis ? 'fade-in' : ''}`}>
                <h1 className={`${projectsVis ? 'fade-in-x' : ''}`}>My Projects</h1>
                <div className={`Projects-container ${projectsVis ? 'fade-in-x' : ''}`}>
                    <ul>
                        <Work
                            link={"https://zplcountdown-timer.netlify.app/"}
                            pic={CountdownTimer}
                            name={'Countdown Timer'}
                            description={'The Countdown Timer app helps users track important upcoming events by providing a real-time decrementing display of the time remaining until each event.'}
                            tags={['React Js', 'MUI']}
                        />
                        <Work
                            link={"https://zplarticlemanager.netlify.app"}
                            pic={ArticleManager}
                            name={'ArticleManager'}
                            description={'ArticleManager is a Vue 3 backend system for article management. It allows users to authenticate, update profiles, and create, edit, or delete articles, providing efficient content management and user interaction.'}
                            tags={['Vue.Js', 'Element Plus', 'Axios']}
                        />
                        <Work
                            link={"https://zplrecipefinder.netlify.app/"}
                            pic={Recipe_Finder}
                            name={'Recipe Finder'}
                            description={'A website simplifies meal planning by enabling you to discover recipes based on specific nutrients or available ingredients. Enjoy the convenience of finding the perfect dish for any occasion, personalized to your dietary preferences. '}
                            tags={['React Js', 'Express Js', 'Axios']}
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
                            pic={My_Portfolio}
                            name={'My Portfolio'}
                            description={'A portfolio website that introduces myself and document my growth on Web dev.'}
                            tags={['React Js']}
                        />
                    </ul>
                </div>
            </div>
            <div className={`My-Skills ${skillsVis ? 'fade-in' : ''}`}>
                <h1 className={skillsVis ? 'fade-in-x' : ''}>My Skills</h1>
                <div className={`skillChart ${skillsVis ? 'fade-in-x' : ''}`} ref={chartContainer} style={{ width: '100%', height: '75vh' }}></div>
            </div>
            <div className={`Contact ${contactVis ? 'fade-in' : ''}`}>
                <h1 className={contactVis ? 'fade-in-bottom' : ''}>Contact</h1>
                <p className={contactVis ? 'fade-in-bottom' : ''}>I am actively seeking internship and job opportunities in full-stack and web development. If you have any openings or would like to discuss potential collaborations, please feel free to reach out to me. I look forward to connecting with you!</p>
                <a href="mailto:penglin524@gmail.com" className={`Hello-btn ${contactVis ? 'fade-in-bottom' : ''}`}>
                    Say Hello
                </a>
                <ul className={`Contact-Icons ${contactVis ? 'fade-in-bottom' : ''}`}>
                    <Icon href={"https://github.com/ZhenpengLin111"} icon={faGithub} />
                    <Icon href={"https://www.linkedin.com/in/zhenpeng-lin-317621227"} icon={faLinkedin} />
                    <Icon href={"https://space.bilibili.com/387132771?spm_id_from=333.1007.0.0"} icon={faBilibili} style={{ marginRight: '0px' }} />
                </ul>
            </div>
            <Footer />
            <ScrollBtn scrollPos={scrollPos} ele={HomeRef} />
        </div>
    );
}

export default Home;