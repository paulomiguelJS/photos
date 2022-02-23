import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header/Header";
import { PhotoItem } from "../../components/PhotoItem/PhotoItem";
import Button from "../../components/Button";

const Album = () => {
  const params = useParams();
  const navigate = useNavigate()

  const [albumInfo, setAlbuminfo] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      getAlbum(params.id);
      getPhotos(params.id);
    }
  }, []);

  const getPhotos = async (id) => {
    setLoading(true);
    const photos = await api.getPhotos(id);
    setPhotos(photos);
    setLoading(false);
  };

  const getAlbum = async (id) => {
    const albumInfo = await api.getAlbum(id);
    console.log(albumInfo);
    setAlbuminfo(albumInfo);
  };

  const handleBackButton = () => navigate(-1)

  return (
    <>
      {loading && "Loading..."}

      <Header title="Album Photos" />
      <Button title="Back" onClick={handleBackButton} />

      <h1>{albumInfo.title}</h1>

      {photos.map((item, index) => (
        <PhotoItem key={index} data={item} />
      ))}
    </>
  );
};

export default Album;
