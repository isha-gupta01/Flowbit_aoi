import type { OverpassElement } from "../types/geocoding";

export async function fetchBoundary(
  osm_id: number,
  osm_type: "node" | "way" | "relation"
): Promise<OverpassElement | null> {
  
  const typeLetter =
    osm_type === "relation" ? "rel" :
    osm_type === "way"      ? "way" :
                              "node";

  const query = `
    [out:json];
    ${typeLetter}(${osm_id});
    out geom;
  `;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query
  });

  const json = await response.json();

  if (!json.elements?.length) return null;
  return json.elements[0] as OverpassElement;
}
