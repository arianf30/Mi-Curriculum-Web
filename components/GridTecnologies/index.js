import Image from "next/image";

export default function GridTecnologies () {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-8 mb-10">

      <a href="https://es.reactjs.org/" target="_blank" className="flex items-center w-full h-24 border border-arian-grisclaro2/[.15] rounded-lg bg-arian-grisoscuro hover:border-arian-grisclaro2/[.38] cursor-pointer p-5 transition duration-150 ease-out drop-shadow-xl" rel="noreferrer">
        <Image className="object-contain h-full w-full" src='/images/tecnologies/react.svg' layout='fill' alt="React Js" />
      </a>

      <a href="https://nextjs.org/" target="_blank" className="flex items-center w-full h-24 border border-arian-grisclaro2/[.15] rounded-lg bg-arian-grisoscuro hover:border-arian-grisclaro2/[.38] cursor-pointer p-5 transition duration-150 ease-out drop-shadow-xl" rel="noreferrer">
        <Image className="object-contain h-full w-full" src='/images/tecnologies/nextjs.svg' layout='fill' alt="Next.js" />
      </a>

      <a href="https://www.mongodb.com/" target="_blank" className="flex items-center w-full h-24 border border-arian-grisclaro2/[.15] rounded-lg bg-arian-grisoscuro hover:border-arian-grisclaro2/[.38] cursor-pointer p-5 transition duration-150 ease-out drop-shadow-xl" rel="noreferrer">
        <Image className="object-contain h-full w-full" src='/images/tecnologies/mongodb.svg' layout='fill' alt="MongoDB" />
      </a>

      <a href="https://tailwindcss.com/" target="_blank" className="flex items-center w-full h-24 border border-arian-grisclaro2/[.15] rounded-lg bg-arian-grisoscuro hover:border-arian-grisclaro2/[.38] cursor-pointer p-5 transition duration-150 ease-out drop-shadow-xl" rel="noreferrer">
        <Image className="object-contain h-full w-full" src='/images/tecnologies/tailwindcss.svg' layout='fill' alt="Tailwind CSS" />
      </a>

      <a href="https://vercel.com/" target="_blank" className="flex items-center w-full h-24 border border-arian-grisclaro2/[.15] rounded-lg bg-arian-grisoscuro hover:border-arian-grisclaro2/[.38] cursor-pointer p-5 transition duration-150 ease-out drop-shadow-xl" rel="noreferrer">
        <Image className="object-contain h-full w-full" src='/images/tecnologies/vercel.svg' layout='fill' alt="Vercel" />
      </a>

    </div>
  )
}
