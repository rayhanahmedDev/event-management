import { useLoaderData } from 'react-router-dom';
import '../../../public/banner.png'
import Cards from '../../Components/Cards';
import { useEffect, useState } from 'react';
import Test from '../../Components/Test';


const Home = () => {
    const dataLoader = useLoaderData()
    const [testData, setTestData] = useState([])

    useEffect(() => {
        fetch('testData.json')
            .then(res => res.json())
            .then(data => setTestData(data))
    }, [])
    return (
        <div>
            <div className="hero md:h-[85vh]" style={{ backgroundImage: 'url(banner.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="" data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className="mb-5 text-5xl font-bold text-white">We Create
                            <br /> <span className='text-[#ed22bd]'>You <br /></span> Celebrate</h1>
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
            <div className='bg-[#F5F5F6] lg:h-[70vh] lg:max-w-[1540px] md:max-w-6xl max-w-sm lg:px-48 mx-14 mt-12 pt-12'>
                <h2 className='text-5xl font-bold text-center'>Testimonials</h2>
                <p className='text-center text-[12px] font-bold mt-4 text-[#A3A3A6]'>HAPPY CLIENTS ABOUT US</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                    {
                        testData.map(test => <Test key={test.id} test={test}></Test>)
                    }
                </div>
            </div>
            <div className='bg-[#75C1D1] lg:h-[80vh] mt-8 lg:max-w-[1540px] max-w-6xl lg:px-48 py-16 px-14 lg:mx-0' data-aos="fade-up"
                data-aos-duration="2000">
                <div>
                    <h2 className='text-5xl font-bold text-white text-center'>Online Request</h2>
                    <p className='text-center text-[12px] text-white font-bold mt-4 '>DROP US A FEW LINES</p>
                </div>
                <div className='flex flex-wrap justify-center  gap-4 mt-8 h-[56px]'>
                    <input className='w-[300px] rounded-full pl-8 text-[16px] font-bold' placeholder='Name*' type="text" name="" id="" />
                    <input className='w-[300px] pl-8 text-[16px] font-bold rounded-full' placeholder='Phone*' type="number" name="" id="" />
                </div>
                <div className='flex flex-wrap justify-center mt-8'>
                    <textarea className='rounded-3xl lg:pt-4 pl-8 text-[16px] font-bold' name="" placeholder='Message*' id="" cols="71" rows="5"></textarea>
                </div>
                <div className='text-center mt-8 '>
                    <button className='btn bg-[#D67F7F] lg:w-[130px] border-[#D67F7F] text-white text-sm rounded-full'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Home;