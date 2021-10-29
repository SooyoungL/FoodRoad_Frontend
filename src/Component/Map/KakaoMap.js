import React from "react";
// import "./kakaomap.css";
import Map from "./Map";

function KakaoMap(props) {
  return (
    <div className="kakaomap">
      <Map data={props.data}/>
    </div>
  );
}

export default KakaoMap;