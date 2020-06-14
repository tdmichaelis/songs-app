import React from 'react'
import { connect } from 'react-redux'

const SongDetail = props => {
  let song = props.selectedSong || {}
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{song.title}</div>
          <div className="meta">{song.duration}</div>
          <div className="description">
            {song.band}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)