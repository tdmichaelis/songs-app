import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'
import '../styles.css'

const App = () => {
  return (
    <div className="songs-app">
      <SongList />
      <SongDetail />
    </div>
  )
}

export default App