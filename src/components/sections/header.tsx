import { useState } from 'react';
import { Menu, Phone, Mail,  ChevronRight, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   

    return (
     
 <div >
    {/* Top Bar */}
      <div className="bg-violet-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <span className="flex items-center"><Map className="w-4 h-4 mr-2" /> support@rezilla.com</span>
          </div>
          <div className="flex space-x-4 text-sm">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 206-214-2298</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@rezilla.com</span>
          </div>
          
        </div>
      </div>
 {/* Navigation */}
<nav className="bg-white sticky top-0 z-50">
<div className="container mx-auto px-4">
  <div className="flex justify-between items-center h-20">
  <div className="hidden md:flex space-x-8">
      <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
      <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
      <a href="#" className="text-gray-700 hover:text-gray-900">Blogs</a>
    </div>
    <div className="flex-shrink-0">
      <img src="src/assets/images/logo.svg" alt="LuxEstate Logo" className="h-12" />
    </div>
    <div>
    <Button size="lg" className="bg-violet-800 xs:hidden rounded-full hover:bg-blue-700">
        Explore Properties <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
    
    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <Menu className="h-6 w-6" />
    </Button>
  </div>
</div>
{/* Mobile menu */}
{mobileMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="#" className="block px-3 py-2 text-gray-700">Home</a>
      <a href="#" className="block px-3 py-2 text-gray-700">Properties</a>
      <a href="#" className="block px-3 py-2 text-gray-700">About</a>
      <a href="#" className="block px-3 py-2 text-gray-700">Contact</a>
    </div>
  </div>
)}
</nav>
</div>
    );
};

export default Header;
