interface Props {
  activeLayer: "map" | "satellite";
  setActiveLayer: (layer: "map" | "satellite") => void;
}

export default function LayerToggleButtons({ activeLayer, setActiveLayer }: Props) {
  return (
    <div className="absolute bottom-10  text-white right-28 z-9999 flex gap-3">

      <button
        onClick={() => setActiveLayer("satellite")}
        className={`
          px-4 py-2 w-[90px] h-[70px] relative  rounded-md shadow-md  bg-[url('/BaseView.png')] bg-cover bg-center
          ${activeLayer === "satellite" ? "border-2 border-black" : "border-2 border-white"}
        `} 
      >
        <div className="absolute bottom-0 left-1">Base Image</div>
      </button>

      <button
        onClick={() => setActiveLayer("map")}
        className={`
          px-4 py-2 w-[90px] h-[70px] relative rounded-md backdrop-blur-xl  shadow-md bg-[url('/MapView.png')] bg-cover bg-center
          ${activeLayer === "map" ? "border-2 border-black backdrop-blur-xl" : "border-2 border-white"}
        `}
      >
        <div className="text-black bottom-0 left-1 absolute">Map Image</div>

      </button>

    </div>
  );
}
