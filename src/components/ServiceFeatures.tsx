import { serviceFeatureProps } from '@/types/dataTypes';

export const ServiceFeature = ({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  iconSubClassName,
  iconClassName, 
  titleClassName, 
  descriptionClassName 
}: serviceFeatureProps) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center group ${className || ''}`}>
      <div className={`rounded-full w-20 h-20 mb-4 flex justify-center items-center transition-all duration-300 bg-gray-200 group-hover:bg-[#e67c7c]`}>
        <div className={`rounded-full p-4 transition-all duration-300 ${iconClassName || ''}`}>
          <Icon className={`w-8 h-8 ${iconSubClassName || ''} `} />
        </div>
      </div>
      <h3 className={`font-semibold text-xl mb-2 ${titleClassName || ''}`}>{title}</h3>
      <p className={`text-sm font-normal ${descriptionClassName || ''}`}>{description}</p>
    </div>
  );
}

export default ServiceFeature;