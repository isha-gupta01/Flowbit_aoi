export type AoiFeature = {
  id: string;                    // ← REQUIRED
  type: "point" | "line" | "polygon" | "freehand" | "lasso"| "erase";               // can expand later ("point" | "line")
  coordinates: {                 // Leaflet LatLngLiteral
    lat: number;
    lng: number;
  }[];
};
