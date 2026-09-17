import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import { heroPortrait } from '../data/projects'

const navLinks = ['About', 'Price', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} duration={0.7}>
        <div className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m kshitij
        </h1>
      </FadeIn>

      <div className="relative flex-1">
        <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:w-[360px] sm:translate-y-0 sm:bottom-0 md:w-[440px] lg:w-[520px]">
          <FadeIn delay={0.6} y={30} duration={0.7}>
            <Magnet padding={150} strength={3}>
              <img
                src={heroPortrait}
                alt="Kshitij, 3D creator portrait"
                className="w-full select-none"
                draggable={false}
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      <div className="flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20} className="px-6 md:px-10">
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="px-6 md:px-10">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
