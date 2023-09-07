'use client'
import Image from 'next/image'
import { Avatar } from 'flowbite-react'

interface iconOptions {
  filePath: string,
  altText: string,
  width: number,
  rounded: boolean
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
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Full Stack Software Engineer</h1>
          <p className="py-6">Currently working at CACI International building web apps with JavaScript/TypeScript, NodeJS, PostgreSQL and many other web technologies.</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 dark:bg-zinc-950 dark:text-gray-400">
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
    </main>
  )
}
