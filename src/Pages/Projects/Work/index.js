import './index.css'
import Tags from './Tags'
const Work = ({link, pic, name, description, tags}) => {
  return (
  <li className="work">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="work-pic" src={pic} alt=''/>
      <h4 className="work-name">{name}</h4>
      <p className="work-description">
        {description}
      </p>
      <Tags tags={tags}/>
    </a>
  </li>
  )
}

export default Work