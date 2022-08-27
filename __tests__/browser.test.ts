import * as puppeteer from 'puppeteer';
import sleep from '../src/lib/sleep';

describe('My first test', () => {

  let browser: puppeteer.Browser
  let page: puppeteer.Page

  beforeAll( async () => {
    browser = await puppeteer.launch({
      defaultViewport: null
    })

    page = await browser.newPage()
  })

  afterAll( async () => {
    await browser.close()
  })

  it('Should open and close browser', async () => {
    await page.goto('https://yahoo.com/')
    // sleep(5000)
    await page.waitForSelector('img')

    // Reload page
    await page.reload()
    await page.waitForSelector('img')

    // Navigate to other site
    await page.goto('https://platzi.com/')
    await page.waitForSelector('#home-public-old')

    // Navigate back
    await page.goBack()
    // await page.waitForSelector('img')
    sleep(100)

    // Navigate forward
    await page.goForward()

    // Open new page
    const page2 = await browser.newPage()
    await page2.goto('https://github.com/')

  }, 350000)

})
