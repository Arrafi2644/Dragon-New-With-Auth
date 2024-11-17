import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold">Login With</h2>
            <div className="*:w-full flex flex-col gap-2 mt-4">
                <Link className="btn bg-white"> <span><FaGoogle /></span> Login with Google</Link>
                <Link className="btn bg-white"> <span><FaGithub></FaGithub></span> Login with Github</Link>
            </div>
        </div>
    );
};

export default SocialLogin;