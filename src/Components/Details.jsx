import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const notify = () => toast("You Are Successfully Booked !");
    const data = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const details = data.find(details => details.id ===idInt)
    return (
       <div>
         <div className="max-w-sm mx-auto my-12">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-full  lg:h-52" src={details.image} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.name}</h5>
                    <p className="mb-3 font-normal text-[#A3A3A6]">{details.description}</p>
                    <p className='text-[#A3A3A6]'>Price : ${details.price}</p>
                    <div className="card-actions mt-4">
                    <button onClick={notify} className="btn text-white w-full btn-secondary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
       </div>
    );
};

export default Details;