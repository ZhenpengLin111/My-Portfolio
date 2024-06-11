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
import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import Icon from "./icon";
import Footer from "@/Components/Footer";

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


    return (
        <div className="Home">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ZPL の 小窝</title>
                <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
            </Helmet>
            <div className="Home-container">
                <div className="Home-desc">
                    <p>Hey!</p>
                    <p>I'm <span>Zhenpeng</span>.</p>
                    <p>An aspiring front-end developer with a great passion for creating dynamic and user-friendly web applications.</p>
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
            <div className="About-Me">
                <h1>About Me</h1>
                <p>I am passionate about front-end development and dedicated to creating engaging user experiences. While I am still in the early stages of my journey, I have been actively learning and practicing key front-end technologies. I am particularly interested in responsive design and improving web performance.</p>
                <p>My background is in Computer Science, where I gained a solid understanding of programming principles, algorithms, and data structures. During my studies, I developed a keen interest in web development, particularly in creating interactive and aesthetically pleasing user interfaces. I have been channeling this interest into learning front-end development through online courses, tutorials, and personal projects.</p>
                <p>My goal is to become a proficient front-end developer, capable of building seamless and engaging web experiences. I am committed to continuous learning and improvement, and I am excited to contribute to innovative projects in the web development field.</p>
            </div>
            <div className="My-Projects">
                <h1>My Projects</h1>
                <div className="Projects-container">
                    <ul>
                        <Work
                            link={"https://zplarticlemanager.netlify.app"}
                            pic={ArticleManager}
                            name={'ArticleManager'}
                            description={'ArticleManager is a Vue 3 application that simulates a real-world article management system. It allows users to authenticate, update profiles, and create, edit, or delete articles, providing efficient content management and user interaction.'}
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
            <div className="My-Skills">
                <h1>My Skills</h1>
                <div ref={chartContainer} style={{ width: '100%', height: '75vh' }}></div>
            </div>
            <div className="Contact">
                <h1>Contact</h1>
                <p>I am actively seeking internship and job opportunities in front-end and web development. If you have any openings or would like to discuss potential collaborations, please feel free to reach out to me. I look forward to connecting with you!</p>
                <a href="mailto:penglin524@gmail.com" className="Hello-btn">
                    Say Hello
                </a>
                <ul className="Contact-Icons">
                    <Icon href={"https://github.com/ZhenpengLin111"} icon={faGithub} />
                    <Icon href={"https://www.linkedin.com/in/zhenpeng-lin-317621227"} icon={faLinkedin} />
                    <Icon href={"https://space.bilibili.com/387132771?spm_id_from=333.1007.0.0"} icon={faBilibili} style={{ marginRight: '0px' }} />
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Home;