import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import Header from "../../components/Header/Header";
import { PhotoItem } from "../../components/PhotoItem/PhotoItem";

const Album = () => {
  const params = useParams();

  const [albumInfo, setAlbuminfo] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (params.id) {
      getAlbum(params.id);
      getPhotos(params.id);
    }
  }, []);

  const getPhotos = async (id) => {
    const photos = await api.getPhotos(id);
    setPhotos(photos);
  };

  const getAlbum = async (id) => {
    const albumInfo = await api.getAlbum(id);
    console.log(albumInfo);
    setAlbuminfo(albumInfo);
  };

 

  return (
    <>
      <Header title="Album Photos" />

      <h1>{albumInfo.title}</h1>
      
      {photos.map((item, index) => (
        <PhotoItem key={index} data={item} />
      ))}
    </>
  );
};

export default Album;
