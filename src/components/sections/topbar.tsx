import { Phone, Mail, Map } from 'lucide-react';
const Topbar: React.FC = () => {
    return(
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
    )

}

export default Topbar;