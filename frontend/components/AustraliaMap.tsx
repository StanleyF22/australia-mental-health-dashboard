"use client";

import Map from "react-map-gl";

export default function AustraliaMap() {

  return (
    <div className="h-[500px] mt-8">

      <Map
        mapboxAccessToken={
          process.env.NEXT_PUBLIC_MAPBOX_TOKEN
        }
        initialViewState={{
          longitude:133.775,
          latitude:-25.274,
          zoom:3.6
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      />

    </div>
  );
}
