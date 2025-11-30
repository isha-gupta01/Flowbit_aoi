import { Minus, Plus ,Send} from "lucide-react"

const AoiPanel = () => {
    return (
        <div className="">
            <div className="w-[46.06px] h-[44.78px] absolute  top-[499px] left-[1190px] shadow-[0px_1.82px_1.82px_0px_rgba(0,0,0,0.25)] rounded-[9.09px] bg-[#F5EEE0]">
                <Send className="absolute left-[13.89px] w-[23.3px] h-[36.94px] text-[#B8642B] fill-[#B8642B]"/>
                <div className="w-[26px] h-3.5 absolute top-[23.03px] left-[7.68px] text-[6.25px] tracking-[-0.125px]">Help<br />Assistant</div>
            </div>
            <div className="w-12 h-[106px] absolute top-[570px]  left-[1190px] rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white ">
                <div className="w-[26px] h-[89px] flex flex-col gap-[5px] absolute top-[13px] left-[11px]">
                    <img src="/speech-bubble.png" className="w-6 h-6 "/>
                    <button id="zoom-in" className="w-[25px] h-[25px] flex items-center justify-center cursor-pointer ">
                        <Plus className="text-[#B8642B]"/>
                    </button>
                    <div className="w-[25px] h-0 border-[0.5px] border-[#b8632b49] self-center"></div>
                    <button id="zoom-out" className="w-[25px] h-[25px] flex items-center justify-center cursor-pointer ">
                        <Minus className="text-[#B8642B]"/>
                    </button>
                </div>
            </div>
            <div className="w-[706px] h-5 absolute top-[692px] left-[574px] bg-[#F1EEE8]">
                <div className="text-[10px]"><span className="font-bold">Image Layer Source: </span>https://www.wmts.nrw.de/geobasis/wmts_nw_dop?REQUEST=GetCapabilities&SERVICE=WMTS</div>
            </div>

        </div>
    )
}

export default AoiPanel
