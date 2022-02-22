import Link from "next/link"

export default function SocialMenu ({ profile }) {
  const { email, linkedin, github, instagram } = profile
  return (
    <div className='flex h-16 lg:h-screen bg-arian-negro border-r border-arian-grisclaro box-border'>
      <div className='flex lg:block h-4/4 w-full lg:w-20 lg:hover:w-24 lg:ease-in lg:duration-300'>
        {/* Download */}
        <Link href="/api/services/cv_pdf" className='flex w-1/5 lg:h-1/5 lg:w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 text-transparent hover:text-arian-blanco ease-in duration-300'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' width='38' viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'><path d='m537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2-27.7-48-79.4-80.2-138.7-80.2-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1-56 19.7-96.2 73.1-96.2 135.9 0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7-105.4 105.4c-6.2 6.2-16.4 6.2-22.6 0l-105.4-105.4c-10.1-10.1-2.9-27.3 11.3-27.3h65.4v-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z' /></svg>
            <p className='hidden lg:block text-xs mt-1'>Curriculum</p>
          </div>
        </Link>

        {/* Email */}
        <a href={`mailto: ${email}`} className='flex w-1/5 lg:h-1/5 lg:w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 text-transparent hover:text-arian-blanco ease-in duration-300'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='38' xmlns='http://www.w3.org/2000/svg'><path d='m0 0h24v24h-24z' fill='none' /><path d='m12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10zm0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' /></svg>
            <p className='hidden lg:block text-xs mt-1'>Email</p>
          </div>
        </a>

        {/* Linkedin */}
        <a href={linkedin} target='_blank' className='flex w-1/5 lg:h-1/5 lg:w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco' rel='noreferrer'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='49' xmlns='http://www.w3.org/2000/svg'><path d='m8 19h-3v-10h3zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03z' /><ellipse cx='6.5' cy='6.5' rx='1.55' ry='1.5' /></svg>
            <p className='hidden lg:block text-xs mt-1'>LinkedIn</p>
          </div>
        </a>

        {/* Github */}
        <a href={github} target='_blank' className='flex w-1/5 lg:h-1/5 lg:w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco' rel='noreferrer'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' viewBox='0 0 24 24' width='42' xmlns='http://www.w3.org/2000/svg'><path d='m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86 0-1.69-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10-10z' /></svg>
            <p className='hidden lg:block text-xs mt-1'>Github</p>
          </div>
        </a>

        {/* Instagram */}
        <a href={instagram} target='_blank' className='flex w-1/5 lg:h-1/5 lg:w-full justify-center items-center cursor-pointer fill-arian-grisclaro hover:fill-arian-blanco2 ease-in duration-300 text-transparent hover:text-arian-blanco' rel='noreferrer'>
          <div className='w-full text-center justify-center'>
            <svg className='inline-block' width='34' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z' /></svg>
            <p className='hidden lg:block text-xs mt-1'>Instagram</p>
          </div>
        </a>
      </div>
    </div>
  )
}
