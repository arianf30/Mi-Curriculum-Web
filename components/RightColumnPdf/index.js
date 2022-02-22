import useTimeAgo from '../../hooks/useTimeAgo'

export default function RightColumn ({ profile }) {
  const { about, experience, cvInfo } = profile
  return (
    <div className='flex-auto p-8 bg-white text-arian-grisoscuro max-h-max md:max-h-screen md:overflow-y-auto border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-scroll scrollbar-track-arian-grisoscuro2'>

      {/* Lines - imports */}
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-naranja'>import</font> <font className='text-arian-rosa'>AboutUs</font> <font className='text-arian-naranja'>from</font> <font className='text-arian-verde'>&#39;./components/AboutUs&#39;</font></p>
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-naranja'>import</font> <font className='text-arian-rosa'>Experience</font> <font className='text-arian-naranja'>from</font> <font className='text-arian-verde'>&#39;./components/Experience&#39;</font></p>
      <p className='font-mono text-sm font-medium tracking-wide'><font className='text-arian-naranja'>import</font> <font className='text-arian-rosa'>ThisApp</font> <font className='text-arian-naranja'>from</font> <font className='text-arian-verde'>&#39;./components/ThisApp&#39;</font></p>
      <br />

      {/* Line - function App */}
      <p className='font-mono text-sm font-medium tracking-wide'>
        <font className='text-arian-naranja'>export default</font> <font className='text-arian-celeste'><i>function</i></font> <font className='text-arian-azul'>App</font> <font className='text-arian-grisclaro2'>() {'{'}</font>
        <br />
        <font className='text-arian-naranja pl-4'>return</font> <font className='text-arian-grisclaro2'>(</font>
      </p>

      <br />
      {/* Line - Component AboutUs */}
      <p className='font-mono text-sm font-medium tracking-wide xl:pl-8'>
        <font className='text-arian-azul'>&#60;AboutUs</font> <font className='text-arian-naranja'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>&#34;Acerca de mi&#34;</font> <font className='text-arian-azul'>/&#62;</font>
      </p>

      <br />
      {/* About Me */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        {about.map((p, index) => (
          <p className='mb-3' key={`about-${index}`}>{p}</p>
        ))}
      </div>

      <div className='flex items-baseline m-8 mt-4 mb-6 pb-6 border-b-2 border-arian-blanco' />

      <br />
      {/* Line - Component Experience */}
      <p className='font-mono text-sm font-medium tracking-wide xl:pl-8'>
        <font className='text-arian-azul'>&#60;Experience</font> <font className='text-arian-naranja'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>&#34;Experiencia Laboral&#34;</font>  <font className='text-arian-azul'>/&#62;</font>
      </p>

      {/* Experience */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        {experience.map((item, index) => {
          const paragraphs = item.info.paragraphs
          return (
            <div className="mt-8" key={`experience-${index}`}>
            <div className='flex items-baseline mb-4'>
              {/* <div className='bg-arian-grisclaro2 rounded-full h-2 w-2' /> */}
                <div className='flex-1 text-base font-medium'>{item.companyLink ? (<a href={item.companyLink} className='italic hover:text-arian-lila transition duration-300 ease-in-out' target="_blank" rel="noreferrer">{item.companyName}</a>) : item.companyName} <font className='text-xs text-arian-grisclaro2'>|{ (item.companyTimeFinished === 'Now' ? ' actualidad · ' : '') }{item.companyTimeInit && item.companyTimeFinished && useTimeAgo(item.companyTimeInit, item.companyTimeFinished)}</font></div>
            </div>
            {paragraphs.map((p, pInd) => (
              <p className='mb-3' key={`experience-p-${index}-${pInd}`}>{p}</p>
            ))}
            </div>
          )
        })}
      </div>

      <div className='flex items-baseline m-8 mt-4 mb-6 pb-6 border-b-2 border-arian-blanco' />

      <br />
      {/* Line - Component ThisApp */}
      <p className='font-mono text-sm font-medium tracking-wide xl:pl-8'>
        <font className='text-arian-azul'>&#60;ThisApp</font> <font className='text-arian-naranja'><i>title</i></font><font className='text-arian-grisclaro2'>=</font><font className='text-arian-verde'>&#34;¿Por qué realicé una web curriculum?&#34;</font>  <font className='text-arian-azul'>/&#62;</font>
      </p>

      <br />
      {/* This App */}
      <div className='font-body pl-0 pr-0 lg:pl-8 lg:pr-12 text-justify text-sm leading-6'>
        {cvInfo.paragraphs.map((p, index) => (
          <p className='mb-3' key={`cvInfo-${index}`}>{p}</p>
        ))}
        <p className='mb-3'>Visitalo en: <b>www.ariannoel.com</b></p>
      </div>

      <p className='font-mono text-sm font-medium tracking-wide mt-5'>
        {/* Line 3 */}
        <font className='text-arian-grisclaro2 pl-4'>)</font>
        <br />
        {/* Line 4 */}
        <font className='text-arian-grisclaro2'>{'}'}</font>
      </p>
    </div>
  )
}
