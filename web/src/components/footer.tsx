import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

function Footer (): JSX.Element {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-3 bg-white border-t border-gray-200 shadow flex justify-around items-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/thales-sz/" className="hover:underline">Thales Chagas™</a>
        </span>
        <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.linkedin.com/in/thales-sz/" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6 text-center flex justify-center flex-col">
                  <BsLinkedin size={30} className='ml-3'/>
                  Linkedin
                </a>
            </li>
            <li>
                <a href="https://github.com/thales-sz" className="mr-4 hover:underline md:mr-6" target='_blank' rel='noreferrer'>
                  <FaGithubSquare size={35} className='ml-1'/>
                  GitHub
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
