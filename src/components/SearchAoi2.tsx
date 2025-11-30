import { Search } from "lucide-react";
import { useState } from "react";
// import { useMap } from "react-leaflet";
import { fetchBoundary } from "../utils/FetchBoundary";
import { useDrawing } from "../Hooks/useDrawing";
import { useMapCtx } from "../context/MapContext";

import type { NominatimPlace, OverpassElement } from "../types/geocoding";

export default function SearchAoi2() {

    const { map } = useMapCtx();



    const { addAoi } = useDrawing();

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<NominatimPlace[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<NominatimPlace | null>(null);
    const [open, setOpen] = useState(false);

    // Fetch search results
    const searchLocation = async (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            value
        )}`;

        const response = await fetch(url, {
            headers: { "User-Agent": "Flowbit-AOI-Tool" },
        });

        const data: NominatimPlace[] = await response.json();
        setResults(data);
    };

    const handleSelect = (place: NominatimPlace) => {
        setSelectedPlace(place);

        const lat = Number(place.lat);
        const lon = Number(place.lon);
        if (!map) return null;

        map.flyTo([lat, lon], 14, { duration: 1.3 });

        setQuery(place.display_name);
        setResults([]);
        setOpen(false);
    };

    // Fetch administrative boundary & draw polygon
    const handleApplyOutline = async () => {
        if (!selectedPlace) return;

        const boundary: OverpassElement | null = await fetchBoundary(
            selectedPlace.osm_id,
            selectedPlace.osm_type
        );

        if (!boundary?.geometry) {
            alert("No boundary available for this place.");
            return;
        }

        const coords = boundary.geometry.map((g) => ({
            lat: g.lat,
            lng: g.lon,
        }));

        addAoi({
            id: crypto.randomUUID(),
            type: "polygon",
            coordinates: coords,
        });


        map?.fitBounds(coords.map((c) => [c.lat, c.lng]) as [number, number][]);
    };

    return (
        <div className="relative">
            {/* Header */}
            <div className="w-[280px] h-[118px] absolute top-[72px] left-[18px]">
                <span className="text-[20px]">
                    Search or use vector tool to create your region.
                </span>
                <div className="text-[16px] mt-2">Search Area</div>
            </div>

            {/* Search Bar */}
            <div className="absolute top-[220px] left-3 w-[286px]">
                <div className="h-10 bg-[#F5E5C3] rounded-[10px] border flex items-center pl-10 relative">
                    <Search className="absolute left-[25px] text-[#7E786F]" />

                    <input
                        value={query}
                        placeholder="city, town, region…"
                        onChange={(e) => searchLocation(e.target.value)}
                        onFocus={() => setOpen(true)}
                        className="ml-12 bg-transparent outline-none text-[18px] text-[#7E786F] w-full"
                    />
                </div>

                {/* Dropdown */}
                {open && results.length > 0 && (
                    <div className="absolute top-12 w-full bg-white border rounded-md shadow z-50 max-h-48 overflow-auto">
                        {results.map((place) => (
                            <div
                                key={place.place_id}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(place)}
                            >
                                {place.display_name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Apply Outline Button */}
            <div
                onClick={handleApplyOutline}
                className="absolute top-[290px] left-5 w-[266px] h-[58px] rounded-[10px] bg-[#b86833] flex items-center justify-center cursor-pointer"
            >
                <span className="text-white text-[18px]">Apply outline as base image</span>
            </div>

            {/* Hint */}
            <div className="absolute top-[350px] left-[30px] text-[12px] text-[#7E786F] text-center w-[250px]">
                You can always edit the shape of the area later
            </div>

            {/* Confirm */}
            <div className="absolute top-[460px] left-5 w-[266px] h-[62px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center">
                <span className="text-[18px] text-[#7E786F]">Confirm Area Of Interest</span>
            </div>
        </div>
    );
}
