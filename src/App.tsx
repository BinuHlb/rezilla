
import Header from '@/components/sections/header';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Hero from './components/sections/hero';
import Partner from './components/sections/partner';

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

const team = [
  {
    name: "Sarah Johnson",
    role: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Emily Williams",
    role: "Luxury Property Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "David Thompson",
    role: "Commercial Real Estate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
  }
];

const blogs = [
  {
    title: "Top 10 Luxury Home Trends in 2024",
    excerpt: "Discover the latest trends shaping luxury real estate this year...",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60",
    date: "Mar 15, 2024"
  },
  {
    title: "Investment Guide: Real Estate in Major Cities",
    excerpt: "Learn about the best investment opportunities in metropolitan areas...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
    date: "Mar 12, 2024"
  },
  {
    title: "Sustainable Housing: The Future of Real Estate",
    excerpt: "Explore how sustainability is reshaping the real estate market...",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60",
    date: "Mar 10, 2024"
  }
];


  const images = [
    "src/assets/images/masonry-1.png",
    "src/assets/images/masonry-2.png",
    "src/assets/images/masonry-3.png"
  ];

function App() {
  

  return (

    <div className="min-h-screen bg-white">
      
      <Header/>
      <Hero/>
      <Partner/>

    
{/* Who we are section */}
<section  className="py-16 bg-gray-50 pt-32">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Column: Title and Description */}
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">Assisting individuals in locating the appropriate real estate.</h1>
        <p className="text-lg">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>
        <div className="flex relative items-center bg-white p-4 rounded-full h-[100px]">
    <div className="flex -space-x-4 rtl:space-x-reverse">
  
</div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">Donec porttitor euismod</h2>
        <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
      </div>
    </div>
    <div className="flex relative items-center bg-white p-4 rounded-full h-[100px]">
    <div className="flex -space-x-4 rtl:space-x-reverse">
  
 
</div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">Donec porttitor euismod</h2>
        <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
      </div>
    </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First column with 1 image */}
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={images[0]} alt="Image 1" />
        </div>
      </div>

      {/* Second column with 2 images */}
      <div className="grid gap-4">
        {images.slice(1).map((src, idx) => (
          <div key={idx}>
            <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${idx + 2}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
</section>

      {/* Featured Properties */}
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">Expert agents ready to help you find your perfect home</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-[200px] h-72 rounded-[120px_40px_40px_40px] object-cover transform transition-transform group-hover:scale-110 hover:rounded-sm"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest News & Insights</h2>
            <p className="text-gray-400">Stay updated with the latest real estate trends and news</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-blue-400 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-800">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8">Let us help you navigate your next real estate journey</p>
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="src/assets/images/logo.svg" alt="LuxEstate Logo" className="h-12 mb-6" />
              <p className="text-gray-600">Your trusted partner in finding exceptional properties in prime locations.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Properties</a></li>
                <li><a href="#" className="hover:text-gray-900">Agents</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 2728 Hickory StreetSalt 
                Lake City, UT 84104</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +1 206-214-2298</li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@rezilla.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-grow" />
                <Button>Subscribe</Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; Rezilla – All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;