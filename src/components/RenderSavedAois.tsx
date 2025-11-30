import { Polygon, Polyline, Marker } from "react-leaflet";
import { useDrawing } from "../Hooks/useDrawing";
import type { LatLngExpression } from "leaflet";

export default function RenderSavedAois() {
  const { aoiList } = useDrawing();

  return (
    <>
      {aoiList.map((aoi) => {
        const coords = aoi.coordinates as LatLngExpression[];

        // POINT
        if (aoi.type === "point") {
          return <Marker key={aoi.id} position={coords[0]} />;
        }

        // LINE
        if (aoi.type === "line") {
          return (
            <Polyline
              key={aoi.id}
              positions={coords}
              pathOptions={{ color: "#E97C20", weight: 3 }}
            />
          );
        }

        // FREEHAND (same as line)
        if (aoi.type === "freehand") {
          return (
            <Polyline
              key={aoi.id}
              positions={coords}
              pathOptions={{ color: "#E28444", weight: 2 }}
            />
          );
        }

        // LASSO (freehand polygon)
        if (aoi.type === "lasso") {
          return (
            <Polygon
              key={aoi.id}
              positions={coords}
              pathOptions={{ color: "#E28444", weight: 2, fillOpacity: 0.15 }}
            />
          );
        }

        // POLYGON
        if (aoi.type === "polygon") {
          return (
            <Polygon
              key={aoi.id}
              positions={coords}
              pathOptions={{ color: "#E97C20", weight: 3, fillOpacity: 0.2 }}
            />
          );
        }

        return null;
      })}
    </>
  );
}
