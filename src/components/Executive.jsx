export default function Executive({ executive }) {
  const { sectionLabel, heading, description, image, imageAlt, challenge, vision } = executive

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-surface" id="overview">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          {sectionLabel}
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-5 text-[clamp(1.8rem,4vw,2.8rem)]">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-secondary max-w-[680px] leading-[1.75] mb-10 sm:mb-12">
          {description}
        </p>

        {/* Overview image */}
        <div className="animate-reveal rounded-lg overflow-hidden p-2 sm:p-[15px] shadow-lg border border-border mb-10 sm:mb-14">
          <img src={image} alt={imageAlt} className="w-full" />
        </div>

        {/* Challenge + Vision grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Challenge card */}
          <div className="animate-reveal bg-accent-light border border-[rgba(99,102,241,0.15)] rounded-md p-5 sm:p-7 lg:p-9">
            <h3 className="font-display text-[1.25rem] font-bold mb-1.5">
              {challenge.heading}
            </h3>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-accent mb-4">
              {challenge.subheading}
            </p>
            <p className="text-secondary text-[0.95rem]">
              {challenge.text}
            </p>
          </div>

          {/* Vision card */}
          <div className="animate-reveal bg-surface-alt border border-border rounded-md p-5 sm:p-7 lg:p-9 flex flex-col gap-6">
            <div>
              <h3 className="font-display text-[1.25rem] font-bold mb-3">
                {vision.heading}
              </h3>
              <blockquote className="italic text-secondary text-[0.95rem] leading-[1.7] border-l-[3px] border-accent pl-4">
                "{vision.quote}"
              </blockquote>
            </div>
            <div className="rounded-sm overflow-hidden shadow-sm">
              <img src={vision.image} alt={vision.imageAlt} className="w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
