const puppeteer = require('puppeteer');
const data=require("./config.json");
let numOfPost=process.argv[2];

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(data.url,{waitUntil :'networkidle2'});

  await page.type("input[name='username']",data.user,{delay:100});
  await page.type("input[name='password']",data.pwd,{delay:100}); 
  await Promise.all([
   page.waitForNavigation({waitUntil:"networkidle2"}),
   page.click("button[type='submit']")
  ]);
  

  await page.type("input[placeholder='Search']","virat.kohli",{delay:200});
  await page.waitForSelector(".-qQT3",{visible:true});
  await Promise.all([
   page.waitForNavigation({waitUntil:"networkidle2"}),
   page.click(".-qQT3",{delay:400})
  ]);

  await page.waitForSelector("._9AhH0",{visible:true});
  await Promise.all([
   page.waitForNavigation({waitUntil:"networkidle2"}),
   page.click("._9AhH0",{delay:500})
  ]);
  
  let i=0;

  do{
  await page.waitForSelector(".fr66n button",{visible:true});
  await page.click(".fr66n button");
  await Promise.all([
   page.waitForNavigation({waitUntil:"networkidle2"}),
   page.click("._65Bje.coreSpriteRightPaginationArrow")
  ]);
  i++;
  }while(i<numOfPost){}

})();