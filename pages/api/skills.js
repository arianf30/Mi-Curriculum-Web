import connectDB from '../../middleware/mongodb'
import Skill from '../../models/Skill'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const skill = new Skill({
        name: req.body.name,
        order: req.body.order,
        skill: req.body.skill
      })
      const skillcreated = await skill.save()
      return res.status(200).send(skillcreated)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
  const readAll = await Skill.find({})
  return res.json(readAll)
}

export default connectDB(handler)
