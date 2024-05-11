import './index.css'
const Tags = ({tags}) => {
  return (
    <div className="tags">
      {tags.map((item, index) => <div key={index} className="tag">{item}</div>)}
    </div>
  )
}

export default Tags