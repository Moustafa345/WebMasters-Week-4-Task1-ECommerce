import { SlArrowDown } from "react-icons/sl";



const NavbarTop = () => {
  return (
    <>
      <div className="bg-black">
        <div className="text-white container w-full p-2 sm:p-3">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-4">
            <div className="hidden sm:block flex-1" /> {/* Hidden on mobile */}

            <div className="flex-auto text-center">
              <h4 className="text-xs sm:text-sm">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <span className="font-semibold block sm:inline sm:ml-3 mt-1 sm:mt-0">Shop Now</span>
              </h4>
            </div>

            <div className="flex-1 flex justify-center sm:justify-end">
              <div className="flex items-center gap-1">
                <h4 className="text-xs sm:text-sm">English</h4>
                <SlArrowDown className="text-white h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;