
import { ChevronRight, Search} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
  } from "@/components/ui/form";
  import { useForm } from "react-hook-form";
const Hero: React.FC = () => {
    const form = useForm();
    return (

      <section className="relative bg-gray-50 pt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-300 to-white rounded-bl-[100%] rounded-br-[100%] rounded-tl-none rounded-tr-none z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">Find a perfect home you love..!</h1>
            <p className="text-xl text-gray-600">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
            <Button size="lg" className="bg-violet-400 rounded-full hover:bg-blue-700">
              Explore Properties <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Find Your Property</h3>
            <Form {...form}>
<div className="space-y-4">
  {/* First Field - Location */}
  <FormField
    control={form.control}
    name="location"
    render={({ field }) => (
      <FormItem>
        <FormControl className="h-[59px] border border-slate-100 rounded-[20px] bg-slate-100">
          <Input placeholder="Enter location..." {...field} />
        </FormControl>
      </FormItem>
    )}
  />

  {/* Second Field - Property Type (Select) */}
  <FormField
    control={form.control}
    name="propertyType"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <select {...field} className="w-full h-[59px] border px-3 border-slate-100 focus:outline-none rounded-[20px] bg-slate-100">
            <option value="" disabled>Select property type...</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="studio">Studio</option>
            <option value="villa">Villa</option>
          </select>
        </FormControl>
      </FormItem>
    )}
  />

  {/* Third Field - Property Rooms (Select) */}
  <FormField
    control={form.control}
    name="rooms"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <select {...field} className="w-full h-[59px] border px-3 border-slate-100 focus:outline-none rounded-[20px] bg-slate-100">
            <option value="" disabled>Select property rooms...</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="studio">Studio</option>
            <option value="villa">Villa</option>
          </select>
        </FormControl>
      </FormItem>
    )}
  />

  {/* Submit Button */}
  <Button className="h-[59px] rounded-full w-full bg-violet-800 hover:bg-blue-700">
    Search Properties <Search className="ml-2 h-4 w-4" />
  </Button>
</div>
</Form>

          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 flex mt-20 justify-center relative top-16">
<div className="grid w-1/2 grid-cols-1 md:grid-cols-2 gap-4">
  
  {/* Happy Customers Box */}
  <div className="flex relative items-center bg-white p-4 rounded-full h-[100px]">
  <div className="flex -space-x-4 rtl:space-x-reverse">
<img 
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" 
  src="https://www.svgrepo.com/show/170303/avatar.svg" 
  alt="Profile Picture 5"
/>
<img 
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" 
  src="https://www.svgrepo.com/show/8138/avatar.svg" 
  alt="Profile Picture 2"
/>
<img 
  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" 
  src="https://www.svgrepo.com/show/53617/avatar.svg" 
  alt="Profile Picture 3"
/>
<a 
  className="flex items-center justify-center w-10 h-10 text-lg font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" 
  href="#"
>
  +
</a>
</div>

    <div>
      <h2 className="text-xl font-bold text-gray-800">Happy Customers</h2>
    </div>
  </div>

  {/* New Listings Every Day Box */}
  <div className="flex relative items-center bg-white p-4 rounded-full h-[100px]">
    <img src="https://www.svgrepo.com/show/283186/property-house.svg" alt="Listing Avatar" className="h-12 w-12 rounded-full mr-4" />
    <div>
      <h2 className="text-xl font-bold text-gray-800">New Listings Every Day</h2>
    </div>
  </div>
</div>


</div>

    </section>
    );
};

export default Hero;
