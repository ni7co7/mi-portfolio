'use client';
import { useLanguage } from '@/context/LanguageContext';

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { myCustomFont } from '../app/fontSquare';

export default function Navbar() {

   const { t } = useLanguage();
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}

     <h1 className="flex items-center space-x-2 font-bold ">
       <span className={`text-2xl ${myCustomFont.className}`}
       >
         LOBO 
       </span>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-notion"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" /><path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997z" /><path d="M4.5 5.5l2.5 2.5" /><path d="M20 7l-13 1v12.5" /></svg>

       <span className="text-1xl italic" style={{
         textShadow: `
           15px 1px 3px #b28ddb,
           2px 2px 3px #9b79d1,
           3px 3px 3px #8445b9,
           4px 4px 3px #6a2598`
       }}>
         loboDev
       </span>
     </h1>
{/*        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-favicon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4 -4v-8a4 4 0 0 1 4 -4zm-13 5a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m5 0a3 3 0 0 0 0 6a1 1 0 0 0 .117 -1.993l-.117 -.007a1 1 0 0 1 -.117 -1.993l.117 -.007a1 1 0 0 0 0 -2m5 0a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3" /><path d="M16 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" /></svg>
 */}        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={`text-3xl ${myCustomFont.className}`}>{t.nav.home }</Link>
          </li>
          <li>
            <Link href="/proyects" className="text-2xl hover:text-gray-200 transition">{t.nav.projects}</Link>
          </li>
          <li>
            <Link href="/technologies" className="text-2xl hover:text-gray-200 transition">{t.nav.tech}</Link>
          </li>
          <li>
            <Link href="/about" className="text-2xl hover:text-gray-200 transition">{t.nav.about}</Link>
          </li>
        </ul>

        {/* Iconos sociales */}
        <div className="flex space-x-4 text-6xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}












