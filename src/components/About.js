import React , {useContext, useEffect} from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext);  // useContext use with the noteContext file to get the data in about page
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  },[]);   // if you want run useEffect pass only one time
  return (
    <div className="container py-3">
      This is About <b>{a.state.name}</b> in class <b>{a.state.class}</b>
    </div>
  )
}

export default About
