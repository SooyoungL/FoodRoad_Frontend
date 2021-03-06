/*global kakao */
import React, { useCallback, useEffect } from "react";

export default function Map(props) {

  let data = props.data;

  const mapscript = useCallback(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5067578, 127.0599486),
      level: 4
    };

    //map
    const map = new kakao.maps.Map(container, options);

    // center marker
    var imageSrc = '/img/red_marker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(40, 65), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(110, 60)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5067578, 127.0599486); // 마커가 표시될 위치입니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage // 마커이미지 설정 
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    data.forEach((el) => {
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({        
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(Number(el.lat), Number(el.lng)),
      });
      let link = el.kakao_id !== '' ? '<a href="https://place.map.kakao.com/'+el.kakao_id+'" target="_blank">' +el.res_name + '</a>': el.res_name;
      let phone = el.phone !== '' ? '<p>'+el.phone+'</p>' : '';
      let menu = el.menu !== '' ? '<p>'+el.menu+'</p>' : '';
      let rating = el.menu !== '' ? '<p>'+'평점: '+el.rating+'/5'+'</p>' : '';
      var iwContent = '<div class="wrap">' + 
                    '    <div class="info">' + 
                    '        <h4 class="title">' + 
                    '              '+link+
                    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
                    '        </h4>' + 
                    '        <div class="body">' + 
                    '            <div class="category">'+ el.category + '</div><br>'+
                    '              '+phone+
                    '              '+menu+
                    '              '+rating+
                    '            <div class="address">' + 
                    '                <div class="ellipsis">'+el.address+'</div>' + 
                    '            </div><br>' +
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
  },[data])  

  useEffect(() => {
    mapscript();
  }, [props,mapscript]);
  
  return <div id="map" style={{ width: "82vw", height: "85vh" }}></div>;
}