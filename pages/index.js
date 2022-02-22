import Head from 'next/head'
import Skill from '../models/Skill.js'
import Profile from '../models/Profile.js'
import SocialMenu from '../components/SocialMenu'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import connectMongoClient from '../middleware/ConnectMongoClient.js'

export default function Home ({ profile, skills }) {
  const gP = JSON.parse(profile)
  const {
    name, lastName, occupation, email, linkedin, github, instagram, avatar, about, experience, cvInfo
  } = gP[0]
  const getSkills = JSON.parse(skills)
  return (
    <div className='block md:flex md:h-screen font-sans min-h-screen bg-arian-negro'>
      <Head>
        <title>Curriculum Web · Arián Noel Fernández</title>
        <meta name="description" content="Siendo Web Developer, ¿por qué tendría un curriculum en PDF?" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='block md:w-1/2 md:h-full lg:w-auto lg:flex'>
        <SocialMenu profile={{ email, linkedin, github, instagram }} />
        <LeftColumn profile={{ name, lastName, occupation, avatar }} skills={getSkills} />
      </div>
      <div className='block md:flex-auto md:w-1/2'>
        <RightColumn profile={{ about, experience, cvInfo }} />
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const readAll = Promise.all([
    Skill.find({}),
    Profile.find({})
  ])
    .then(values => {
      const readSkills = JSON.stringify(values[0])
      const readProfile = JSON.stringify(values[1])
      return {
        profile: readProfile,
        skills: readSkills
      }
    })
    .catch(err => {
      return {
        error: `No fue posible conectarse con la BD: ${err}`
      }
    })

  return { props: connectMongoClient(readAll) }
}
