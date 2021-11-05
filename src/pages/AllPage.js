import React, { useEffect, useState } from "react";
// import "./kakaomap.css";
import KakaoMap from "../Component/Map/KakaoMap";
import Header from '../Component/Header'
import axios from 'axios'
import Loader from "../Component/Loader";

const AllPage = () => {
  const [loading, setLoading] = useState(null);
  const [markerdata, setMarkerData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      
      await axios.get("http://127.0.0.1:5000/all")
          .then((response)=> {
            console.log(response.data)
            setMarkerData(response.data);
          })
          .catch((error)=> {
              console.log(error);
          });

      setLoading(false);
    }

    fetchData();
    
  },[])

  if (loading) return <Loader type="spin" color="RGB 값" message={'로딩중'} />;
  return (
    <div>
        <Header />
        <KakaoMap data={markerdata}/>
    </div>
  );
}

export default (AllPage);