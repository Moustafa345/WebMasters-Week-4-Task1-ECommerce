
interface LeftSideHeaderProp {
    header: string;
}



const LeftSideHeader = ({header} : LeftSideHeaderProp) => {
    return (
        <div>
            <div className="flex gap-4 items-center mb-6">
                <div className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></div>
                <div className="text-[#DB4444] font-medium text-base">{header}</div>
            </div>
          
        </div>
    )
}

export default LeftSideHeader