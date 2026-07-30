import ScrollReveal from './ScrollReveal'

const PageHero = ({ tag, title, subtitle }) => {
  return (
    <section className="relative bg-[#0E4288] min-h-[50vh] flex items-center
      overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px]
        rounded-full bg-blue/15 pointer-events-none" />
      <div className="absolute bottom-0 left-[40px] w-[200px] h-[200px]
        rounded-full bg-gold/10 pointer-events-none" />

      <div className="container-max section-padding py-20 w-full">
        <ScrollReveal delay={0}>
          {tag && (
            <p className="text-xs font-semibold tracking-[0.15em] uppercase
              text-gold mb-4">
              {tag}
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight
            max-w-2xl mb-6">
            {title}
          </h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={0.2}>
            <p className="text-[#D6EAF8] text-lg max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

export default PageHero