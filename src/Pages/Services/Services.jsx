import { useLoaderData } from "react-router-dom";
import Shops from "../../Components/Shops";


const Services = () => {
    const shopData = useLoaderData()
    
    return (
        <div className="bg-[#75C1D1] lg:max-w-[1540px] max-w-7xl  lg:px-40 py-16 px-8 lg:mx-0">
           <h2 className="text-5xl text-center text-white font-bold">Shop Now</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {
                shopData.map(shops => <Shops key={shops.id} shops={shops}></Shops>)
            }
            </div> 
        </div>
    );
};

export default Services;