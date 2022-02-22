export default function ItemSkill ({ width, name }) {
  return (
    <>
      <div className='flex h-1 w-full bg-arian-negro mt-8 rounded-full'>
        <div style={{ width: `${width} !important` }}>
          <div className={'h-1 w-full rounded-full bg-gradient-to-r from-arian-amarillo to-arian-verde animate-[bars_3s_ease-in-out]'} />
        </div>
      </div>
      <div className='mt-3 text-sm'>
        <span className='text-gray-400 font-semibold'>{name}</span>
      </div>
      </>
  )
}
