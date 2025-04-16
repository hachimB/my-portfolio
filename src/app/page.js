import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f0f0f0] p-6">

      {/* Hero Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Hachim Boubacar</h1>
          <p className="mt-4 text-lg text-gray-400">
            Backend Developer | Software Engineering Student | Python Enthusiast
          </p>
        </section>
      </Fade>

      {/* About Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-gray-300">
            I am a motivated software engineering student with a passion for backend development and networking.
            With hands-on experience in Python, C, and JavaScript, I thrive on solving complex problems and building useful tools.
          </p>
        </section>
      </Fade>

      {/* Education Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700">
          <h2 className="text-3xl font-semibold">Education</h2>
          <ul className="mt-4 text-gray-300 space-y-4">
            <li>🎓 <strong>Master’s Degree in Software Engineering</strong> — SUP MTI, Rabat (2024 - Ongoing)</li>
            <li>🎓 <strong>Bachelor’s in Computer Systems Engineering</strong> — SUP MTI, Morocco (2021 - 2024)</li>
            <li>🎓 <strong>ALX Software Engineering Program</strong> — (2023 - 2024)</li>
            <li>🎓 <strong>High School Diploma</strong> — CSP TAYAMANA, Niger (2018 - 2021)</li>
          </ul>
        </section>
      </Fade>

      {/* Skills Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="mt-4 text-gray-300 space-y-2">
            <p><strong>Languages:</strong> Python, C, JavaScript</p>
            <p><strong>Web:</strong> HTML, CSS, Next.js, Flask</p>
            <p><strong>Tools:</strong> Git, GitHub, VS Code, Linux</p>
            <p><strong>Databases:</strong> MySQL</p>
            <p><strong>Networking:</strong> IP Addressing, basic Routing, OSI Model, TCP/UDP</p>
            <p><strong>Soft Skills:</strong> Problem Solving, Teamwork, Adaptability</p>
          </div>
        </section>
      </Fade>

      {/* Projects Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-gray-400">CheckStudents - A mobile app for student attendance management.</p>
              <a href="https://github.com/hachimB/checkStudents" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
            <div>
              <p className="text-gray-400">tictoe - game.</p>
              <a href="https://tic-toe-game-k0z2w3gjk-bookspheres-projects.vercel.app/" target="_blank" className="text-blue-400 hover:underline">View here</a>
            </div>
            <div>
              <p className="text-gray-400">SimpleShell - A simple UNIX command-line shell built from scratch</p>
              <a href="https://github.com/hachimB/simple_shell" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
            <div>
              <p className="text-gray-400">Airbnb Clone - A clone of the popular Airbnb app (backend focused).</p>
              <a href="https://github.com/hachimB/airbnb_clone" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
            <div>
              <p className="text-gray-400">...and many more from ALX and Boot.dev</p>
              <a href="https://github.com/hachimB" className="text-blue-400 hover:underline">Explore GitHub</a>
            </div>
          </div>
        </section>
      </Fade>

      {/* Certifications Section */}
      <Slide direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700">
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image src="/ALX_certificate.png" alt="ALX Certificate" width={500} height={350} className="rounded-lg shadow-lg" />
            <Image src="/bootdev_certificate_linux.png" alt="Linux Certificate" width={500} height={350} className="rounded-lg shadow-lg" />
            <Image src="/bootdev_certificate_git1.png" alt="Git Certificate" width={500} height={350} className="rounded-lg shadow-lg" />
            <Image src="/bootdev_certificate_python1.png" alt="Python Certificate" width={500} height={350} className="rounded-lg shadow-lg" />
            <Image src="/bootdev_certificate_python_OOP.png" alt="OOP Certificate" width={500} height={350} className="rounded-lg shadow-lg" />
            <Image src="/bootdev_certificate_Functional_Programming.png" alt="Functional Programming Cert" width={500} height={350} className="rounded-lg shadow-lg" />
          </div>
        </section>
      </Slide>

      {/* Contact Section */}
      <Fade direction="up" triggerOnce>
        <section className="max-w-3xl mx-auto py-10 border-t border-gray-700 text-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-400">
            Email: <a href="mailto:boubacarhachim@gmail.com" target="_blank" className="text-blue-400 hover:underline">boubacarhachim@gmail.com</a>
          </p>
          <p className="mt-4 text-gray-400">
            Linkedin: <a href="https://www.linkedin.com/in/hachim-boubacar-475831254/" target="_blank" className="text-blue-400 hover:underline">Let&apos;s Connect</a>
          </p>
          <p className="mt-4 text-gray-400">
            GitHub: <a href="https://github.com/hachimB" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
          </p>
          <p className="text-gray-400">
            WhatsApp: <a href="https://wa.me/22790972882" target="_blank" className="text-green-400 hover:underline">Chat on WhatsApp</a>
          </p>
        </section>
      </Fade>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hachim Boubacar. All rights reserved.
      </footer>
    </div>
  );
}
