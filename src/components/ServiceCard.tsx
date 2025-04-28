
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, delay, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in border-l-4 border-diag-blue hover:shadow-lg transition-shadow",
        delay,
        className
      )}
    >
      <div className="mb-4 text-diag-blue">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-diag-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
