import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, [0]);

  const getAlbums = async () => {
    let data = await api.getAlbuns();
    console.log(data);
    setAlbums(data);
  };

  return (
    <>
      <Header title="Photos Galery" />
      <ul>
        {albums.map((item, index) =>(
          <li className="border m-3 p-7 rounded" key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
