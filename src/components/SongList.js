import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {

  renderSongList = () => {
    return this.props.songs.map((s, idx) => {
      return (
        <div className="item" key={idx}>
          <div className="right floated content">
            <div className="ui button" onClick={() => this.props.selectSong(s)}>Select</div>
          </div>
          <div className="content">
            {s.title}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui list song-list">
        {this.renderSongList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList)