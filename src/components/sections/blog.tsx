import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
const Blog: React.FC = () => {
    return (
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
    );
}

export default Blog;