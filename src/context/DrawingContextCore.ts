// src/context/DrawingContextCore.ts

import { createContext } from "react";
import type { AoiFeature } from "../types/aoi";

export interface DrawingContextType {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;

  aoiList: AoiFeature[];
  addAoi: (feature: AoiFeature) => void;
}

export const DrawingContext = createContext<DrawingContextType | null>(null);
