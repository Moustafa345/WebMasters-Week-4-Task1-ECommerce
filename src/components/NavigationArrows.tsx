
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


interface NavigationArrowsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export const NavigationArrows = ({ onPrevClick, onNextClick, canGoPrev, canGoNext }: NavigationArrowsProps) => {
  return (
    <div className="flex gap-2">
      <button 
        className={`p-2 border rounded-full ${canGoPrev ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onPrevClick}
        disabled={!canGoPrev}
      >
        <FaArrowLeft size={24} />
      </button>
      <button 
        className={`p-2 border rounded-full ${canGoNext ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'}`}
        onClick={onNextClick}
        disabled={!canGoNext}
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};