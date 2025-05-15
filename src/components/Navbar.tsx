
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="py-4 px-4 relative">
      <div className="container-custom flex justify-center items-center">
        <div className="w-64 md:w-80">
          <img 
            src="/lovable-uploads/5b1b3926-7bc8-4893-b1ff-c3161dd45f3f.png" 
            alt="Mamãe Tranquila Logo" 
            className={cn(
              "w-full h-auto",
              "transition-opacity duration-300"
            )}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
