import bgImg from "../assets/Rectangle 1.png"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../assets/Sajek.png"
import img2 from "../assets/Sreemongol.png"
import img3 from "../assets/sundorbon.png"
import img4 from "../assets/Sreemongol.png"
import img5 from "../assets/sundorbon.png"
import img6 from "../assets/Sajek.png"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import NavBar from "../components/NavBar"


const Home = () => {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })

    return (
        <div className="hero min-h-screen text-white" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container auto">
                <NavBar></NavBar>
            </div>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content flex-col lg:flex-row-reverse pt-20">
                <div className="w-full lg:w-1/2">
                    <div ref={sliderRef} className="keen-slider w-full">
                        <div className="keen-slider__slide number-slide1"><img src={img1} alt="" /></div>
                        <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
                        <div className="keen-slider__slide number-slide3"><img src={img3} alt="" /></div>
                        <div className="keen-slider__slide number-slide4"><img src={img4} alt="" /></div>
                        <div className="keen-slider__slide number-slide5"><img src={img5} alt="" /></div>
                        <div className="keen-slider__slide number-slide6"><img src={img6} alt="" /></div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl lg:text-8xl font-bold">Cox&apos;s bazar</h1>
                    <p className="py-6">Cox&apos;s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link>
                        <button className="btn bg-[#F9A51A]">Booking <FaArrowRightLong /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;