import * as puppeteer from 'puppeteer';

describe('My first test', () => {

  it('Should open and close browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    })

    const page = await browser.newPage()
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
    await page.waitForSelector('img')

    // Navigate forward
    await page.goForward()

    // Open new page
    const page2 = await browser.newPage()
    await page2.goto('https://github.com/')


    await browser.close()

  }, 350000)

})
