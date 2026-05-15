export default function ROI({ roi }) {
  if (!roi) return null

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-surface" id="roi">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          {roi.sectionLabel}
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-5 text-[clamp(1.8rem,4vw,2.8rem)]">
          {roi.heading}
        </h2>

        <blockquote className="
          animate-reveal
          italic text-secondary text-sm sm:text-[1rem] leading-[1.7]
          border-l-[3px] border-accent pl-4 sm:pl-5 mb-10 max-w-[780px]
        ">
          "{roi.quote}"
        </blockquote>

        {/* ROI drivers table */}
        <div className="animate-reveal overflow-hidden rounded-lg border border-border shadow-sm">
          <table className="w-full table-fixed text-sm">
            <thead className="hidden sm:table-header-group">
              <tr className="bg-surface-alt border-b border-border">
                <th className="w-[38%] text-left px-5 lg:px-6 py-4 font-semibold text-primary tracking-wide uppercase text-[0.75rem]">
                  ROI Driver
                </th>
                <th className="w-[34%] text-left px-5 lg:px-6 py-4 font-semibold text-primary tracking-wide uppercase text-[0.75rem]">
                  Impact
                </th>
                <th className="text-left px-5 lg:px-6 py-4 font-semibold text-primary tracking-wide uppercase text-[0.75rem] hidden md:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {roi.drivers.map((row, i) => (
                <tr
                  key={i}
                  className={`
                    block sm:table-row border-b border-border last:border-b-0
                    transition-colors duration-200 hover:bg-accent-light/40
                    ${i % 2 === 0 ? 'bg-surface' : 'bg-[#FAFAF8]'}
                  `}
                >
                  <td className="block sm:table-cell px-4 sm:px-5 lg:px-6 pt-5 pb-1 sm:py-4 font-medium text-primary break-words">
                    <span className="block sm:hidden text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted mb-1">ROI Driver</span>
                    {row.driver}
                  </td>
                  <td className="block sm:table-cell px-4 sm:px-5 lg:px-6 py-1 sm:py-4 text-accent-green font-semibold break-words">
                    <span className="block sm:hidden text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted mb-1">Impact</span>
                    {row.impact}
                  </td>
                  <td className="block md:table-cell px-4 sm:px-5 lg:px-6 pt-1 pb-5 sm:py-4 text-secondary break-words">
                    <span className="block md:hidden text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted mb-1">Notes</span>
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
