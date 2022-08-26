import * as puppeteer from 'puppeteer';

describe('Wait types', () => {

  let browser: puppeteer.Browser
  let page: puppeteer.Page

  beforeAll( async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    })

    page = await browser.newPage()
  })

  afterAll( async () => {
    await browser.close()
  })

  it('Should show different wait types', async () => {
    await page.goto('https://github.com/', {
      waitUntil: 'networkidle2'
    })

    // explicit wait for timeout (deprecated)
    await page.waitForTimeout(500)

    // wait for CSS selector
    await page.waitForSelector('body > footer')

  }, 350000)

  it('Should interact with Modals', async () => {
    await page.goto('https://demoqa.com/modal-dialogs', {
      waitUntil: 'networkidle2'
    })

    await page.waitForSelector('#showSmallModal', {
      visible: true
    })

    await page.click('#showSmallModal')

  }, 350000)
})
