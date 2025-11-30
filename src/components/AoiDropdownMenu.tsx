export default function AoiDropdownMenu() {
  const items = [
    "Cologne",
    "City Proper",
    "Inner City / Downtown",
    "Districts / Boroughs",
    "Neighborhoods / Quarters",
    "Metropolitan Area",
    "Suburbs / Periphery Towns",
    "Greater Region / Administrative Region",
    "Functional Use Zones",
  ];

  return (
    <div
      className="
        w-[286px]
        bg-white
        rounded-[10px]
        shadow-md
        p-3
        border border-[#D4CEC4]
      "
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            underline cursor-pointer mb-1.5
            ${index === 0 ? "text-blue-600 font-semibold" : "text-gray-700"}
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
