import { useEffect, useState } from "react";
import {api} from '../../services/api'
import Header from "../../components/Header/Header";

const Album = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = async () => {
    let data = await api.getAlbum();
    console.log(data);
    setAlbum(data);
  };

  return (
    <>
      <Header title="Photos Galery" />
      <ul>
        {album.map((item, index) =>(
          <li className="border m-3 p-7 rounded" key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Album;

