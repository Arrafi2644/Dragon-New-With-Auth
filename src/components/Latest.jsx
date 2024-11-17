import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className=' bg-base-200 flex gap-2 items-center'>
            <p className='bg-[#D72050] text-white py-1 px-3'>Latest</p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa minima itaque illum similique voluptates et maxime culpa qui voluptas fuga!</p> */}
            {/* <marquee behavior="" direction="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, accusamus. Distinctio omnis cupiditate, tenetur eum odio neque deserunt esse voluptates!</marquee> */}
            <Marquee pauseOnHover speed={80}>
                I can be a React component, Lorem, ipsum dolor. Dolore, ex! Lorem ipsum dolor sit amet. multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default Latest;