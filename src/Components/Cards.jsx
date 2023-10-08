import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    const { id, name, image, price, description } = card;
    return (
        <div className="">
            <div className=" bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-full lg:h-52 md:h-52" src={image} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-[#A3A3A6]">{description}</p>
                    <p className='text-[#A3A3A6]'>Price : ${price}</p>
                    <div className=" mt-4">
                        <Link to={`/detail/${id}`}><button className="btn text-white w-full btn-secondary">view details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


Cards.propTypes = {
    card: PropTypes.object.isRequired
}
export default Cards;