import * as puppeteer from 'puppeteer';
import sleep from '../src/lib/sleep';

describe('My first test', () => {

  it('Should open and close browser', async () => {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    await page.goto('http://automationpractice.com/index.php')
    sleep(1000)
    await browser.close()

  }, 30000)

})
