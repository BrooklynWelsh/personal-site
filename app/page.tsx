import Image from 'next/image'
import resumeSections from '../public/resume.json'
import fs, { PathLike } from 'fs'

interface iconOptions {
  filePath: string,
  altText: string,
  width: number,
  rounded: boolean
}

interface resumeEntry {
  image?: PathLike
  header: string
  subHeader?: string
  description?: string
  keypoints?: string[]
  dates?: string
}

interface resumeSection {
  header: string
  entries: resumeEntry[]
}

function checkImageFile(filePath: string) {
  return fs.existsSync(filePath)
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
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Full Stack Software Engineer</h1>
          <p className="py-6">Currently working at CACI International building web apps with JavaScript/TypeScript, NodeJS, PostgreSQL and many other web technologies.</p>
        </div>
      </div>
    </div>
  )
}

function Resume() {
  const sections = []
  for (const section of resumeSections) {
    sections.push(ResumeSection({section}))
  }
  return (
    <div>
      <ul>{sections}</ul>
    </div>
  )
}

function ResumeSection ({section}: {section: resumeSection}) {
  const entries = []
  for (const entry of section.entries) {
    if (entry.image && !fs.existsSync(entry.image)) entry.image = undefined
    entries.push(ResumeEntry({entry}))
  }
  return (
    <section key={section.header}>
      <h2 className="mb-4">{section.header}</h2>
      <ul>{entries}</ul>
    </section>
  )
}

function ResumeEntry ({ entry }: {entry: resumeEntry}) {
  const points = []
  if (entry.keypoints) {
    for (const point of entry.keypoints) {
      points?.push(KeyPoint({point}))
    }
  }
  return (
    <li className="section" key={entry.header}>
      <div className="header">
        {
        entry.image ? 
        <a>
          <Image fill={true} alt={entry.header} src={entry.image || ''}/>
        </a> : 
        null
        }
        <div>{entry.header}</div>
        <div>{entry.subHeader}</div>
      </div>
      <ul className="points">{points}</ul>
      <p className="dates">{entry.dates}</p>
    </li>
  )
}

function KeyPoint({ point }: {point: string}) {
  return (
    <li className="my-8 before:bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23c00' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E')]before:content-['HEHEHEHE'] before:bg-[#c00] before:absolute before:top-0 before:left-0 before:width-3px after:content-[''] after:absolute after:left-0 after:top-2px after:h-12px after:w-12px">{point}</li>
  )
}

export default function Home() {
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

      <Resume />
    </main>
  )
}
