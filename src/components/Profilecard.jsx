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
      gmail: "loganathan@myblueto.com",
      online: true,
    },
    // {
    //   name: "L.C.Arullamudhane",
    //   position: "Technical Lead",
    //   experience:
    //     "6 years of Experience as Fullstack Software Developer at MNC's",
    //   desc: "Expert in full stack development, specializing in managing the tech domain of a company. Skilled in delivering end-to-end software solutions and overseeing comprehensive technology strategies from inception to deployment.",
    //   photo: arull3,
    //   linkedin: "https://www.linkedin.com/in/lcarull/",
    //   gmail: "arullamudhanelc@myblueto.com",
    //   online: false,
    // },
  ];
  return (
    <div className="relative mt-9 text-center h-[100%] hhh">
      {profiles.map((p, index) => (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
       {profiles.map((profile, index) => (
         <div 
           key={index}
           className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
           
           {/* Profile Image Container */}
           <div className="relative">
             <div className="relative mx-auto w-32 h-32">
               <img
                 className="h-full w-full rounded-full object-cover ring-4 ring-blue-400/20 shadow-lg"
                 src={profile.photo}
                 alt={profile.name}
               />
               {profile.online && (
                 <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-400 ring-2 ring-blue-900" />
               )}
             </div>
           </div>
 
           {/* Profile Info */}
           <div className="relative mt-6 text-center">
             <h3 className="text-2xl font-bold tracking-tight text-white">
               {profile.name}
             </h3>
             <div className="mt-2">
               <span className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-400/20">
                 {profile.position}
               </span>
             </div>
             <p className="mt-2 text-sm font-medium text-blue-300">
               {profile.experience}
             </p>
             <p className="mt-4 text-sm leading-relaxed text-blue-100">
               {profile.desc}
             </p>
           </div>
 
           {/* Social Links */}
           <div className="relative mt-6 flex justify-center space-x-6">
             <a
               href={`mailto:${profile.gmail}`}
               className="group/link rounded-lg p-2 transition-colors hover:bg-blue-800/50"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Email"
             >
               <svg
                 className="h-5 w-5 text-blue-200 transition-colors group-hover/link:text-blue-100"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                 <polyline points="22,6 12,13 2,6" />
               </svg>
             </a>
             <a
               href={profile.linkedin}
               className="group/link rounded-lg p-2 transition-colors hover:bg-blue-800/50"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
             >
               <svg
                 className="h-5 w-5 text-blue-200 transition-colors group-hover/link:text-blue-100"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                 <rect x="2" y="9" width="4" height="12" />
                 <circle cx="4" cy="4" r="2" />
               </svg>
             </a>
           </div>
 
           {/* Decorative Elements */}
           <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-300/20" />
           <div className="absolute left-4 bottom-4 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-300/20" />
         </div>
       ))}
     </div>
      ))}
    </div>
  );
}
export default ProfileCard;
