import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const DropDownMenu = () => {
    const { logout } = useAuth()
    const navigate = useNavigate();

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            const triggerElement = document.querySelector('.dropdown-trigger');
            if (triggerElement) {
                (triggerElement as HTMLElement).blur();
            }
        }
    };

    const handleLogout = async () => {
         logout(); 
        navigate('/login');
    };

    return (
        <DropdownMenu onOpenChange={handleOpenChange}>
            <DropdownMenuTrigger className="focus:outline-none dropdown-trigger">
                <FiUser className="text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-gradient-to-br from-[#9f70a7] to-black text-white rounded-md p-4 w-60 border-none shadow-lg"
            >
                <DropdownMenuItem className="group flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md transition-colors">
                    <FiUser className="text-white text-xl group-hover:text-black" />
                    <Link to='account'>Manage My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="group flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md transition-colors">
                    <HiOutlineShoppingBag className="text-white text-xl group-hover:text-black" />
                    <span>My Order</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md transition-colors">
                    <MdOutlineCancel className="text-white text-xl group-hover:text-black" />
                    <span>My Cancellations</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md transition-colors">
                    <AiOutlineStar className="text-white text-xl group-hover:text-black" />
                    <span>My Reviews</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="group flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md transition-colors"
                >
                    <RiLogoutBoxLine className="text-white text-xl group-hover:text-black" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownMenu;
