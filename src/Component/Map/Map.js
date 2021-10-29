/*global kakao */
import React, { useEffect } from "react";

export default function Map(props) {
  useEffect(() => {
    mapscript();
  }, [props]);
  let data = props.data;
  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.508690392047, 127.05618275253),
      level: 4
    };

    //map
    const map = new kakao.maps.Map(container, options);
    data.forEach((el) => {
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({        
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(Number(el.lat), Number(el.lng)),
      });

      var iwContent = '<div class="wrap">' + 
                    '    <div class="info">' + 
                    '        <h4 class="title">' + 
                    '              <a href="https://place.map.kakao.com/'+el.id+'" target="_blank">'+el.res_name + '</a>'+
                    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
                    '        </h4>' + 
                    '        <div class="body">' + 
                    '            <div class="category">'+ el.category + '</div>'+'<br>'+
                    '            <div class="address">' + 
                    '                <div class="ellipsis">'+el.address+'</div>' + 
                    '            </div>' + '<br>' +
                    '        </div>' + 
                    '    </div>' +    
                    '</div>',
                    iwRemoveable = true;

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
      });
      
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);  
      });

      
    });
  };

  return <div id="map" style={{ width: "82vw", height: "85vh" }}></div>;
}