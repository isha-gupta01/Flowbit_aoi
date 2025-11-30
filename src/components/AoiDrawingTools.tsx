import { useDrawing } from "../Hooks/useDrawing";

// custom icons
import PolygonIcon from "../icons/aoi/PolygonIcon";
import FreehandIcon from "../icons/aoi/FreehandIcon";
import PointIcon from "../icons/aoi/PointIcon";
import LineIcon from "../icons/aoi/LineIcon";
import CursorIcon from "../icons/aoi/CursorIcon";
import LassoIcon from "../icons/aoi/LassoIcon";

export default function AoiToolsPanel() {
  const { activeTool, setActiveTool } = useDrawing();

  const tools = [
    { id: "polygon", icon: <PolygonIcon /> },
    { id: "freehand", icon: <FreehandIcon /> },
    { id: "point", icon: <PointIcon /> },
    { id: "line", icon: <LineIcon /> },
    { id: "cursor", icon: <CursorIcon /> },
    { id: "lasso", icon: <LassoIcon /> },
  ];

  return (
    <div
      className="
        absolute top-[230px] left-[1190px]
        w-[46.59px] h-[229.63px]
        bg-white rounded-[10px]
        shadow-[0_5.25px_5.25px_rgba(0,0,0,0.25)]
        flex flex-col justify-between items-center py-4
        z-999
      "
    >
      {tools.map((t) => (
        <button
          key={t.id}
          onClick={() => {
            setActiveTool(t.id);  // GLOBAL drawing mode (required!)
          }}
          className={`
            w-[26px] h-[26px] flex justify-center items-center
            rounded-md transition
            ${activeTool === t.id ? "bg-[#FFE8D4]" : "hover:bg-gray-100"}
          `}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
