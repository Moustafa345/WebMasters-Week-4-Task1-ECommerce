import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { teamMembers } from "@/data";
import { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const TeamCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Responsive members per page
  const getMembersPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // sm
      if (window.innerWidth < 1024) return 2; // md
      return 3; // lg and above
    }
    return 3; // default for SSR
  };

  const [membersPerPage, setMembersPerPage] = useState(getMembersPerPage());

  useEffect(() => {
    const handleResize = () => {
      setMembersPerPage(getMembersPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numberOfPages = Math.ceil(teamMembers.length / membersPerPage);
  const memberPages = Array.from({ length: numberOfPages }, (_, i) => 
    teamMembers.slice(i * membersPerPage, (i + 1) * membersPerPage)
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mb-16">
        <Carousel
          setApi={setApi}
          opts={{
            loop: false,
          }}
        >
          <CarouselContent className="flex">
            {memberPages.map((pageMembers, pageIndex) => (
              <CarouselItem key={pageIndex} className="basis-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pageMembers.map((member, memberIndex) => (
                    <div key={memberIndex} className="w-full">
                      {/* Card with image */}
                      <div className="bg-gray-50 rounded-lg pt-4 h-[300px] sm:h-[350px] lg:h-[400px] mb-4">
                        <div className="h-full overflow-hidden flex justify-center items-start">
                          <img
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </div>
                      
                      {/* Details below the card */}
                      <div className="font-medium">
                        <h3 className="text-xl sm:text-2xl lg:text-[32px] text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="mb-4 text-sm sm:text-base">{member.role}</p>
                        <div className="flex justify-start space-x-6">
                          <span className="hover:text-gray-500 cursor-pointer transition-colors">
                            <FiTwitter size={20} />
                          </span>
                          <span className="hover:text-gray-500 cursor-pointer transition-colors">
                            <FaInstagram size={20} />
                          </span>
                          <span className="hover:text-gray-500 cursor-pointer transition-colors">
                            <RiLinkedinLine size={20} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 sm:-left-12 top-1/3 transform -translate-y-1/2">
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext className="absolute -right-4 sm:-right-12 top-1/3 transform -translate-y-1/2">
            <span className="sr-only">Next</span>
          </CarouselNext>
        </Carousel>
      </div>

      {/* Navigation dots below everything */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: numberOfPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
              index === current
                ? "bg-[#DB4444] border-2 outline outline-[#9da4b0]"
                : "bg-gray-400"
            }`}
            aria-label={`Go to page ${index + 1} of ${numberOfPages}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;