import React from "react";
const products = [
  {
    id: 1,
    name: 'Site E-com',
    href: '',

    imageSrc: '/Images_Projects/Project1.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Site Marketing',
    href: '',

    imageSrc: '/Images_Projects/Project2.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Portfolio Pro',
    href: '',

    imageSrc: '/Images_Projects/Project3.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Site de Restauration',
    href: '',

    imageSrc: '/Images_Projects/Project4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Site Branding',
    href: '',

    imageSrc: '/Images_Projects/Project5.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Site Agence Marketing',
    href: '',

    imageSrc: '/Images_Projects/Project6.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Site Produit cosmetic',
    href: '',

    imageSrc: '/Images_Projects/Project7.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Design',
    href: '',

    imageSrc: '/Images_Projects/Project8.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 9,
    name: 'Site Voyage',
    href: '',

    imageSrc: '/Images_Projects/Project9.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 10,
    name: 'Portfolio Photograph',
    href: '',

    imageSrc: '/Images_Projects/Project10.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 11,
    name: 'Ecom Branding',
    href: '',

    imageSrc: '/Images_Projects/Project11.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 12,
    name: 'Site Ecom',
    href: '',

    imageSrc: '/Images_Projects/Project12.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 13,
    name: 'Site Agence Immobilière',
    href: '',

    imageSrc: '/Images_Projects/Project13.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 14,
    name: 'Front End Design minimaliste',
    href: '',

    imageSrc: '/Images_Projects/Project14.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 15,
    name: 'Front End Design',
    href: '',

    imageSrc: '/Images_Projects/Project15.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 16,
    name: 'Portfolio Agence',
    href: '',

    imageSrc: '/Images_Projects/Project16.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

]

function FirstContent() {
  return (




    <div id="projets" className="bg-white">
      <h2 className="text-4xl mx-auto text-center font-bold">Projets Réalisés</h2>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 font-bold text-sm text-black-700">{product.name}</h3>

              <div href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100     bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <p className="font-bold"> Voir le projet  </p>
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
              </div>
            </a>
          ))}


        </div>
        <br />
        <div class="flex items-center justify-center">
          <a href="#" className="inline-flex items-center justify-center mx-auto px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Explorez plus
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>

      </div>
    </div >

  );
}

export default FirstContent;