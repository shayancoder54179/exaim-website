import Image from 'next/image'

const schools = [
  { name: 'Harrow', src: '/companies/Harrow_Crest.svg (1).png' },
  { name: 'Stowe School', src: '/companies/Arms_of_Stowe_School.svg (1).png' },
  { name: 'UCS Hampstead', src: '/companies/UCS_RGB (1).png' },
  { name: 'Tanglin Trust', src: '/companies/download.jpg' },
  { name: 'Improve ME Institute', src: '/companies/logo-370x90-1.png' },
  { name: 'Batley Girls', src: '/companies/logo-137424 (1).png' },
]

// Repeat enough times to fill the screen with no gaps
const repeated = [...schools, ...schools, ...schools, ...schools]

export default function SocialProofMarquee() {
  return (
    <section className="py-10 border-y border-brand-border/50 overflow-hidden">
      <p className="text-center text-sm text-brand-muted mb-6">
        Trusted by students at leading schools
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--brand-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--brand-bg)] to-transparent z-10" />

        {/*
          Two identical strips side by side. The first translates from 0 to -100%,
          the second starts at 100% and follows. This creates an infinite seamless loop.
        */}
        <div className="flex">
          <div className="animate-marquee flex shrink-0">
            {repeated.map((school, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 mx-5 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-12">
                  <Image
                    src={school.src}
                    alt={school.name}
                    width={140}
                    height={44}
                    className="object-contain h-8 w-auto max-w-[120px]"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0" aria-hidden>
            {repeated.map((school, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 mx-5 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-12">
                  <Image
                    src={school.src}
                    alt={school.name}
                    width={140}
                    height={44}
                    className="object-contain h-8 w-auto max-w-[120px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
