import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SocialLogin = () => {
    const {logInWithGoogle, logInWithGithub} = useContext(AuthContext)
    return (
        <div>
            <h2 className="font-semibold">Login With</h2>
            <div className="*:w-full flex flex-col gap-2 mt-4">
                <Link onClick={()=>logInWithGoogle()} className="btn bg-white"> <span><FaGoogle /></span> Login with Google</Link>
                <Link onClick={()=>logInWithGithub()} className="btn bg-white"> <span><FaGithub></FaGithub></span> Login with Github</Link>
            </div>
        </div>
    );
};

export default SocialLogin;