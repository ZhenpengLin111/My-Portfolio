import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import './index.scss'
import { useEffect, useState } from "react"

const ScrollBtn = ({ scrollPos, ele }) => {
  // Visibility of scroll btn
  const [visible, setVisible] = useState(false)
  // Function to set visibility of scroll btn
  useEffect(() => {
    if (scrollPos > 300) {
      setVisible(true)
    } else if (scrollPos <= 300) {
      setVisible(false)
    }
  }, [scrollPos])

  // Function to scroll back to top of the page
  const scrollToTop = () => {
    ele.current.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button className="ScrollBtn" onClick={scrollToTop} style={visible ? { opacity: '1' } : { opacity: '0' }}>
      <FontAwesomeIcon icon={faChevronUp} size="2xl" />
    </button>
  )
}

export default ScrollBtn