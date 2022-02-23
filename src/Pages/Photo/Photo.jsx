import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";

const Photo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      getPhoto(params.id);
    }
  }, []);

  const getPhoto = async (id) => {
    setLoading(true);
    const photo = await api.getPhoto(id);
    setPhoto(photo);
    setLoading(false);
  };

  const handleBackButton = () => navigate(-1);

  return (
    <>
      {loading && "Loading..."}
      {photo && (
        <>
          <Header title="Photos" />
          <Button title="Back" onClick={handleBackButton} />

          <h1>{photo.title}</h1>
          <img src={photo.url} alt={photo.title} />
        </>
      )}
    </>
  );
};

export default Photo;
