import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
// import L from "leaflet";

export default function CustomScaleBar() {
  const map = useMap();
  const [label, setLabel] = useState("200 m");
//   const [lineWidth, setLineWidth] = useState(80);

  useEffect(() => {
    if (!map) return;

    const updateScale = () => {
      const pixels = 100;
      const y = map.getSize().y / 2;

      const p1 = map.containerPointToLatLng([0, y]);
      const p2 = map.containerPointToLatLng([pixels, y]);
      const dist = p1.distanceTo(p2);

      const niceScales = [1, 2, 5].map((n) => n * Math.pow(10, Math.floor(Math.log10(dist))));
      const target = niceScales.find((s) => s >= dist) || dist;

      const display =
        target >= 1000 ? `${(target / 1000).toFixed(1)} km` : `${target} m`;

      setLabel(display);
    //   setLineWidth((target / dist) * pixels);
    };

    updateScale();
    map.on("zoomend moveend", updateScale);
    return () => {
      map.off("zoomend moveend", updateScale);
    };
  }, [map]);

  return (
    <div
      className="
        absolute -bottom-2 right-14
         px-3 py-2 
        flex items-center gap-3
        text-sm text-gray-700 font-medium
        select-none z-999
      "
    >
      {/* Text */}
      <span>{label}</span>

      {/* Scale bar with ticks */}
      <div className="relative flex items-center">
        |_____|
      </div>
    </div>
  );
}
