
import PropTypes from 'prop-types';

const Blogs = ({blogs}) => {
    const {name,img,des} = blogs ;
    return (
        <div>
            <div>
            <h3 className="text-4xl mb-12">{name}</h3>
            <img className='lg:max-w-2xl' src={img} alt="" />
            <p className='my-8 lg:max-w-2xl text-[#676767]'>{des}</p>
            <button className='px-4 bg-slate-100 rounded-full mb-8'>More</button>
            </div>
        </div>
    );
};

Blogs.propTypes = {
  blogs: PropTypes.object  
};

export default Blogs;
