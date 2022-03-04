import dayjs from 'dayjs'
import Image from 'next/image'

export default function LeftColumn ({ profile, skills }) {
  const dateNow = dayjs(new Date()).locale('es-es').format('DD/MM/YYYY')
  const { email, linkedin, github, instagram, name, lastName, occupation, avatar } = profile
  return (
    <div className='flex-auto w-96 overflow-y-auto relative bg-gradient-to-b from-[#fcfcfc] to-[#d0d0d0] border-r-2 border-arian-blanco scrollbar-thin'>

      <section className='mx-auto rounded-2xl px-8 py-6 text-arian-grisoscuro'>
        <p className='font-mono text-xs font-bold h-0 text-arian-naranja'>
          {dateNow}
        </p>
        <div className='mt-6 mx-auto text-center'>
          <Image src={avatar} className='inline-block rounded-full shadow-md' width={190} height={190} alt='Foto de Arián Fernández' />
        </div>

        <div className='mt-8'>
          <h2 className='flex font-light text-2xl tracking-wide items-stretch'>
            <i><b className='font-bold'>{name} {lastName}</b></i>
          </h2>
        </div>
        <p className='font-semibold tracking-wide mt-2.5 text-arian-azul mb-10'>
          <i>{occupation}</i>
        </p>

        {/* CONTACT ME */}
        <p className='font-mono text-sm font-medium tracking-wide'>
          {/* Line 1 */}
          <font className='text-arian-naranja'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>ContactMe</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
          <br />
          {/* Line 2 */}
          <font className='text-arian-naranja pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
        </p>
        <div className='font-body mt-5 pl-4 text-sm leading-6'>
          <label className="text-xs font-bold">Correo electrónico</label>
          <p className='mb-3'>{email}</p>
          <label className="text-xs font-bold">LinkedIn</label>
          <p className='mb-3'>{linkedin}</p>
          <label className="text-xs font-bold">Github</label>
          <p className='mb-3'>{github}</p>
          <label className="text-xs font-bold">Instagram</label>
          <p className='mb-3'>{instagram}</p>
        </div>
        <p className='font-mono text-sm font-medium tracking-wide mt-5'>
          {/* Line 3 */}
          <font className='text-arian-grisclaro2 pl-4'>)</font>
          <br />
          {/* Line 4 */}
          <font className='text-arian-grisclaro2'>{'}'}</font>
        </p>


        <p className='font-mono text-sm font-medium tracking-wide'>
          {/* Line 1 */}
          <font className='text-arian-naranja'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>Skills</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
          <br />
          {/* Line 2 */}
          <font className='text-arian-naranja pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
        </p>

        <div className='pl-4 pr-8'>
          {skills.map((item, index) => (
            <div key={`skill-${index}`}>
              <div className='flex h-1 w-full bg-arian-negro mt-8 rounded-full'>
                <div style={{ width: `${item.skill} !important` }}>
                  <div className={'h-1 w-full rounded-full bg-gradient-to-r from-arian-amarillo to-arian-verde'} />
                </div>
              </div>
              <div className='mt-3 text-sm'>
                <span className='text-gray-400 font-semibold'>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        <p className='font-mono text-sm font-medium tracking-wide mt-5'>
          {/* Line 3 */}
          <font className='text-arian-grisclaro2 pl-4'>)</font>
          <br />
          {/* Line 4 */}
          <font className='text-arian-grisclaro2'>{'}'}</font>
        </p>

      </section>

    </div>
  )
}
