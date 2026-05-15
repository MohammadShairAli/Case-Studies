// export default function Hero({ hero }) {
//   return (
//     <section
//       className="min-h-screen flex flex-col justify-center px-10 pt-[120px] pb-[60px] bg-hero-gradient relative overflow-hidden"
//       id="hero"
//     >
//       {/* animated bg grid */}
//       <div className="hero-bg-grid" />

//       {/* Content */}
//       <div className="max-w-container mx-auto w-full relative z-10">

//         {/* Text block */}
//         <div className="max-w-[680px] animate-up opacity-0">
//           <span className="
//             inline-block text-[0.75rem] font-semibold tracking-[0.12em] uppercase
//             text-accent bg-accent-light border border-[rgba(99,102,241,0.2)]
//             px-[14px] py-[4px] rounded-full mb-6
//           ">
//             {hero.badge}
//           </span>

//           <h1 className="
//             font-display font-extrabold leading-[1.1] tracking-[-0.03em]
//             text-primary mb-4
//             text-[clamp(2.4rem,5vw,4rem)]
//           ">
//             {hero.heading}
//           </h1>

//           <p className="text-[1.1rem] font-medium text-accent mb-5">
//             {hero.subheading}
//           </p>

//           <p className="text-base text-secondary max-w-[540px] mb-9">
//             {hero.description}
//           </p>

//           <a
//             href="#overview"
//             className="
//               inline-flex items-center gap-2 bg-primary text-white
//               font-display font-semibold text-[0.9rem]
//               px-7 py-[14px] rounded-full shadow-md
//               transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg
//             "
//           >
//             View Case Study ↓
//           </a>
//         </div>

//         {/* Stats grid */}
//         <div className="
//           grid grid-cols-4 sm:grid-cols-4 grid-cols-2
//           gap-4 mt-14 max-w-[800px]
//           animate-up opacity-0 delay-1
//         ">
//           {hero.stats.map((stat, i) => (
//             <div
//               key={i}
//               className="
//                 bg-surface border border-border rounded-md
//                 p-6 flex flex-col items-center justify-center text-center gap-1.5
//                 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md
//               "
//             >
//               <span className="
//                 font-display text-[1.8rem] font-extrabold text-primary
//                 tracking-[-0.02em] leading-none
//               ">
//                 {stat.value}
//               </span>
//               <span className="text-[0.78rem] text-muted font-medium uppercase tracking-[0.05em]">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Banner image */}
//       <div className="
//         max-w-container mx-auto mt-14 rounded-lg overflow-hidden
//         shadow-lg border border-border relative z-10 w-full
//         animate-up opacity-0 delay-2
//       ">
//         <img
//           src={hero.bannerImage}
//           alt="Pipeline Overview Banner"
//           className="w-full object-cover"
//         />
//       </div>
//     </section>
//   )
// }
export default function Hero({ hero }) {
  return (
    <section
      className="
        min-h-screen flex flex-col justify-center
        px-4 sm:px-6 md:px-10
        pt-[100px] md:pt-[120px]
        pb-[50px] md:pb-[60px]
        bg-hero-gradient relative overflow-hidden
      "
      id="hero"
    >
      {/* animated bg grid */}
      <div className="hero-bg-grid" />

      <div className="max-w-container mx-auto w-full relative z-10">

        {/* Text block */}
        <div className="max-w-full md:max-w-[680px] animate-up opacity-0">

          <span className="
            inline-block text-[0.7rem] sm:text-[0.75rem]
            font-semibold tracking-[0.12em] uppercase
            text-accent bg-accent-light
            px-3 py-[4px] rounded-full mb-4 sm:mb-6
          ">
            {hero.badge}
          </span>

          <h1 className="
            font-display font-extrabold leading-[1.1]
            text-primary mb-3 sm:mb-4
            text-[2rem] sm:text-[2.8rem] md:text-[3.5rem]
          ">
            {hero.heading}
          </h1>

          <p className="text-base sm:text-[1.1rem] text-accent mb-4 sm:mb-5">
            {hero.subheading}
          </p>

          <p className="text-sm sm:text-base text-secondary mb-6 sm:mb-9">
            {hero.description}
          </p>

          <a
            href="#overview"
            className="
              inline-flex items-center gap-2
              bg-primary text-white
              text-sm sm:text-[0.9rem]
              px-5 sm:px-7 py-3 sm:py-[14px]
              rounded-full shadow-md
              transition-all duration-300
              hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg
            "
          >
            View Case Study ↓
          </a>
        </div>

        {/* Stats grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
          gap-3 sm:gap-4
          mt-10 md:mt-14
          max-w-[800px]
          animate-up opacity-0 delay-1
        ">
          {hero.stats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-surface border border-border rounded-md
                p-4 sm:p-6
                flex flex-col items-center text-center gap-1
                shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <span className="
                text-xl sm:text-[1.8rem]
                font-extrabold text-primary
              ">
                {stat.value}
              </span>

              <span className="
                text-[0.7rem] sm:text-[0.78rem]
                text-muted uppercase
              ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="
        max-w-container mx-auto mt-10 md:mt-14
        rounded-lg overflow-hidden
        shadow-lg border border-border
        w-full
        animate-up opacity-0 delay-2
      ">
        <img
          src={hero.bannerImage}
          alt="Pipeline Overview Banner"
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}