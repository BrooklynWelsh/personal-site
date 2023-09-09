import Image from 'next/image'
import { PathLike } from 'fs'
import resumeData from '../public/resume.json'

interface iconOptions {
  filePath: string,
  altText: string,
  width: number,
  rounded: boolean
}

interface ResumeEntry {
  image?: PathLike
  link?: URL,
  header: string
  subHeader?: string
  description?: string
  keypoints?: string[]
  dates?: string,
  bgColor?: string,
}

interface ResumeSection {
  header: string
  entries: ResumeEntry[]
}

function ResumeIcon({ options }: {options: iconOptions}) {
  return (
    <div className="avatar">
      <div className={"w-max rounded-full h-full"}>
        <Image width={options.width} height={20} alt={options.altText} src={options.filePath} />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="hero highlight">
      <div className="hero-content text-center">
        <div className="max-w-prose">
          <h1 className="text-5xl font-bold">Full Stack Software Engineer</h1>
          <p className="py-6">Currently working at CACI International building web apps with JavaScript/TypeScript, NodeJS, PostgreSQL and many other web technologies.</p>
        </div>
      </div>
    </div>
  )
}

function Resume({ resume }: { resume: ResumeSection[] }) {
  const sections = []
  for (const section of resume) {
    sections.push(ResumeSection({section}))
  }
  return (
    <div>
      <ul>{sections}</ul>
    </div>
  )
}

function ResumeSection ({section}: {section: ResumeSection}) {
  const entries = []
  for (const entry of section.entries) {
    entries.push(ResumeEntry({entry}))
  }
  return (
    <li key={section.header} className="my-12 md:px-20">
      <h2 className="mb-10 text-xl md:text-2xl highlight">{section.header}</h2>
      <ul className="section mx-8 relative border-l border-gray-200 dark:border-gray-700">{entries}</ul>
    </li>
  )
}

function ResumeEntry ({ entry }: {entry: ResumeEntry}) {
  const points = []
  if (entry.keypoints) {
    for (const point of entry.keypoints) {
      points?.push(KeyPoint({point}))
    }
  }
  return (
    <li className="mb-10 md:px-0 ml-6">
      <div className="flex items-center">
        {entry.image ?
          <span className={`relative shrink-0 w-28 h-28 bg-${entry.bgColor} rounded-full left-[-79px] ring-4 ring-white dark:ring-gray-900 dark:bg-${entry.bgColor}`}>
          {
          entry.link && 
            <a href={entry.link.toString()}>
              <Image fill={true} src={entry.image.toString()} alt={"Image for " + entry.header} />
            </a> 
          || 
            <Image fill={true} src={entry.image.toString()} alt={"Image for " + entry.header} />
          }
          </span> : 
          null
        }
        <div className="relative left-[-79px] w-full mx-8">
          <h3 className="mb-1 text-md md:text-xl font-semibold text-gray-900 dark:text-white">{entry.header}</h3>
          <hr className="invisible w-full" />
          <h4 className="block mb-2 text-sm md:text-lg font-normal leading-none text-gray-400 dark:text-gray-500">{entry.subHeader}</h4>
        </div>
      </div>
      {points.length > 0 && <ul>{points}</ul>}
    </li>
  )
}

function KeyPoint({ point }: {point: string}) {
  return (
    <li className="my-8 mx-8"><span>{point}</span></li>
  )
}

function Links({ hamburger }: {hamburger: boolean}) {
  return (
    <>
      <div className={`${hamburger ? 'nav-Menu' : ''} hidden lg:m-0 mt-4 md:sticky md:flex md:flex-row w-full bottom-0 left-0  items-center lg:h-auto lg:bg-none`}>
        <a
          className="pointer-events-none hidden md:block m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
          href="https://github.com/BrooklynWelsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="pointer-events-none hidden md:block m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
          href="https://www.linkedin.com/in/brooklyn-welsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="pointer-events-none hidden md:block m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
          href="mailto:brooklyn_welsh@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </div>
    </>
  )
}

function HamburgerMenu() {
  return (
    <nav className="md:sticky">
      <input type="checkbox" id="nav-Checkbox" className="hidden" aria-label="Navigation" aria-haspopup="true" aria-expanded="false" aria-controls="menu" />
      <label htmlFor="nav-Checkbox" id="nav-Toggle" className="md:hidden cursor-pointer">
			  <svg id="svg-menu" className="w-6 fill-white mt-[0.3rem]" viewBox="0 0 448 512" width="100"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
			  <svg id="svg-close" className="w-6 fill-white hidden" viewBox="0 0 384 512" width="100"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
		  </label>
      <div className="md:hidden">
        <Links hamburger={true}/>
      </div>
      <div className="hidden md:block">
        <Links hamburger={false}/>
      </div>
    </nav>
  )
}

function Nav() {
  return (
    <div className="z-10 m-auto mb-10 flex-nowrap md:flex-wrap md:flex md:flex-col-reverse md:items-center lg:flex-row-reverse lg:flex-nowrap max-w-100 w-full h-15 justify-around font-mono text-sm">
      <HamburgerMenu />
        <div className="flex flex-col md:flex-row items-center align-center justify-center">
          <ResumeIcon options={{filePath: "/headshot.jpg", altText:"Photo of Brooklyn Welsh", width: 125, rounded: true}}/>
          <div className="sticky p-8 w-auto flex items-center whitespace-nowrap">
            <h1 className="text-3xl w-auto text-center highlight">Brooklyn Welsh</h1>
          </div>
        </div>
    </div>
  )
}

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 dark:bg-stone-950 dark:text-gray-400">
      <Nav/>
      <Hero />

      <a href="/resume.pdf" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
        Download Resume
      </a>
      <Resume resume={resumeData}/>
    </main>
  )
}
