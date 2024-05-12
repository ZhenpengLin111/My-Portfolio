import './index.css'
import spacePic from '../../assets/space.svg'

const NotFound = () => {
  return (
    <div className='NotFound'>
      <div className='FourZeroFour'>
        <span className='number1'>4</span>
        <img src={spacePic} alt='' />
        <span className='number2'>4</span>
      </div>
      <p>Oops! Look like you're lost in space</p>
    </div>
  )
}

export default NotFound