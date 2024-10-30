import { useState } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { Menu } from 'lucide-react';
import { sidebarCategories } from "@/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const Sidebar = () => {
  const [open, setOpen] = useState(false);

 

  const SidebarContent = () => (
    <div className="md:w-48 lg:w-64 bg-white border-r pt-4 px-4">
      <ul className="mt-10">
        {sidebarCategories.map((category, index) => (
          <li 
            key={index} 
            className="flex items-center justify-between py-5 md:py-1 lg:py-2 px-2 mt-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <span className="text-sm">{category.name}</span>
            {category.hasSubmenu && (
              <SlArrowRight className="w-4 h-4 text-gray-500" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block  md:w-48 lg:w-64 lg:border-r">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden mt-5">
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger>
      <Button variant="ghost" className="flex items-center space-x-2 md:hidden">
        <Menu className="h-5 w-5" />
        <span>Categories</span> 
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-64 p-0">
      <SidebarContent />
    </SheetContent>
  </Sheet>
</div>

    </>
  );
};

export default Sidebar;