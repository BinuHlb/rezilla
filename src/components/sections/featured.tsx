import { Card } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
const properties = [
    {
      id: 1,
      title: "Luxury Villa with Pool",
      price: "$1,250,000",
      location: "Beverly Hills",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60",
      beds: 5,
      baths: 4,
      sqft: 4500
    },
    {
      id: 2,
      title: "Modern Downtown Loft",
      price: "$850,000",
      location: "Manhattan",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
      beds: 2,
      baths: 2,
      sqft: 1800
    },
    {
      id: 3,
      title: "Beachfront Paradise",
      price: "$2,100,000",
      location: "Malibu",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=60",
      beds: 4,
      baths: 3,
      sqft: 3200
    }
  ];
function Featured() {
  

    return (
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover our handpicked selection of premium properties</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-violet-800 text-white px-3 py-1 rounded">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 flex items-center mb-4">
                    <MapPin className="h-4 w-4 mr-2" /> {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} Sq Ft</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Featured;