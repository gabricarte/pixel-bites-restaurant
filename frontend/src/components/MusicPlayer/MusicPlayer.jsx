import React, { useState } from 'react'
import './musicPlayer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

function MusicPlayer(props) {

    const [musicOn, setMusicOn] = useState(false);

    const turnMusicOn = () => {
        setMusicOn(true);
    }

    const turnMusicOff = () => {
        setMusicOn(false);
    }

  return (

    <div className='music-player'>

     {musicOn && <audio src={props.song} autoPlay loop/>}

     {musicOn ? (<MusicOffIcon
      className='music-icon' 
      style={{ fontSize: '2em', color: props.color}}
     onClick={turnMusicOff}/>) : (

        <MusicNoteIcon className='music-icon' 
        style={{ fontSize: '2em', color: props.color }}
        onClick={turnMusicOn} />
     )}

    </div>
  )
}

export default MusicPlayer;