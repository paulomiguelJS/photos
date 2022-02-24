import React, { useEffect, useState } from "react";
import { AlbumItem } from "../../components/AlbumItem";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    setLoading(true);
    let data = await api.getAlbums();
    setAlbums(data);
    setLoading(false);
  };

  return (
    <>
      {loading && "Loading..."}
      <Header title="Albums" />
      {albums.map((item, index) => (
        <AlbumItem key={index} id={item.id} title={item.title} />
      ))}
    </>
  );
};

export default Home;
