
import PropTypes from 'prop-types';

const Test = ({ test }) => {
    const { title, name, img } = test;
    return (
        <div>

            <div className=" p-6 border border-gray-200 rounded-3xl shadow bg-white py-8" data-aos="fade-up"
                        data-aos-duration="2000">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <div className='avatar flex justify-center mt-8 items-center gap-4'>
                    <div className="w-14 rounded-full ">
                        <img src={img} />
                       
                    </div>
                    <p className="mb-3 font-normal text-[#A3A3A6]">{name}</p>
                </div>
            </div>

        </div>
    );
};

Test.propTypes = {
    test: PropTypes.object
};

export default Test;