
import {CityOffer, Points} from '../../types/offers-type';
import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type MapProps = {
  city: CityOffer
  points: Points[]
  selectedPoint: Points | undefined;
};
function Map({ points, selectedPoint,city}:MapProps):JSX.Element {
  console.log(points);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.map );


  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
  return (
    <div ref={mapRef}
      className="map"
      style={{width:'100%', height: '500px'}}
    >
    </div>
  );
}

export default Map;
