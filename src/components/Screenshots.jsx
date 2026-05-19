export default function Screenshots({ screenshots }) {
  if (!screenshots?.length) return null

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-bg" id="screenshots">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          Screens
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-5 text-[clamp(1.8rem,4vw,2.8rem)]">
          Product Screens
        </h2>
        <p className="text-sm sm:text-base text-secondary max-w-[680px] leading-[1.75] mb-10 sm:mb-12">
          Key interface states captured from the live product experience.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {screenshots.map((shot, index) => (
            <article
              key={`${shot.title}-${index}`}
              className="animate-reveal grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] gap-6 lg:gap-9 items-center border-b border-border pb-8 lg:pb-10 last:border-b-0 last:pb-0"
            >
              <div className="rounded-md overflow-hidden shadow-lg border border-border bg-surface">
                <img
                  src={shot.image}
                  alt={shot.imageAlt}
                  className="w-full"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent mb-2.5 block">
                  Screen {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[1.35rem] sm:text-[1.55rem] font-bold tracking-[-0.02em] leading-[1.25] mb-3">
                  {shot.title}
                </h3>
                <p className="text-secondary text-[0.95rem] leading-[1.7]">
                  {shot.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
