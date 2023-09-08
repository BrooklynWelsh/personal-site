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
    <li key={section.header} className="my-12 px-8 md:px-20">
      <h2 className="mb-10 text-xl md:text-2xl highlight">{section.header}</h2>
      <ul className="section relative border-l border-gray-200 dark:border-gray-700">{entries}</ul>
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
    <li className="mb-10 ml-6">
      <div className="flex items-center">
        <span className={`relative shrink-0 w-28 h-28 bg-${entry.bgColor} rounded-full left-[-79px] ring-4 ring-white dark:ring-gray-900 dark:bg-${entry.bgColor}`}>
            <a href={entry.link}>
              <Image fill={true} src={entry.image} alt={"Image for " + entry.header} />
            </a>
        </span>
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
    <li className="my-8"><span>{point}</span></li>
  )
}

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-14 p-10 dark:bg-zinc-950 dark:text-gray-400">
      <div className="z-10 m-auto mb-10 flex-nowrap max-w-100 w-full h-15 justify-around font-mono text-sm lg:flex">
        <div className="flex flex-col md:flex-row items-center">
          <ResumeIcon options={{filePath: "/headshot.jpg", altText:"Photo of Brooklyn Welsh", width: 125, rounded: true}}/>
          <div className="sticky p-8 w-auto flex items-center">
            <h1 className="text-3xl w-auto text-center highlight">Brooklyn Welsh</h1>
          </div>
        </div>
        <div className="sticky flex flex-col md:flex-row w-full md:w-3/6 bottom-0 left-0 flex items-center lg:static lg:h-auto lg:bg-none">
          <a
            className="pointer-events-none m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="pointer-events-none m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="pointer-events-none m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackOverflow
          </a>
          <a
            className="pointer-events-none m-1 gap-0 md:gap-8 p-0 md:p-8 lg:pointer-events-auto "
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>

      <Hero />

      <p>Download PDF version of my resume here (not yet implemented)</p>
      <Resume resume={resumeData}/>
    </main>
  )
}
