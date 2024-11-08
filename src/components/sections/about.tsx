import React from 'react';
const images = [
    "src/assets/images/masonry-1.png",
    "src/assets/images/masonry-2.png",
    "src/assets/images/masonry-3.png"
  ];
const About: React.FC = () => {
    return (
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
    );
};

export default About;
