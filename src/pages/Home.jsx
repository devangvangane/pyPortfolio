import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { TbBrandPython, TbBrandReactNative } from 'react-icons/tb'
import { SiOpenai, SiTensorflow, SiDocker, SiClaude, SiLanggraph } from 'react-icons/si'

const expertise = [
  {
    title: 'LLM Engineering',
    description: 'Designing prompt workflows, fine-tuning patterns, and production prompts for generative AI systems.',
    icon: <SiOpenai className="h-6 w-6 text-sky-300" />,
  },
  {
    title: 'RAG & Retrieval',
    description: 'Building retrieval-augmented pipelines with document search, embeddings and knowledge-grounded agents.',
    icon: <TbBrandPython className="h-6 w-6 text-emerald-300" />,
  },
  {
    title: 'Agent Systems',
    description: 'Orchestrating AI workflows, multi-agent automation, and decision support systems.',
    icon: <SiTensorflow className="h-6 w-6 text-violet-300" />,
  },
  {
    title: 'Full-Stack AI Apps',
    description: 'Deploying scalable React frontends, Node APIs, and cloud-ready backend services for AI products.',
    icon: <SiDocker className="h-6 w-6 text-cyan-300" />,
  },
]

const projects = [
  {
    title: 'Conversation Agent Studio',
    description: 'A conversational AI interface for multi-turn tasks, retrieval, and structured prompt tooling.',
    stack: 'OpenAI, LangChain, React, FastAPI, PostgreSQL',
    github: 'https://github.com/devangvangane',
    demo: '#contact',
  },
  {
    title: 'RAG Knowledge Portal',
    description: 'A knowledge retrieval platform with text search, embeddings and secure data access.',
    stack: 'Python, Vector DB, LLMs, React',
    github: 'https://github.com/devangvangane',
    demo: '#contact',
  },
  {
    title: 'AI Automation Dashboard',
    description: 'Agent-driven automation for task orchestration, data workflows and intelligent monitoring.',
    stack: 'Node, React, Docker, Cloud Functions',
    github: 'https://github.com/devangvangane',
    demo: '#contact',
  },
]

const videos = [
  {
    title: 'AI Portfolio Walkthrough',
    description: 'A tour of my portfolio architecture, design, and AI-driven project highlights.',
    videoUrl: 'https://youtube.com/@devangvangane?feature=shared',
    tag: 'Featured',
  },
  {
    title: 'React + AI Build',
    description: 'Step-by-step guide to building an AI-enabled React experience with modern styling.',
    videoUrl: 'https://youtube.com/@devangvangane?feature=shared',
    tag: 'Tutorial',
  },
  {
    title: 'Machine Learning Concepts',
    description: 'Simple explanations of ML concepts, model deployment, and project workflows.',
    videoUrl: 'https://youtube.com/@devangvangane?feature=shared',
    tag: 'Learning',
  },
]

const timeline = [
  {
    period: 'Present',
    title: 'AI Engineer / GenAI Developer',
    company: 'Vivansh Infotech',
    details: 'Developed AI-first applications with LLM workflows, retrieval systems, and full-stack integrations.',
  },
 
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-slate-100">
      <header className="relative overflow-hidden border-b border-slate-800/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">AI Engineer — GenAI Developer</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building intelligent systems with AI.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I help bridge research-grade AI and production software with robust LLM workflows, RAG systems,
              automation agents, and full-stack product delivery.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400">
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-slate-300">
              <a href="https://github.com/devangvangane" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
                <AiFillGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/devang-vangane-330916257" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <AiFillLinkedin className="h-6 w-6" />
              </a>
              <a href="mailto:devangvangane9@gmail.com" aria-label="Email" className="transition hover:text-white">
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-24 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="overflow-hidden rounded-5 border border-slate-700/80 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
              <img src="/devangprofile.jpg" alt="Devang Vangane" className="h-[560px] w-full object-cover object-top sm:h-[580px]" />
            </div>
          </motion.div>
        </div>
      </header>

      <main className="space-y-24 px-6 py-16 lg:px-8">
        <section id="projects" className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured AI Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Selected work in generative AI.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Placeholder case studies adapted from existing portfolio direction and AI project strategy. Replace with your strongest work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20"
              >
                <div className="flex items-center gap-3 text-sky-300">
                  <div className="h-10 w-10 rounded-2xl bg-sky-500/10 ring-1 ring-sky-400/20" />
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-500">AI Stack</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.stack}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-white">
                    GitHub
                  </a>
                  <a href={project.demo} className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                    Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">YouTube Videos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Futuristic tutorials and AI walkthroughs.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Explore my latest video content with an immersive card layout and direct YouTube links for each tutorial.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <motion.a
                key={video.title}
                href={video.videoUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group transform rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-900/95"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 ring-1 ring-sky-400/20">
                      <AiFillYoutube className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-sky-300">{video.tag}</p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{video.title}</h3>
                    </div>
                  </div>
                  <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 transition group-hover:bg-sky-500/15">
                    View
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">{video.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">AI Expertise</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Systems, agents, and product-ready AI.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                I focus on building AI systems that merge modern UX with high-quality data pipelines, prompt orchestration, and cloud scalability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6"
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experience</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Career timeline</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              A concise experience layout that highlights AI engineering growth, product delivery, and technical leadership.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 xl:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{item.period}</p>
                  <p className="text-sm text-slate-400">{item.company}</p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="tech" className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Technical stack</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Tools and platforms I use.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                The stack blends AI, modern frontend, reliable backend, and deployment tooling for production-ready AI apps.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'React', icon: <TbBrandReactNative className="h-6 w-6" /> },
                { label: 'Python', icon: <TbBrandPython className="h-6 w-6" /> },
                { label: 'OpenAI', icon: <SiOpenai className="h-6 w-6" /> },
                { label: 'Claude', icon: <SiClaude className="h-6 w-6" /> },
                { label: 'Docker', icon: <SiDocker className="h-6 w-6" /> },
                { label: 'LangGraph', icon: <SiLanggraph className="h-6 w-6 rounded-full bg-slate-600/80" /> },
              ].map((tool) => (
                <div key={tool.label} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 px-5 py-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3 text-sky-300">{tool.icon}<span className="font-medium text-white">{tool.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Let&apos;s build your next AI product.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Reach out with project ideas, collaborations, or AI engineering roles. I respond quickly to meaningful AI work.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <FiMail className="h-5 w-5 text-sky-400" />
                  <span>devangvangane9@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <AiFillGithub className="h-5 w-5 text-sky-400" />
                  <a href="https://github.com/devangvangane" target="_blank" rel="noreferrer" className="text-slate-100 transition hover:text-white">github.com/devangvangane</a>
                </div>
                <div className="flex items-center gap-3">
                  <AiFillLinkedin className="h-5 w-5 text-sky-400" />
                  <a href="https://www.linkedin.com/in/devang-vangane-330916257" target="_blank" rel="noreferrer" className="text-slate-100 transition hover:text-white">linkedin.com/in/devang-vangane-330916257</a>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-950">
                <img src="/devangprofile.jpg" alt="Devang profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
