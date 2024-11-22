import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="w-full">
            <h2 className='font-semibold mt-6 mb-4 '>Find Us On</h2>
            <div className="join flex join-vertical *:justify-start">
                <button className="btn join-item bg-base-100 "> <span className="ml-2" ><FaFacebook></FaFacebook></span> Facebook</button>
                <button className="btn join-item bg-base-100"> <span className="ml-2" ><FaTwitter></FaTwitter></span> Twitter</button>
                <button className="btn join-item bg-base-100"> <span className="ml-2" ><FaInstagram></FaInstagram></span> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;