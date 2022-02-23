import React, { useEffect, useState } from "react";
import { AlbumItem } from "../../components/AlbumItem";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    let data = await api.getAlbums();
    console.log(data);
    setAlbums(data);
  };

  return (
    <>
      <Header title="Album Galery" />
      {albums.map((item, index) => (
        <AlbumItem key={index} id={item.id} title={item.title} />
      ))}
    </>
  );
};

export default Home;
