import Navbar from "./components/Navbar"; // thin vertical icon bar
import Sidebar from "./components/Sidebar"; // large "Pages/Layers" area
import AoiPanel from "./components/AoiPanel";
import MapView from "./components/MapView";
import { useState } from "react";
import { MapContext } from "./context/MapContext";

export default function App() {
const [map, setMap] = useState<L.Map | null>(null);
  return (
    <MapContext.Provider value={{ map, setMap }}>
      <div className="flex flex-col h-screen w-screen overflow-hidden ">

        {/* Top horizontal nav (if exists, otherwise remove) */}
        {/* <Header /> */}

        {/* MAIN horizontal layout */}
        <div className="flex flex-row flex-1 overflow-hidden">

          {/* THIN NAVBAR (icon bar) */}
          {/* <Navbar /> */}

          {/* BIG LEFT SIDEBAR (Pages / Layers) */}
          <div className="z-999  overflow-y-auto">
            <Sidebar />
          </div>

          {/* AOI PANEL */}
          <div className="z-999 overflow-y-auto">
            <AoiPanel />
          </div>

          {/* MAP (fills all remaining space) */}
          <div className="flex flex-row flex-1 overflow-hidden">

            <Navbar />

            <div className="flex-1 w-screen relative">
              <MapView />
            </div>

          </div>

        </div>
      </div>

    </MapContext.Provider>


  );
}
