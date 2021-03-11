import * as React from 'react';
import axios from 'axios'

export const DisplayMapFC = (props) => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);
  let latitude = null
  let longitude = null

  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    function initGeolocation() {
      if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
      } else {
        alert("Sorry, your browser does not support geolocation services.");
      }
    }
    initGeolocation()

    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "mshEmDycSRNqfmR-dOyynjyYwo0tdcQC9Km4icq8l38"
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 28.7, lng: 77.1 },
      zoom: 9,
      pixelRatio: window.devicePixelRatio || 1
    });





    function success(position) {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      addMarkersToMap(hMap);
    }

    function fail() {

    }

    function addMarkersToMap(hMap) {
      const url =
        "https://places.ls.hereapi.com/places/v1/autosuggest?at=" +
        latitude +
        "," +
        longitude +
        `&q=${props.codeword}+near+me&apiKey=mshEmDycSRNqfmR-dOyynjyYwo0tdcQC9Km4icq8l38`;
      let data;
      axios.get(url).then((response) => {
        //console.log(response.data.results)
        data = response.data.results;
        //console.log(data)
        for (let i = 0; i < data.length; i++) {
          let curr = data[i].position;
          //console.log(curr);
          if (curr) {
            let parisMarker = new H.map.Marker({ lat: curr[0], lng: curr[1] });
            hMap.addObject(parisMarker);
          }
        }
      });

    }

    addMarkersToMap()



    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated



  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};