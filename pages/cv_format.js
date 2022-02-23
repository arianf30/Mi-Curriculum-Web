import Head from 'next/head'
import Skill from '../models/Skill.js'
import Profile from '../models/Profile.js'
import LeftColumnPdf from '../components/LeftColumnPdf'
import RightColumnPdf from '../components/RightColumnPdf'
import connectMongoClient from '../middleware/connectMongoClient.js'

export default function Home ({ profile, skills }) {
  const gP = JSON.parse(profile)
  const {
    name, lastName, occupation, email, linkedin, github, instagram, avatar, about, experience, cvInfo
  } = gP[0]
  const getSkills = JSON.parse(skills)
  return (
    <div className='flex md:h-screen font-sans min-h-screen'>
      <Head>
        <title>Curriculum Web · Arián Noel Fernández</title>
        <meta name="description" content="Siendo Web Developer, ¿por qué tendría un curriculum en PDF>" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='w-auto flex'>
        <LeftColumnPdf profile={{ name, lastName, occupation, avatar, email, linkedin, github, instagram }} skills={getSkills} />
      </div>
      <div className='flex-auto w-1/2'>
        <RightColumnPdf profile={{ about, experience, cvInfo }} />
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
