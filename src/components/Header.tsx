
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-900">
            ParketKZ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-800 hover:text-amber-900 transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-amber-800 hover:text-amber-900 transition-colors">
              Каталог
            </Link>
            <div className="flex items-center text-amber-700 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              Астана
            </div>
            <div className="flex items-center text-amber-700 text-sm">
              <Phone className="h-4 w-4 mr-1" />
              +7 (717) 123-45-67
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-amber-800 hover:text-amber-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className="text-amber-800 hover:text-amber-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <div className="flex items-center text-amber-700 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                Астана
              </div>
              <div className="flex items-center text-amber-700 text-sm">
                <Phone className="h-4 w-4 mr-1" />
                +7 (717) 123-45-67
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
