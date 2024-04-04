import NavBar from "../components/NavBar";
import bgImg from "../assets/Rectangle 1.png"


const Booking = () => {
    return (
        <div className="hero min-h-screen text-white" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container auto">
                <NavBar></NavBar>
            </div>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content justify-between flex-col lg:flex-row-reverse pt-20">
                <div className="w-full lg:w-[35%] bg-white rounded p-6">
                    <form>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Origin</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Destination</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <label className="form-control w-full text-black">
                                <div className="label">
                                    <span className="label-text">From</span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full text-black">
                                <div className="label">
                                    <span className="label-text">To</span>
                                </div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <button className="btn w-full bg-[#F9A51A] mt-4">Start Booking</button>
                    </form>
                </div>
                <div className="w-[50%]">
                    <h1 className="text-4xl lg:text-8xl font-bold">Cox&apos;s bazar</h1>
                    <p className="py-6">Cox&apos;s Bazar is a town on the southeast coast of Bangladesh. It&apos;s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;