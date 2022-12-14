import * as puppeteer from 'puppeteer';
import sleep from '../src/lib/sleep'

describe('Elements interaction', () => {

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

  it('Should open and interact with simple context menu', async () => {

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

    page.on('dialog', async (dialog) => {
      await dialog.accept()
    })

    // Right click
    await page.click('#authentication > span', {
      button: 'right',
      delay: 500
    })

    sleep(3000)

    // Double click
    await page.click('#authentication > button', {
      clickCount: 2,
      delay: 500
    })

    sleep(3000)

  }, 350000)

  it('Should open, fill, and submit form', async () => {
    await page.goto('https://devexpress.github.io/testcafe/example/')

    await page.type('#developer-name', 'John Doe', {
      delay: 100
    })
    await page.click('#remote-testing')
    await page.click('#tried-test-cafe')
    await page.select('#preferred-interface', "Both")
    await page.type ('#comments', 'This is a comment', {
      delay: 100
    })
    await page.click('#submit-button')

    sleep(3000)

  }, 350000)

})
