import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F7EFE3] text-gray-700">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-width-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Chase. Take a look around.</p>
          </div>
          <div c>
            <p>
              My goal in life is to be able to put as many smiles on people's
              faces from the things I create. <br />
              Whether it be from the food I cook or the software I develop, I
              strive to create an amazing experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
