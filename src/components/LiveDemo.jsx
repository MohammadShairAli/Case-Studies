export default function LiveDemo({ liveDemo }) {
  if (!liveDemo?.images?.length) return null

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-surface" id="demo">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          {liveDemo.sectionLabel}
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-5 text-[clamp(1.8rem,4vw,2.8rem)]">
          {liveDemo.heading}
        </h2>
        <p className="text-sm sm:text-base text-secondary max-w-[760px] leading-[1.75] mb-10 sm:mb-12">
          {liveDemo.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveDemo.images.map((item) => (
            <article
              key={item.index}
              className="animate-reveal bg-bg border border-border rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]"
            >
              <div className="aspect-[16/10] bg-surface-alt overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-muted">
                    Demo {String(item.index).padStart(2, '0')}
                  </span>
                  {item.tag && (
                    <span className="text-[0.72rem] font-semibold text-accent bg-accent-light rounded-full px-2.5 py-1">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-[1.15rem] sm:text-[1.25rem] font-bold leading-[1.3] mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary text-[0.9rem] leading-[1.65]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
