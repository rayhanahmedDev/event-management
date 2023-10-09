import { useLoaderData } from "react-router-dom";
import Blogs from "../../Components/Blogs";
import moment from 'moment';


const Blog = () => {
    const blogData = useLoaderData()
    
    return (
        <div className="bg-white lg:max-w-[1540px] max-w-7xl  lg:px-40 pt-4 mx-auto">
           <h2 className="text-5xl text-center font-medium mb-12"><span className="text-[#FCB41E]">See</span> Our Blog</h2>
          <div  className='grid grid-cols-1 md:grid-cols-4'>
          <div className="px-8 lg:px-0 col-span-3">
            {
                blogData.map(blogs => <Blogs key={blogs.id} blogs={blogs}></Blogs>)
            }
           </div>
           <div className="max-w-sm px-8 mb-8 lg:px-0">
            <h2 className="text-3xl font-medium mt-2">Recent Posts</h2>
            <hr className="mt-4" />
            <h4 className="font-bold text-[#676767] my-4">How to Start an Event Planning Service</h4>
            <p className="text-red-500">{moment().format('MMMM D, YYYY')}</p>
            <h4 className="font-bold my-4 text-[#676767]">Turning a Profit in the Event Planning Business</h4>
            <p className="text-red-500">{moment().format('MMMM D, YYYY')}</p>
            <h4 className="font-bold my-4 text-[#676767]">Hiring an Events Planner</h4>
            <p className="text-red-500">{moment().format('MMMM D, YYYY')}</p>
           </div>
          </div>
        </div>
    );
};

export default Blog;