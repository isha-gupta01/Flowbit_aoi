# 🛰️ AOI Creation Tool — Frontend Engineer Assignment

Flowbit Private Limited — Technical Submission

A single-page web application built using React, TypeScript, Vite, TailwindCSS, Leaflet, React-Leaflet, and Playwright.
The application loads WMS satellite imagery, supports multiple map views, and provides an interactive toolset for users to define Areas of Interest (AOIs) using custom polygon/point/line drawing tools.

It follows a clean modular architecture, ensures strong typing, and prepares the system for scaling to thousands of shapes.

## 🚀 Features
🗺 Map + Imagery

Normal map view (OpenStreetMap)

Satellite imagery (NRW WMS service)

Smooth map controls, zoom, scale bar

🎨 AOI Drawing Tools

Polygon tool

Point tool

Line tool

Freehand tool

Lasso tool

Cursor tool

Erase tool (delete AOIs by clicking them)

💾 Persistence

AOIs saved to localStorage

Persist through page refresh

🔍 Search (Nominatim Geocoding)

Search for cities, towns, regions

Dropdown suggestions

Click to pan map to result

Option to “Apply outline as base image”

🧭 UI

Layer toggles

AOI tools panel

Sidebar for search

Custom zoom controls

Custom scale bar

Multi-panel layout (Navbar + Sidebar + AOI Panel + Map)

🧪 Testing (Playwright)

App load test

AOI draw test

Search test

(Optional) Layer toggle test

## 📦 Tech Stack
Category	Technology
Framework	React + TypeScript
Build Tool	Vite
Map Library	React-Leaflet + Leaflet
Styling	Tailwind CSS
Testing	Playwright
State Mgmt	Custom Context API
Geocoding	OpenStreetMap Nominatim
Persistence	localStorage
# 🧭 Architecture Decisions

The architecture is designed to be:

Decoupled (drawing logic separate from UI)

Composable (small reusable components)

Scalable (support for thousands of shapes)

Predictable (central state for AOIs)

Directory structure:

src/
  components/
    MapView.tsx
    Sidebar.tsx
    Navbar.tsx
    AoiPanel.tsx
    AoiToolsPanel.tsx
    MapDrawingHandler.tsx
    RenderSavedAois.tsx
    CustomScaleBar.tsx
    LayerToggleButtons.tsx
    SearchAoi2.tsx
  context/
    DrawingContextCore.ts
    DrawingContext.tsx
    MapContext.tsx
  Hooks/
    useDrawing.ts
  icons/
    aoi/
  types/
    aoi.ts

🧠 Why this structure?

Map interaction logic is isolated in MapDrawingHandler.tsx.

Permanent AOIs render in RenderSavedAois.tsx.

UI tools live inside AoiToolsPanel.tsx.

Global drawing state is managed in DrawingContext.

Map instance sharing is handled by MapContext.

This separation improves maintainability and testing.

## 🗂 Map Library Choice
✔ Chosen: React-Leaflet
Why?

Lightweight and easy to integrate

Deep plugin ecosystem

Direct access to Leaflet APIs for custom drawing

Strong community

Great compatibility with WMS services

❌ Alternatives & Reasons for Not Selecting
Library	Reason Not Used
MapLibre GL	Vector-based heavy renderer, unnecessary for raster WMS
OpenLayers	Extremely powerful but complex and heavy for this task
react-map-gl / Mapbox	Paid map tiles for heavy usage; unnecessary complexity

Conclusion:
React-Leaflet offers the best balance of performance, simplicity, and control.

## ⚡ Performance Considerations

The system is intentionally built to scale to thousands of polygons/points.

✔ Implemented

Leaflet’s canvas renderer can be enabled easily for huge datasets.

AOI storage uses a minimal JSON format.

Render split: temporary vs. saved AOIs.

Only necessary components re-render (context selectors).

Debounced search requests.

✔ Future Production Enhancements

Switch all layers to Leaflet.canvas() for up to 50k points.

Move AOI operations into Web Workers.

Use indexedDB instead of localStorage.

Add geometric simplification for large AOIs.

Add worker-based spatial indexing (R-Tree, KD-Tree).

## 🧪 Testing Strategy (Playwright)
✔ Tests Included

Application Render Test
Ensures map + UI load correctly.

AOI Draw Test

Select polygon tool

Simulate three clicks + dblclick

Verify new polygon exists

Search Functionality Test

Type into search box

Dropdown opens

Click result

Map pans to location

✔ With More Time I Would Test:

Line, point, freehand, lasso tools

Erase behavior

Multi-AOI drawing

WMS tile load

Performance under 1000 AOIs

Sidebar + AOI Panel interactions

Error boundaries

## ⚖️ Tradeoffs Made

Used localStorage instead of backend → per assignment rules.

Avoided heavy-weight drawing libraries (Leaflet.Draw) to retain full control.

WMS layer added via (tileLayer as any).wms due to missing TS definitions.

Simplified “Apply outline as base” — outlines only for searched region.

## 🛠 Production Readiness

Required improvements for a production-grade system:

🔐 Security

Rate limit Nominatim requests

Validate user search input

Sanitized localStorage handling

🧭 UX

AOI editing (reshape, move vertices)

Multi-select + delete

Undo/Redo

🗄 Data

Backend API to persist AOIs

User accounts + saved workspaces

⚙️ Optimization

Enable canvas renderer

Use Service Worker for caching map tiles

🚀 Code Quality

Full ESLint + Prettier config

Unit tests for hooks & context

Storybook documentation for components

## ⏱️ Time Spent
Task	Estimated Time
Project setup	~40 min
UI layout (Navbar, Sidebar, Panels)	~2 hrs
Base map + WMS integration	~45 min
Map/Satellite toggle	~20 min
AOI tools & drawing logic	~2 hrs
AOI persistence + erase	~45 min
Search (Nominatim) implementation	~40 min
Debugging map context + WMS	~1 hr
Playwright tests	~40 min
Documentation (README)	~30 min

Total: ~9–10 hours

## ▶️ How to Run the Project
npm install
npm run dev


No environment variables required.

## ▶️ Demo Video

(Include your Loom/YouTube link here)

## 📁 API Documentation

Nominatim Geocoding API
GET https://nominatim.openstreetmap.org/search?q={query}&format=json&limit=5

Example response:

[
  {
    "display_name": "Delhi, India",
    "lat": "28.7041",
    "lon": "77.1025",
    "boundingbox": ["28.4","29.0","76.8","77.4"]
  }
]


Used for search/fly-to functionality.

## 🧩 ER / Schema Overview
AOI Feature Structure
interface AoiFeature {
  id: number;
  type: "polygon" | "line" | "point" | "freehand";
  coordinates: LatLngLiteral[];
}


All AOIs stored as minimal geometry objects to reduce size.

## ✔ Completed Requirements

Pixel-perfect UI (Figma)

Map loading WMS layer

Drawing tools panel

Functional AOI drawing

Eraser functionality

Search bar + geocoding

Persistent AOIs

Playwright testing suite

Detailed README (this file)

Clean modular code

Fully responsive

## 🎉 Thank You!
