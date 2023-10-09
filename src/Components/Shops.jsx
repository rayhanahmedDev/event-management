

import PropTypes from 'prop-types';

const Shops = ({ shops }) => {
    const { name, img, price } = shops;
    return (
        <div>
            <div className="card bg-base-100 shadow">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl lg:h-52 md:h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Shops.propTypes = {
    shops: PropTypes.object
};

export default Shops;