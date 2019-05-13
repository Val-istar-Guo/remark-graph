import puppeteer from 'puppeteer'
import path from 'path'


export default async (definition) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({ width: 600, height: 800 })
  await page.goto(`file://${path.join(__dirname, 'index.html')}`)
  await page.evaluate(`document.body.style.background = 'white'`)

  await page.$eval('#container', (container, definition, mermaidConfig) => {
    container.innerHTML = definition
    window.mermaid.initialize(mermaidConfig)

    window.mermaid.init(undefined, container)
  }, definition, {})

  const svg = await page.$eval('#container', container => container.innerHTML)
  console.log(svg)

  browser.close()
}
