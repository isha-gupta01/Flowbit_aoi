import { useState, useEffect, type ReactNode } from "react";
import type { AoiFeature } from "../types/aoi";
import { DrawingContext } from "./DrawingContextCore";

export function DrawingProvider({ children }: { children: ReactNode }) {
  const [aoiList, setAoiList] = useState<AoiFeature[]>(() => {
    const saved = localStorage.getItem("aoi-features");
    return saved ? JSON.parse(saved) : [];
  });

  

  const [activeTool, setActiveTool] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("aoi-features", JSON.stringify(aoiList));
  }, [aoiList]);

  const addAoi = (feature: AoiFeature) => {
    setAoiList((prev) => [...prev, feature]);
  };

  return (
    <DrawingContext.Provider value={{ activeTool, setActiveTool, aoiList, addAoi }}>
      {children}
    </DrawingContext.Provider>
  );
}



