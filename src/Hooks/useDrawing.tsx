import { useContext } from "react";
import { DrawingContext } from "../context/DrawingContextCore";

export function useDrawing() {
  const ctx = useContext(DrawingContext);
  if (!ctx) throw new Error("useDrawing must be used inside DrawingProvider");
  return ctx;
}
