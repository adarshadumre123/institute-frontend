import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Note = () => {
  const{courseId}=useParams()
  const[note,setNote]=useState({
    title:"",
    description:"",
    file:null
  })

  const[loading,setLoading]=useState(false);
  const handleChange =(e)=>{
    setNote({
      ...note,
      [e.target.name]:e.target.value,
    })
  }
  const handleFileChange=(e)=>{
    setNote({
      ...note,
      file:e.target.files[0]
    });
  };
  return (
    <div>Note</div>
  )
}

export default Note