const Partner: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 pt-32">
  <div className="container mx-auto px-2">
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
      {[
        "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
        "https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg",
        "https://www.logo.wine/a/logo/Logitech/Logitech-Logo.wine.svg",
        "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        "https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg",
        "https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
      ].map((logoUrl, index) => (
        <div key={index} className="flex justify-center transform transition-transform hover:scale-110 grayscale hover:grayscale-0 opacity-30 hover:opacity-100">
          <img src={logoUrl} alt={`Partner ${index + 1}`} className="h-30 object-contain" />
        </div>
      ))}
    </div>
  </div>
</section>
    );
};

export default Partner;
