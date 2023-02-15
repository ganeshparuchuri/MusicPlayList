import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const PlaylistItem = props => {
  const {eachPlaylist, removeItem} = props
  const {id, imageUrl, name, genre, duration} = eachPlaylist

  const deleteButton = () => {
    removeItem(id)
  }

  return (
    <>
      <div className="name-genre-container">
        <div className="div1">
          <img
            src={imageUrl}
            alt="track"
            style={{width: '200px', marginRight: '20px'}}
          />
          <div style={{width: '100%'}}>
            <p style={{fontSize: '20px', color: 'white'}}>{name}</p>
            <p style={{color: '#3b82f6', fontWeight: 'bold'}}>{genre}</p>
          </div>
        </div>
        <div className="div2">
          <p style={{color: 'white'}}>{duration}</p>
          <button
            type="button"
            className="button"
            onClick={deleteButton}
            data-testid="delete"
          >
            <AiOutlineDelete style={{color: 'white', marginLeft: '30px'}} />
          </button>
        </div>
      </div>
    </>
  )
}
export default PlaylistItem
