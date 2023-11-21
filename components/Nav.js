
import React from "react";

//next link
import Link from 'next/link';

// next router 
import { useRouter } from 'next/router';

import { useEffect } from 'react';
// Les syles globaux 

const Nav = () => {
  const router = useRouter();

  return (

    <div>
      <section id="mobile-menu" class="top-68 justify-center absolute hidden  w-full origin-top animate-open-menu z-30 flex-col bg-black text-5xl">
        {/* <!-- <button class="text-8xl self-end px-6">
          &times;
        </button> --> */}

        <nav class="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <a href="#hero" class="w-full text-white text-center py-6 hover-opacity-90">Home</a>
          <a href="#rockets" class="w-full text-white  text-center py-6 hover-opacity-90">Our Rockets</a>
          <a href="#testimonials" class="w-full text-white  text-center py-6 hover-opacity-90">Testimonials</a>
          <a href="#contact" class="w-full text-center text-white py-6 hover-opacity-90">Contact Us</a>
          <a href="#footer" class="w-full text-center text-white  py-6 hover-opacity-90">Legal</a>
        </nav>
      </section>






      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/pro.ico" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dasteen</span>
          </a>

          <button id="hamburger-button" class="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
            {/* <!-- &#9776; --> */}
            <div
              class="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500">
            </div>
          </button>


          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

               Voici le Hamburger  
              <path id="hamburger" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
               Voici le Hamburger  
            </svg>
          </button> */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Acceuil</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A Propos</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  );
};




// const Nav1 = () => {
//   useEffect(() => {
//     const hamburgerButton = document.getElementById('hamburger-button');

//     if (hamburgerButton) {
//       // Vérifiez si l'élément a été trouvé avant d'ajouter l'écouteur d'événements
//       hamburgerButton.addEventListener('click', toggleMobileMenu);
//     }

//     // Nettoyer l'écouteur d'événements lors du démontage du composant
//     return () => {
//       if (hamburgerButton) {
//         hamburgerButton.removeEventListener('click', toggleMobileMenu);
//       }
//     };
//   }, []); // Le tableau de dépendances est vide pour exécuter l'effet une seule fois lors du montage du composant

//   // Le reste de votre composant...

//   return (
//     // JSX de votre composant...
//   );
// };















const Nav3 = () => {
  useEffect(() => {
    const toggleMobileMenu = () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    };

    // Écouteur d'événements pour le bouton hamburger
    const hamburgerButton = document.getElementById('hamburger-button');

    if (hamburgerButton) {
      hamburgerButton.addEventListener('click', toggleMobileMenu);

      // Nettoyer l'écouteur d'événements lors du démontage du composant
      return () => {
        hamburgerButton.removeEventListener('click', toggleMobileMenu);
      };
    }
  }, []);

  // ... rest of your code

  <div>
    <section
      class="top-68 justify-center hidden w-full origin-top animate-open-menu flex-col bg-black text-3xl z-100">
      {/* <!-- <button class="text-8xl self-end px-6">
          &times;
        </button> --> */}

      <nav class="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
        <a href="#hero" class="w-full text-white text-center py-6 hover-opacity-90">Acceuil</a>
        <a href="#rockets" class="w-full text-white  text-center py-6 hover-opacity-90">A Propos</a>
        <a href="#testimonials" class="w-full text-white  text-center py-6 hover-opacity-90">Services</a>
        <a href="#contact" class="w-full text-center text-white py-6 hover-opacity-90">Projets</a>
        <a href="#footer" class="w-full text-center text-white  py-6 hover-opacity-90">Contact</a>
      </nav>
    </section>


    <nav id="mobile-menu" className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/pro.ico" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dasteen</span>
        </a>

        <button id="hamburger-button" class="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
          {/* <!-- &#9776; --> */}
          <div
            class="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500">
          </div>
        </button>

        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

               Voici le Hamburger  
              <path id="hamburger" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
               Voici le Hamburger  
            </svg>
          </button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Acceuil</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A Propos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

};

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  }
  hamburgerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)
}

// document.addEventListener('DOMContentLoaded', initApp)

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}


export default Nav;
