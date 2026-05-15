import BenchmarkChart from './BenchmarkChart'

export default function Performance({ performance }) {
  const { sectionLabel, heading, description, metrics, chart, chartImage, chartAlt } = performance

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-bg" id="performance">
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

        {/* Metric cards */}
        <div className={`animate-reveal grid gap-4 sm:gap-5 mb-10 sm:mb-12 ${metrics.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className="
                bg-surface border border-border rounded-md p-5 sm:p-6 lg:p-8
                shadow-sm flex flex-col items-center justify-center text-center gap-4
                transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]
                min-w-0
              "
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center justify-center gap-3 sm:gap-5 w-full">

                {/* Before */}
                <div className="flex min-w-0 flex-col items-center">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 block">
                    Before
                  </span>
                  <span className="font-display text-[clamp(1.55rem,8vw,2rem)] font-extrabold leading-tight break-words line-through decoration-[#111] decoration-2">
                    {m.before}
                  </span>
                </div>

                <span className="text-[1.25rem] sm:text-[1.4rem] text-muted flex-shrink-0">→</span>

                {/* After */}
                <div className="flex min-w-0 flex-col items-center">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 block">
                    After
                  </span>
                  <span className="font-display text-[clamp(1.55rem,8vw,2rem)] font-extrabold leading-tight break-words text-accent-green">
                    {m.after}
                  </span>
                </div>

              </div>
              <span className="text-[0.8rem] sm:text-[0.85rem] font-semibold text-secondary uppercase tracking-[0.06em]">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {chart ? (
          <BenchmarkChart chart={chart} />
        ) : (
          <div className="animate-reveal bg-surface border border-border rounded-lg shadow-md overflow-hidden">
            <img src={chartImage} alt={chartAlt} className="w-full rounded-md block p-2 sm:p-[10px]" />
          </div>
        )}

      </div>
    </section>
  )
}
