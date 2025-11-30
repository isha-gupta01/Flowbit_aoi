import { useMap, useMapEvents } from "react-leaflet";
import { useDrawing } from "../Hooks/useDrawing";
import type { LatLngLiteral } from "leaflet";
import L from "leaflet";
import { useRef, useState, useEffect } from "react";

export default function MapDrawingHandler() {
  const { activeTool, addAoi } = useDrawing();
  const map = useMap();

  // Live-drawing states
  const [points, setPoints] = useState<LatLngLiteral[]>([]);
  const tempShape = useRef<L.Polyline | L.Polygon | null>(null);

  // Continuous freehand tracking
  const freehandLayer = useRef<L.Polyline | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    map.doubleClickZoom.disable();
  }, [map]);

  useMapEvents({
    mousedown() {
      if (activeTool === "freehand" || activeTool === "lasso") {
        isDrawing.current = true;
        freehandLayer.current = L.polyline([], {
          color: "#E97C20",
          weight: 3,
        }).addTo(map);
      }
    },

    mousemove(e) {
      if (!isDrawing.current) return;
      if (freehandLayer.current) {
        freehandLayer.current.addLatLng(e.latlng);
      }
    },

    mouseup() {
      if (isDrawing.current && freehandLayer.current) {
        const coords = freehandLayer.current.getLatLngs() as LatLngLiteral[];

        addAoi({
          id: crypto.randomUUID(),
          type: activeTool as "polygon",
          coordinates: coords,
        });

        freehandLayer.current = null;
      }
      isDrawing.current = false;
    },

    click(e) {
      if (activeTool === "cursor") return;
      if (activeTool === "point") {
        addAoi({
          id: crypto.randomUUID(),
          type: "point",
          coordinates: [e.latlng],
        });
        return;
      }

      if (activeTool === "line" || activeTool === "polygon") {
        setPoints((prev) => {
          const updated = [...prev, e.latlng];

          if (tempShape.current) {
            tempShape.current.setLatLngs(updated);
          } else {
            tempShape.current =
              activeTool === "polygon"
                ? L.polygon(updated, {
                    color: "#E97C20",
                    weight: 2,
                    dashArray: "5,5",
                  }).addTo(map)
                : L.polyline(updated, {
                    color: "#E97C20",
                    weight: 2,
                  }).addTo(map);
          }

          return updated;
        });
      }
    },

    dblclick() {
      if (activeTool !== "line" && activeTool !== "polygon") return;

      if (points.length > 1) {
        addAoi({
          id: crypto.randomUUID(),
          type: activeTool,
          coordinates: points,
        });
      }

      if (tempShape.current) {
        tempShape.current.remove();
        tempShape.current = null;
      }

      setPoints([]);
    },
  });

  return null;
}
