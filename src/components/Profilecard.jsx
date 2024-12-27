import { arull3, loguone, arull2 } from "../assets";
import { logutwo } from "../assets";

const ProfileCard = () => {
  const profiles = [
    {
      name: "V.Loganathan",
      position: "Executive Director",
      experience:
        "33 years of experience as a Development Officer in the marketing field at LIC",
      desc: "Strategic planning, and effective marketing strategies. Highly skilled in building strong client relationships and driving business growth.",
      photo: loguone,
      linkedin: "https://www.linkedin.com/in/loganathan-v/",
      gmail: "vaithilogu@gmail",
      online: true,
    },
    {
      name: "L.C.Arullamudhane",
      position: "Technical Lead",
      experience:
        "6 years of Experience as Fullstack Software Developer at MNC's",
      desc: "Expert in full stack development, specializing in managing the tech domain of a company. Skilled in delivering end-to-end software solutions and overseeing comprehensive technology strategies from inception to deployment.",
      photo: arull3,
      linkedin: "https://www.linkedin.com/in/lcarull/",
      gmail: "arullamudhanelc@myblueto.com",
      online: false,
    },
  ];
  return (
    <div className='flex flex-col md:flex-row space-x-0 space-y-10 md:space-x-10 md:space-y-0 p-2 md:p-10 '>
      {profiles.map((profile) => (
        <div class='flex-1 rounded-lg border bg-white px-3 pt-8 pb-10 shadow-lg'>
          <div class='relative mx-auto w-36 rounded-full '>
            {profile.online && (
              <span class='absolute right-0 m-7  mr-[30px] h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2'></span>
            )}
            <img
              class='mx-auto h-auto w-full rounded-full'
              src={profile.photo}
              alt=''
            />
          </div>
          <h1 class='my-1 text-center text-xl font-extrabold leading-8 '>
            {profile.name}
          </h1>
          {/* <h3 class='font-lg text-extrabold text-center leading-6 text-gray-600'> */}
          <h3 class='text-center font-bold text-gray-900 dark:text-white text-[rgb(74,106,197)]'>
            {profile.position}
          </h3>
          <p class='text-center  font-[100px] mb-[4px] text-sm leading-6 text-gray-500 text-[rgb(74,106,197)]'>
            {profile.experience}
          </p>
          <p class='text-center text-sm leading-6 text-[rgb(12 32 89)]  '>
            {profile.desc}
          </p>
          {/* <ul class='mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow'>
            <li class='flex items-center py-3 text-sm'>
              <span>Status</span>
              <span class='ml-auto'>
                <span class='rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700'>
                  Open for side gigs
                </span>
              </span>
            </li>
            <li class='flex items-center py-3 text-sm'>
              <span>Joined On</span>
              <span class='ml-auto'>Apr 08, 2022</span>
            </li>
          </ul> */}
          {/* <ul> */}
          <ul class='flex flex-row mt-4 items-center justify-center'>
            <li class='mx-2'>
              <a
                href={`mailto:${profile.gmail}`}
                target='_blank'
                aria-label='Gmail'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1.33em'
                  height='1em'
                  viewBox='0 0 256 193'
                >
                  <path
                    fill='#4285f4'
                    d='M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z'
                  />
                  <path
                    fill='#34a853'
                    d='M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z'
                  />
                  <path
                    fill='#ea4335'
                    d='m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z'
                  />
                  <path
                    fill='#fbbc04'
                    d='M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z'
                  />
                  <path
                    fill='#c5221f'
                    d='m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z'
                  />
                </svg>
              </a>
            </li>
            <li class='mx-2'>
              <a href={profile.linkedin} target='_blank' aria-label='LinkedIn'>
                <svg
                  class='h-6 text-indigo-700 hover:text-indigo-300'
                  fill='currentColor'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>LinkedIn</title>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
                </svg>{" "}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
