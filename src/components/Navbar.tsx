import { User, Settings,Send } from "lucide-react";


export default function Navbar() {
  return (
    <div
      className="
        fixed left-0 top-0
        h-screen w-[70px]
        flex flex-col justify-between items-center py-6
        bg-gray-800/60 
    
        z-9999
      "
    >
      <div className="flex flex-col justify-center items-center gap-6">
       {/* <img src="/message.png" className="w-14 h-14 -rotate-45"/> */}
       <Send className="w-10 h-10 text-[#E3CDA0] fill-[#E3CDA0]"/>
        <img src="/home.png" className="w-6 h-6  cursor-pointer" />
        <img src="/maps.png" className="w-6 h-6 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-6 mb-6">
        <User className="w-6 h-6 text-[#E3CDA0] cursor-pointer" />
        <Settings className="w-6 h-6 text-[#E3CDA0] cursor-pointer" />
      </div>
    </div>
  );
}


