import PropTypes from 'prop-types';

const Cards = ({ card }) => {
    const { name, image, price, description } = card;
    return (
        <div className="">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg w-full lg:h-52" src={image} alt="" />              
                <div className="p-5">               
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>                  
                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <p>Price : ${price}</p>
                    <div className="card-actions mt-4">
                        <button className="btn text-white w-full btn-secondary">view details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};


Cards.propTypes = {
    card: PropTypes.array.isRequired
}
export default Cards;