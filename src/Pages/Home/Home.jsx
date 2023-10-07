import '../../../public/banner.png'

const Home = () => {
    return (
        <div>
            <div className="hero h-[85vh]" style={{ backgroundImage: 'url(banner.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Celebrate Your Ultimate Birthday <br /> Party Experience</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;