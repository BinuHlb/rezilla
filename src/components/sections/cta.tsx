import { Button } from "@/components/ui/button";
const Cta: React.FC = () => {
    return(
        <section className="py-20 bg-violet-800">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8">Let us help you navigate your next real estate journey</p>
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>
    )
}

export default Cta;