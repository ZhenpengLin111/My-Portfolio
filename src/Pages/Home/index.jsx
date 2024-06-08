import "./index.scss"
import { Helmet } from 'react-helmet';
import Homeimg from "../../assets/aloneBoy.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Home() {
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
                    <p>A Computer Science Major Student Who is Interested in Web Development.</p>
                    <ul className="icons">
                        <li className="icon">
                            <a href="https://github.com/ZhenpengLin111" target="_blank" rel="noopener noreferrer"> 
                               <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://space.bilibili.com/387132771?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer">
                               <FontAwesomeIcon icon={faBilibili} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:penglin524@gmail.com" >
                               <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Home-img">
                    <img src={Homeimg} alt=""></img>
                </div> 
            </div>
        </div>

    );
}

export default Home;