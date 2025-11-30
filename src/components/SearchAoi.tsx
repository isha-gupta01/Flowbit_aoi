import { Search,File } from "lucide-react"

interface AoiSearchProps {
  handleOpenAoiDef:()=> void;   // function returns nothing
}
const SearchAoi = ({handleOpenAoiDef}:AoiSearchProps) => {
    return (
        <div>
            <div className="w-[280px] h-[118px] absolute top-[72.21px] left-[18.13px]">
                <span className="text-[20px] font-bold">Define the area(s)</span>
                <span className="text-[20px] ">where you will apply your object count & detection model</span>
                <div className="text-[16px] mt-2 ">Options:</div>
            </div>
            <div className="w-[286.89px] h-[194px] flex flex-col absolute gap-[15px] top-[218px] left-[12.05px]">
                <div onClick={()=>handleOpenAoiDef()} className="w-[286.89px] h-28 relative rounded-[10px] border bg-[#F5EEE0] ">
                    <div className="w-26 h-26 absolute top-[42px] left-[8.95px]">
                        <Search strokeWidth={1} className="text-[#7E786F] w-[23px] h-[23px]" />
                    </div>
                    <div className="w-[194px] h-14 absolute top-7 left-[42.95px] tracking-[–0.427px] text-[18.56px] text-[#7E786F]">
                        <span><span className="font-bold">Search </span>for a city,town...<br></br>or
                            <span className="font-bold"> draw</span> area on map</span>
                    </div>
                </div>
                <div className="w-[286.89px] h-[67px] relative rounded-[10px]  bg-[#F5EEE0] ">
                    <div className="w-28 h-28 absolute top-[17px] left-[14.95px]">
                        <File strokeWidth={1} className="text-[#7E786F] w-[23px] h-[23px]" />
                    </div>
                    <div className="w-[194px] h-14 absolute top-[15px] left-[42.95px] tracking-[–0.427px] text-[18.56px] text-[#7E786F]">
                        <span>Uploading a shape file</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchAoi
