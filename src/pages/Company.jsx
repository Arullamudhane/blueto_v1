import React from "react";
import Bounded from "../components/Bounded";
import officeImg from "../company.png";
import Heading from "../components/Heading";
import ProfileCard from "../components/Profilecard";
import Line from "../components/Line";
const Company = () => {
  return (
    <Bounded>
      <div className='grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] text-center md:text-start'>
        <Heading size='xl' className='col-start-1 pb-[3rem]'>
          About Blueto
        </Heading>
        <div className='prose prose-xl prose-slate prose-invert col-start-1'>
          <p className='pb-1'>
            We are the change. Where innovation meets functionality. We are a
            team of skilled software freelancers dedicated to providing
            cutting-edge solutions to propel your business forward.
          </p>
          <p className='pb-7'>
            With expertise in diverse technologies and a commitment to
            excellence, we deliver custom software solutions tailored to your
            unique needs.
          </p>
          <p className='font-extrabold pt-[2vh] text-[#72d6e5] text-xl'>
            Why Choose Blueto?
          </p>
          <p className='pt-2 pb-1 mb-2'>
            <b class='text-xl font-bold text-blue-600/80 dark:text-blue-500/80'>
              Expertise:
            </b>{" "}
            &nbsp;Our team comprises skilled professionals with in-depth
            knowledge of the latest technologies.
          </p>
          <p className='pb-1 my-3'>
            <b class='text-xl font-bold text-blue-600/80 dark:text-blue-500/80'>
              Custom Solutions:
            </b>{" "}
            &nbsp;We understand that every business is unique. Our solutions are
            tailor-made to fit your specific requirements.
          </p>
          <p className='pb-1 my-3'>
            <b class='text-xl font-bold text-blue-600/80 dark:text-blue-500/80'>
              Quality Assurance:
            </b>{" "}
            &nbsp;Our commitment to delivering high-quality software ensures
            that your project meets the highest standards.
          </p>
        </div>
        {/* Image */}
        <div className='row-start-2 md:row-start-1 max-w-sm md:col-start-2 md:row-end-3 z-40 mt-0 md:mt-40'>
          <img
            src={officeImg}
            className='about-image  w-full rounded-[2.375rem] h-[450px] mx-auto [box-shadow:10px_10px_10px_#000000]'
            alt='aboutimage'
          />
        </div>
      </div>
      <Line />
      <div className='team'>
        <p className='font-extrabold pt-[2vh] text-[#72d6e5] text-xl my-3 pb-2'>
          Meet Our Team
        </p>
        {/* <p className='pb-2 '> */}
        <p class='text-xl font-m text-[#cbd5e1] mt-3 pt-1 md:mb-4 mb-[40px]'>
          Our talented team drives innovation and excellence. Each member brings
          unique expertise and a passion for technology, working collaboratively
          to deliver outstanding solutions. Get to know the faces behind our
          success and see how their skills and dedication shape our projects.
        </p>
      </div>

      <ProfileCard />
      <p class=' text-center last line italic text-gray-400 dark:text-gray-400 font-m pt-4'>
        People will forget what you said, people will forget what you did, but
        people will never forget how you made them feel. Join us and experience
        what it's feel like to be the <b>CEO</b> of your own project.
      </p>
      <div class='inline-flex items-center justify-center w-full'>
        <hr class='w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
        <div class='absolute px-4 -translate-x-1/2 bg-black left-1/2 dark:bg-red-900'>
          <svg
            class='w-4 h-4 text-blue-700 dark:text-blue'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 14'
          >
            <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
          </svg>
        </div>
      </div>
    </Bounded>
  );
};

export default Company;
