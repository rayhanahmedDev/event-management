import { useLoaderData } from 'react-router-dom';
import '../../../public/banner.png'
import Cards from '../../Components/Cards';
import { useEffect, useState } from 'react';
import Test from '../../Components/Test';


const Home = () => {
    const dataLoader = useLoaderData()
    const [testData, setTestData] = useState([])

    useEffect(()=>{
        fetch('testData.json')
        .then(res => res.json())
        .then(data => setTestData(data))
    },[])
    return (
        <div>
            <div className="hero md:h-[85vh]" style={{ backgroundImage: 'url(banner.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Celebrate Your Ultimate <br /> <span className='text-[#ed22bd]'>Birthday Party</span></h1>
                        <p className='text-center max-w-xl text-white'>Social event management is the art of orchestrating celebrations and gatherings that leave a lasting impression on guests, ensuring every detail is meticulously planned.</p>
                        <button className='btn mt-4 text-white  bg-[#ed22bd] border-[#ed22bd]'>Online Request</button>
                    </div>
                </div>
            </div>
            <div className='lg:max-w-6xl md:max-w-6xl max-w-sm  mx-auto mt-16'>
                <h2 className='text-5xl font-bold text-center'>Our Services</h2>
                <p className='text-center mt-2 text-[#A3A3A6]'>We Are The Best</p>
                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                    {
                        dataLoader.map(card => <Cards key={card.id} card={card}></Cards>)
                    }
                </div>
            </div>
            <div  className='h-[80vh] bg-white max-w-[1540px] px-48 mt-16 pt-12'>
                <div>
                <h2 className='text-5xl font-bold text-center'>Testimonials</h2>
                <p className='text-center text-[12px] font-bold mt-4 text-[#A3A3A6]'>HAPPY CLIENTS ABOUT US</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                    {
                        testData.map(test => <Test key={test.id} test={test}></Test>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;