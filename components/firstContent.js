import React from "react";
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
      {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 9,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 10,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 11,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 12,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 13,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 14,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 15,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 16,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      
    // More products...
  ]

function FirstContent() {
    return (
        // <div className="bg-steal-100 mb-4 z-0" >

        //     <div className="flex flex-wrap justify-center items-center h-screen p-4" >

        //         <div class="m-5 flex flex-wrap place-items-center h-screen ">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class="m-5 flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class="m-5 flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class="m-5 flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>



        //         <div class=" m-5 flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class="flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class=" m-5 flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         <div class="flex flex-wrap place-items-center h-screen">

        //             <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        //                 <a href="#" class="w-full block h-full">
        //                     <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover" />
        //                     <div class="bg-white w-full p-4">
        //                         <p class="text-indigo-500 text-2xl font-medium">
        //                             Should You Get Online Education?
        //                         </p>
        //                         <p class="text-gray-800 text-sm font-medium mb-2">
        //                             A comprehensive guide about online education.
        //                         </p>
        //                         <p class="text-gray-600 font-light text-md">
        //                             It is difficult to believe that we have become so used to having instant access to information at...
        //                             <a class="inline-flex text-indigo-500" href="#">Read More</a>
        //                         </p>
        //                         <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #online
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #internet
        //                             </span>
        //                             <span class="m-1 px-2 py-1 rounded bg-indigo-500">
        //                                 #education
        //                             </span>
        //                         </div>
        //                         <div class="flex items-center mt-2">
        //                             <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

        //                             <div class="pl-3">
        //                                 <div class="font-medium">
        //                                     Jean Marc
        //                                 </div>
        //                                 <div class="text-gray-600 text-sm">
        //                                     CTO of Supercars
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </a>
        //             </div>

        //         </div>

        //         {/* <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        //             <div>
        //                 <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
        //                     <img class="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
        //                 </a>
        //             </div>
        //         </div> */}



        //     </div>

        // </div>
  
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Produits disponible</h2>
          <h2 className="text-black sr-only">Produits disponible</h2>
  
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
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}

          </div>
        </div>
      </div>
   
  
    );
}

export default FirstContent;

