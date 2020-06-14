import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Drive', band: 'Incubus', duration: '4:05'},
    { title: 'Free Fallin', band: 'Tom Petty', duration: '3:45'},
    { title: 'Undone', band: 'Weezer', duration: '5:32'},
    { title: 'No Rain', band: 'Blind Melon', duration: '2:48'},
    { title: 'Glycerine', band: 'Bush', duration: '6:12'}
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload.song
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})