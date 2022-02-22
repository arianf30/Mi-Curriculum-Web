import { generatePdf } from 'html-pdf-node'
import stream from 'stream'
const options = { format: 'A4', landscape: false, scale: 0.70, printBackground: true }
const file = { url: process.env.path + '/cv_format' }

export default async function handler (req, res) {
  try {
    await generatePdf(file, options).then(pdfBuffer => {
      // res.setHeader('Content-Type', 'application/pdf')
      // res.send(pdfBuffer)
      const readStream = new stream.PassThrough()
      readStream.end(pdfBuffer)
      res.setHeader('Content-disposition', 'attachment; filename=CV - Arián Noel Fernández.pdf')
      res.setHeader('Content-Type', 'application/pdf')
      readStream.pipe(res)
    })
  } catch (e) {
    res.status(400).json({ error: true, message: 'Ocurrió un problema al generar el PDF.' })
  }
}
