import { ChevronLeft } from "lucide-react"
import SearchAoi from "./SearchAoi"
import { useState } from "react"
import SearchAoi2 from "./SearchAoi2"

const Sidebar = () => {
    const [openAoi, setOpenAoi] = useState(false);

    const toggleOpenAoi = () => {
        setOpenAoi(!openAoi);
    }


    return (
        <div className="flex flex-col  ">
            <div className="bg-[#F5EEE0] w-[313px] h-[50px] absolute  left-[70px]"></div>
            <div className="w-[314px]  h-[662px] bg-[#ffffff] absolute top-[49px] left-[70px]">
                <div className="w-[314px] h-[51px] flex   bg-[#FFFFFF]">
                    <div className="flex">
                        {/* <ArrowLeftFromLine className="text-[#b9b9b9] ml-3 mt-1"/> */}
                        <div className="w-[34px] h-[37px]  absolute left-[9px] top-1"><ChevronLeft /></div>
                        <div className="w-[21.08px] justify-center h-0 absolute left-[25.67px] bg-[#b9b9b9] mt-4  border border-[#b9b9b9] -rotate-90"></div>
                        <div className="text-[#E28444] text-[19.81px] absolute left-[42.67px]">Define Area of Interest</div>
                    </div>
                    {!openAoi ? (
                        <SearchAoi handleOpenAoiDef={toggleOpenAoi} />
                    ) : (
                        <SearchAoi2 />
                    )}
                </div>
            </div>


        </div>
    )
}

export default Sidebar
