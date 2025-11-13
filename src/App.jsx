import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Star, Sparkles, Send, CheckCircle2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const colors = {
  primary: '#0F172A', // Midnight Blue
  accent: '#00C6FF', // Cyan
  secondary: '#1E293B', // Slate
  text: '#F1F5F9', // Off-white
}

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
)

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/60 border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="font-bold tracking-tight text-xl">Shilog</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#tech" className="hover:text-white transition">Tech</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
              <Sparkles className="h-4 w-4 text-cyan-400" /> Get a Quote
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {['About','Services','Projects','Tech','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block rounded-lg px-3 py-2 bg-white/5 border border-white/10 text-white/80 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/60 to-[#0F172A]" />
      <Container>
        <div className="relative z-10 pt-24 md:pt-28 lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Building the Web of Tomorrow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-white/80"
          >
            We build scalable full-stack solutions for the modern web.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-[#0F172A] shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition">
              Get Started <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
              View Projects
            </a>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/70">
            {[{k:'Projects',v:'50+'},{k:'Years',v:'5'},{k:'Clients',v:'30+'},{k:'Uptime',v:'99.9%'}].map((it) => (
              <div key={it.k} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <div className="text-2xl font-extrabold text-white">{it.v}</div>
                <div className="text-xs uppercase tracking-wider">{it.k}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who we are</h2>
            <p className="mt-4 text-white/80">Shilog is a full‑stack development partner for startups and enterprises. We combine world‑class engineering with product thinking to ship reliable, scalable software.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              {[
                'Product-driven engineering culture',
                'Design systems with accessibility at the core',
                'Performance, security, and observability by default',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Strategy','Design','Engineering','Delivery'].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/10 backdrop-blur"
              >
                <div className="text-4xl font-extrabold text-white">{['50+','120+','20k+','100%'][i]}</div>
                <div className="text-sm text-white/70">{['Projects','Screens','Commits','Delivery'][i]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

const services = [
  { title: 'Web App Development', desc: 'Modern, scalable, and performant web apps with delightful UX.' },
  { title: 'Mobile App Development', desc: 'iOS and Android apps using React Native and native stacks.' },
  { title: 'Cloud & DevOps Solutions', desc: 'CI/CD, containers, serverless, and infrastructure-as-code.' },
  { title: 'UI/UX Design', desc: 'Design systems, prototyping, and user-centered interfaces.' },
  { title: 'AI & Automation Integration', desc: 'Embed AI into your product workflows and operations.' },
  { title: 'Consulting & Audits', desc: 'Architecture reviews, performance, and security audits.' },
]

function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
        <p className="mt-3 text-white/80">Full‑stack capabilities tailored to your roadmap.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{s.title}</h3>
                <Star className="h-5 w-5 text-cyan-400 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-white/80 text-sm">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Projects() {
  const items = [
    { title: 'Fintech Dashboard', tech: ['React','Node','Postgres'] },
    { title: 'E‑commerce Platform', tech: ['Next.js','Stripe','Prisma'] },
    { title: 'AI Ops Assistant', tech: ['Python','FastAPI','OpenAI'] },
    { title: 'Logistics Suite', tech: ['React','Go','gRPC'] },
    { title: 'Mobile Banking', tech: ['RN','TypeScript','GraphQL'] },
    { title: 'Cloud Analytics', tech: ['AWS','Athena','S3'] },
  ]
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured work</h2>
            <p className="mt-3 text-white/80">Selected projects from our portfolio.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">Request a case study</a>
        </div>
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"><div className="grid gap-6 break-inside-avoid">
          {items.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur break-inside-avoid"
            >
              <div className="aspect-video rounded-xl bg-[#1E293B]/60 border border-white/10" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-white/70">{p.tech.join(' · ')}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-cyan-400">Details <ArrowRight className="h-4 w-4" /></a>
              </div>
            </motion.div>
          ))}
        </div></div>
      </Container>
    </section>
  )
}

function Tech() {
  const tech = ['React','Next.js','Node.js','Python','FastAPI','Postgres','MongoDB','AWS','Docker','Kubernetes']
  return (
    <section id="tech" className="py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our stack</h2>
        <p className="mt-3 text-white/80">Battle‑tested technologies we use to ship fast and scale.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tech.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm hover:bg-white/10"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Ava Thompson', role: 'CTO, NovaBank', text: 'Shilog delivered ahead of schedule with flawless execution.', rating: 5 },
    { name: 'Daniel Park', role: 'Founder, Shiply', text: 'World‑class engineering meets thoughtful design.', rating: 5 },
    { name: 'Maya Chen', role: 'PM, CloudScale', text: 'A true partner for scaling our platform.', rating: 5 },
  ]
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What clients say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/70">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{t.text}”</p>
              <div className="mt-4 flex">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build together</h2>
            <p className="mt-3 text-white/80">Tell us about your goals and we’ll propose a roadmap within 48 hours.</p>
            <div className="mt-6 flex items-center gap-3 text-white/70">
              <Send className="h-5 w-5 text-cyan-400" /> hello@shilog.dev
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required placeholder="Your name" className="mt-1 w-full rounded-lg bg-[#0F172A] px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required placeholder="you@company.com" className="mt-1 w-full rounded-lg bg-[#0F172A] px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="4" required placeholder="Tell us about your project..." className="mt-1 w-full rounded-lg bg-[#0F172A] px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-[#0F172A] hover:bg-cyan-400 transition">
                Send Request <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span>© {new Date().getFullYear()} Shilog. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Tech />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
