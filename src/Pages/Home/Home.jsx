import { useLoaderData } from 'react-router-dom';
import '../../../public/banner.png'
import Cards from '../../Components/Cards';


const Home = () => {
    const dataLoader = useLoaderData()
    return (
        <div>
            <div className="hero md:h-[85vh]" style={{ backgroundImage: 'url(banner.png)' }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Celebrate Your Ultimate Birthday <br /> Party Experience</h1>
                    </div>
                </div>
            </div>
            <div className='lg:max-w-7xl md:max-w-7xl max-w-sm  mx-auto mt-16'>
                <h2 className='text-3xl font-bold text-center'>Our Services</h2>
                <p className='text-center mt-2 text-[#A3A3A6]'>We Are The Best</p>
                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                    {
                        dataLoader.map(card => <Cards key={card.id} card={card}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;