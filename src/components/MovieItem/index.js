// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(thumbnailUrl)

  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <img src={thumbnailUrl} alt="thumbnail" />
          </div>
        }
        className="popup-content"
        position="center"
      >
        {close => (
          <div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>

            <div className="react-player">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
