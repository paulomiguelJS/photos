import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { api } from '../../services/api'

const Photo = () => {

const params = useParams()

const [photo, setPhoto] = useState([])


useEffect(() => {
  if(params.id) {
    getPhoto(params.id)
  }
}, [])

const getPhoto = async (id) => {
  const photo = await api.getPhoto(id)
  console.log(photo)
  setPhoto(photo)
}

  return (
      <>  
      <Header title="Photos"/>

      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      </>
  )
}

export default Photo