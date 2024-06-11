import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'
const Icon = ({href, icon, style}) => {
  return (
    <li className="icon" style={style}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  )
}

export default Icon