import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import { useMapCtx } from "../context/MapContext";
import {Map as LeafletMap}  from "leaflet";
import * as L from "leaflet";
import RenderSavedAois from "./RenderSavedAois";
import MapDrawingHandler from "./MapDrawingHandler";
import AoiToolsPanel from "./AoiDrawingTools";
import LayerToggleButtons from "./LayerTogglersButton";
import CustomScaleBar from "./CustomScaleBar";

export default function MapView() {
  const [activeLayer, setActiveLayer] = useState<"map" | "satellite">("map");
  const { setMap } = useMapCtx(); // ✅ FIXED

  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      setMap(mapRef.current);   // store map context globally
    }
  },[setMap]);

  function CustomZoomControls() {
    const map = useMap();
    useEffect(() => {
      const zoomInBtn = document.getElementById("zoom-in");
      const zoomOutBtn = document.getElementById("zoom-out");
      zoomInBtn?.addEventListener("click", () => map.zoomIn());
      zoomOutBtn?.addEventListener("click", () => map.zoomOut());
    }, [map]); return null;
  }

  return (
    <div className="w-screen h-full z-10">
      <MapContainer
        center={[50.9375, 6.9603]}
        zoom={12}
        doubleClickZoom={false}
        zoomControl={false}
        // whenReady={setMap}  // ✅ FIXED
        style={{ width: "100%", height: "100%" }}
      >

        {activeLayer === "map" && (<> <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> <WmsLayer /> </>)} {/* Satellite Imagery Layer */}
        {activeLayer === "satellite" && (<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="" />)}
        <RenderSavedAois />
        <MapDrawingHandler />

        <AoiToolsPanel />
        <LayerToggleButtons
          activeLayer={activeLayer}
          setActiveLayer={setActiveLayer}
        />

        <CustomScaleBar />
        <CustomZoomControls />

      </MapContainer>
    </div>
  );
}

export function WmsLayer() {
  const map = useMap();

  useEffect(() => {
    const wms = (L.tileLayer).wms("https://www.wms.nrw.de/geobasis/wms_nw_dop", {
      layers: "nw_dop",
      format: "image/png",
      transparent: true,
      version: "1.3.0",
    });

    wms.addTo(map);
    return () =>{
      map.removeLayer(wms);
    } 
  }, [map]);

  return null;
}

