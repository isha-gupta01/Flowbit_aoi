import { createContext, useContext } from "react";
import type { Map as LeafletMap } from "leaflet";

interface MapCtxType {
  map: LeafletMap | null;
  setMap: (map: LeafletMap | null) => void; // FIXED
}

export const MapContext = createContext<MapCtxType>({
  map: null,
  setMap: () => {}, // ✔ safe no-op default
});

export const useMapCtx = () => useContext(MapContext);
