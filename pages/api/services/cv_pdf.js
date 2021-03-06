import chromium from 'chrome-aws-lambda'
import stream from 'stream'
// import hb from 'handlebars'
// import inlineCss from 'inline-css'
import Promise from 'bluebird'
const options = { format: 'A4', landscape: false, scale: 0.70, printBackground: true }
const file = { url: 'https://ariannoel.com/cv_format' }

async function getBrowserInstance() {
	const executablePath = await chromium.executablePath

	if (!executablePath) {
		// running locally
		const puppeteer = require('puppeteer')
		return puppeteer.launch({
			args: chromium.args,
			headless: true,
			defaultViewport: {
				width: 1280,
				height: 720
			},
			ignoreHTTPSErrors: true
		})
	}

	return chromium.puppeteer.launch({
		args: chromium.args,
		defaultViewport: {
			width: 1280,
			height: 720
		},
		executablePath,
		headless: chromium.headless,
		ignoreHTTPSErrors: true
	})
}

async function generatePdf(file, options, callback) {
  // we are using headless mode
  let args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ];
  if(options.args) {
    args = options.args;
    delete options.args;
  }

  const browser = await getBrowserInstance();
  const page = await browser.newPage();

  // if(file.content) {
  //   data = await inlineCss(file.content, {url:"/"});
  //   console.log("Compiling the template with handlebars")
  //   // we have compile our code with handlebars
  //   const template = hb.compile(data, { strict: true });
  //   const result = template(data);
  //   const html = result;

  //   // We set the page content as the generated html by handlebars
  //   await page.setContent(html, {
  //     waitUntil: 'networkidle2', // wait for page to load completely
  //   });
  // } else {
    await page.goto(file.url, {
      waitUntil:[ 'load', 'networkidle2'], // wait for page to load completely
    });
  // }

  return Promise.props(page.pdf(options))
    .then(async function(data) {
       await browser.close();

       return Buffer.from(Object.values(data));
    }).asCallback(callback);
}

export default async function handler (req, res) {
  try {
    await generatePdf(file, options).then(pdfBuffer => {
      // res.setHeader('Content-Type', 'application/pdf')
      // res.send(pdfBuffer)
      const readStream = new stream.PassThrough()
      readStream.end(pdfBuffer)
      res.setHeader('Content-disposition', 'attachment; filename=CV - Ari??n Noel Fern??ndez.pdf')
      res.setHeader('Content-Type', 'application/pdf')
      readStream.pipe(res)
    })
  } catch (e) {
    res.status(400).json({ error: true, message: 'Ocurri?? un problema al generar el PDF. '+e })
  }
}