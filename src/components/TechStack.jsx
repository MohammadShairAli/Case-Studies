export default function TechStack({ techStack }) {
  const { sectionLabel, heading, items } = techStack

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-bg" id="tech">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          {sectionLabel}
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-8 sm:mb-12 text-[clamp(1.8rem,4vw,2.8rem)]">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="
                tech-card
                animate-reveal
                flex items-center gap-4 px-4 sm:px-5 py-4.5 min-h-[80px]
                bg-[rgba(255,255,255,0.7)] backdrop-blur-[10px]
                border border-border rounded-[14px]
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                transition-all duration-300 relative overflow-hidden
                hover:-translate-y-1.5 hover:scale-[1.02]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                hover:border-[rgba(26,86,219,0.3)]
              "
            >
              {/* Icon */}
              <img
                className="
                  w-9 h-9 object-contain flex-shrink-0
                  p-1.5 rounded-[10px] bg-white border border-border
                  transition-transform duration-300
                  group-hover:scale-110
                "
                src={`https://cdn.simpleicons.org/${t.icon}`}
                alt={t.name}
                onError={(e) => {
                  e.target.src = 'https://cdn-icons-png.flaticon.com/512/2721/2721293.png'
                }}
              />

              {/* Info */}
              <div className="min-w-0">
                <span className="block font-semibold text-[0.88rem] text-primary">
                  {t.name}
                </span>
                {t.category && (
                  <span className="block text-[0.75rem] text-muted mt-0.5">
                    {t.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
