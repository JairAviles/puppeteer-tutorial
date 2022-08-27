import * as puppeteer from 'puppeteer';

describe('Wait types', () => {

  let browser: puppeteer.Browser
  let page: puppeteer.Page

  beforeAll( async () => {
    browser = await puppeteer.launch({
      defaultViewport: null,
      slowMo: 500
    })

    page = await browser.newPage()
  })

  afterAll( async () => {
    await browser.close()
  })

  it.skip('Should show different wait types', async () => {
    await page.goto('https://github.com/', {
      waitUntil: 'networkidle2'
    })

    // wait for CSS selector
    await page.waitForSelector('footer')

  }, 350000)

  it('Should interact with Modals', async () => {
    await page.goto('https://demoqa.com/modal-dialogs', {
      waitUntil: 'networkidle2'
    })

    await page.waitForSelector('#showSmallModal', {
      visible: true
    })

    await page.click('#showSmallModal')

    // wait for function
    await page.waitForFunction(() =>
      document.querySelector('#example-modal-sizes-title-sm')?.innerHTML.includes('Small Modal')
    )

    // close small modal
    await page.click('#closeSmallModal')

    // wait for function
    await page.waitForFunction(() =>
      !document.querySelector('#example-modal-sizes-title-sm')
    )

    // observe viewport
    const observeResize = page.waitForFunction('window.innerWidth < 100')
    await page.setViewport({ width: 50, height: 50 })

    await observeResize

  }, 350000)
})
