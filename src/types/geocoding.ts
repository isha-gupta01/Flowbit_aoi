// Response structure from Nominatim search API
export interface NominatimPlace {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  osm_id: number;
  osm_type: "node" | "way" | "relation";
}

// Geometry returned from Overpass API
export interface OverpassGeometry {
  lat: number;
  lon: number;
}

export interface OverpassElement {
  id: number;
  type: string;
  geometry: OverpassGeometry[];
}
