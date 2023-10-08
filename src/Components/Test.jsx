
import PropTypes from 'prop-types';

const Test = ({ test }) => {
    const { title, name, img } = test;
    return (
        <div>

            <div className="max-w-sm p-6 border border-gray-200 rounded-lg drop-shadow-lg bg-white">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <div className='avatar'>
                    <div className="w-24 rounded-full ">
                        <img src={img} />
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
                </div>
            </div>

        </div>
    );
};

Test.propTypes = {
    test: PropTypes.object
};

export default Test;