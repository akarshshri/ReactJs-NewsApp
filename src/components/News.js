import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Eustance Huang",
        "title": "This investor is bullish on Alibaba, says now is a 'great opportunity' to buy - CNBC",
        "description": "Lockdowns in China could be a boon for businesses like Alibaba, says Sam Le Cornu of Stonehorn Global Partners.",
        "url": "https://www.cnbc.com/2022/01/07/china-investing-investor-bullish-on-baba-says-lockdowns-will-benefit.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106882356-1620884021692-gettyimages-1231916423-CHINA_ALIBABA.jpeg?v=1641449093",
        "publishedAt": "2022-01-07T04:40:00Z",
        "content": "Lockdowns in China could be a boon for businesses like Alibaba, says Sam Le Cornu of Stonehorn Global Partners, who said his firm is buying more shares in the Chinese tech giant.\r\n\"We're increasing o… [+2616 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Vildana Hajric, Emily Graffeo, Bloomberg",
        "title": "Even amid crypto’s early-2022 jitters, some analysts still think Bitcoin at $100,000 is in reach - Fortune",
        "description": "Bulls are looking past Bitcoin's recent slump, caused by the Fed's indication that it might withdraw stimulus earlier than expected.",
        "url": "https://fortune.com/2022/01/06/bitcoin-price-100k-prediction-crypto-crash-fed/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/01/GettyImages-1237544263-e1641528864154.jpeg?resize=1200,600",
        "publishedAt": "2022-01-07T04:28:37Z",
        "content": "Skip to Content"
        },
        {
        "source": {
        "id": null,
        "name": "Usda.gov"
        },
        "author": null,
        "title": "Interstate Meat Dist. Inc., Recalls Ground Beef Products Due To Possible E. Coli O157:H7 Contamination | Food Safety and Inspection Service - USDA.gov",
        "description": null,
        "url": "http://www.fsis.usda.gov/recalls-alerts/interstate-meat-dist.-inc.-recalls-ground-beef-products-due-possible-e.-coli-o157h7",
        "urlToImage": "https://www.fsis.usda.gov/sites/default/files/2021-03/MicrosoftTeams-image.png",
        "publishedAt": "2022-01-07T03:39:06Z",
        "content": "WASHINGTON, Jan. 6, 2022 Interstate Meat Dist. Inc., a Clackamas, Ore., establishment, is recalling approximately 28,356 pounds of ground beef products that may be contaminated with E. coli O157:H7, … [+3193 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Alastair Talbot",
        "title": "Woman throws Happy Meal at staff at a McDonalds in Florida before giving them double middle-finger - Daily Mail",
        "description": "An unidentified female drive-thru customer at a McDonald's in Southern Florida was caught on surveillance footage video throwing items at staff when she learned that her coupon wasn't accepted.",
        "url": "https://www.dailymail.co.uk/news/article-10377333/Woman-throws-Happy-Meal-staff-McDonalds-Florida-giving-double-middle-finger.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2022/01/07/02/52642253-0-image-a-34_1641522944869.jpg",
        "publishedAt": "2022-01-07T02:51:00Z",
        "content": "An unhappy drive-thru customer was not lovin' it at a McDonald's in Southern Florida after surveillance footage video caught her having a tirade at staff and throwing items at them when she learned t… [+1572 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Cointelegraph"
        },
        "author": "Brian Quarmby",
        "title": "GameStop shares jump 26% in after hours trade after NFT division unveiled - Cointelegraph",
        "description": "GameStop’s NFT unit will be tasked with building an NFT platform that enables the buying, selling and trading of gaming NFTs, along with establishing key cryptocurrency partnerships.",
        "url": "https://cointelegraph.com/news/gamestop-shares-jump-26-in-after-hours-trade-after-nft-division-unveiled",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDEvN2I4MzhjNDUtYzQ2MS00YzZjLTg3OGMtZjg1ZWQ4YTY4YmVjLmpwZw==.jpg",
        "publishedAt": "2022-01-07T01:36:12Z",
        "content": "The share price of Reddit's cult-favorite stock GameStop Corporation (GME) jumped by one quarter (in after-hours trading following a Wall Street Journal report on its upcoming NFT division. \r\nThe U.S… [+2301 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Mitchell Clark",
        "title": "Your Google home speakers are about to get slightly worse because Sonos sued and won - The Verge",
        "description": "Google has announced that people who use its speaker group feature will have to manually adjust the volume for each one, instead of being able to make group-wide changes.",
        "url": "https://www.theverge.com/2022/1/6/22871304/google-home-speaker-group-volume-control-changes-sonos-patent-decision",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/1KXgEcDwJR_3FV4xBbmUkuqqT5g=/0x421:6000x3562/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21935900/dseifert-nest-audio-4225-8.0.jpeg",
        "publishedAt": "2022-01-07T01:30:11Z",
        "content": "The company says youll have to manually adjust the volume for each speaker\r\nPhoto: Dan Seifert / The Verge\r\nIf you have multiple Google smart speakers in your house, you might want to be aware of a c… [+1703 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Charles Davis",
        "title": "US sues company that dumped 91,000 pennies in ex-employee's driveway - Business Insider",
        "description": "Andreas Flaten woke up to find more than 91,000 pennies sitting in his driveway. The Labor Department says he was a victim of illegal retaliation.",
        "url": "https://www.businessinsider.com/us-sues-company-dumped-91000-pennies-in-ex-employees-driveway-2022-1",
        "urlToImage": "https://i.insider.com/605f0e778e71b30018519233?width=1200&format=jpeg",
        "publishedAt": "2022-01-07T01:14:55Z",
        "content": "When Andreas Flaten didn't receive his final paycheck from a former employer in January 2021, he complained about it, calling up the US Department of Labor to report the theft of his wages. That empl… [+2937 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Crypto theft hits all-time high in 2021 - CNBC Television",
        "description": "CNBC's Eamon Javers joins Shep Smith to report on a record-breaking year for cryptocurrency theft. Some $3.2 billion in crypto was stolen last year.",
        "url": "https://www.youtube.com/watch?v=WZtvaujRFho",
        "urlToImage": "https://i.ytimg.com/vi/WZtvaujRFho/maxresdefault.jpg",
        "publishedAt": "2022-01-07T01:06:31Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "fox8.com"
        },
        "author": "Addy Bink, Nexstar Media Wire",
        "title": "Bed Bath & Beyond to close nearly 40 stores, including 1 in NE Ohio, in coming weeks - WJW FOX 8 News Cleveland",
        "description": "Bed Bath & Beyond will close nearly 40 locations, many before the end of February, as part of a long-term plan to close 200 stores.",
        "url": "https://fox8.com/news/bed-bath-beyond-to-close-nearly-40-stores-including-1-in-ne-ohio-in-coming-weeks/",
        "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2022/01/GettyImages-1255253090.jpg?w=1280",
        "publishedAt": "2022-01-07T00:56:06Z",
        "content": "(NEXSTAR) – Over two dozen Bed Bath &amp; Beyond locations are preparing to shut their doors for good in the coming weeks. \r\nThe New Jersey-based home goods retailer previously announced plans to clo… [+3045 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Kevin Stankiewicz",
        "title": "Conagra Brands CEO says inflation won't go away even after Covid omicron wave passes - CNBC",
        "description": "\"It's not quite that simple. I don't think if omicron goes away it immediately solves inflation,\" Conagra Brands CEO Sean Connolly told CNBC's Jim Cramer.",
        "url": "https://www.cnbc.com/2022/01/06/conagra-brands-ceo-says-inflation-wont-go-away-even-after-covid-omicron-wave-passes.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/105853359-1555363632541img_9624.jpg?v=1593551725",
        "publishedAt": "2022-01-07T00:55:00Z",
        "content": "Conagra Brands CEO Sean Connolly told CNBC's Jim Cramer on Thursday that the company is prepared for inflationary pressures to stick around well after the Covid omicron wave subsides. \r\n\"It's not qui… [+1529 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Karen Weintraub, USA TODAY",
        "title": "Pfizer COVID-19 shot won't be ready for youngest kids for months: 'Might be a three-dose vaccine' - USA TODAY",
        "description": "The lower dose given to 2- to 5-year-olds hasn't produced the necessary immune protection in early tests, according to Pfizer.",
        "url": "https://www.usatoday.com/story/news/health/2022/01/06/covid-pfizer-vaccine-youngest-children/9122889002/",
        "urlToImage": "https://www.gannett-cdn.com/-mm-/909a7a305f8c09175fff3064657ca5a2883aa164/c=0-152-2000-1277/local/-/media/2021/12/13/Charleston/gda-covid-19-state-2021-12-13-img.jpg?auto=webp&format=pjpg&width=1200",
        "publishedAt": "2022-01-07T00:37:51Z",
        "content": "<ul><li>Pfizer hopes a third dose of its COVID-19 vaccine eight weeks after the first two shots will provide the desired effectiveness in early trials.</li><li>Other vaccine makers have lagged Pfizer… [+3341 chars]"
        },
        {
        "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Nicole Friedman, Orla McCaffrey, Sam Goldfarb",
        "title": "Mortgage Rates Hit Highest Levels Since Spring 2020 - The Wall Street Journal",
        "description": "Increase in cost comes after ultralow rates have fueled boom in home sales and prices",
        "url": "https://www.wsj.com/articles/mortgage-rates-hit-highest-levels-since-spring-2020-11641513773",
        "urlToImage": "https://images.wsj.net/im-463560/social",
        "publishedAt": "2022-01-07T00:28:00Z",
        "content": "U.S. mortgage rates this week rose to their highest levels since May 2020, driving up the costs associated with home buying at a time when home-sales prices are already near record highs.\r\nThe averag… [+163 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Anchorage Daily News"
        },
        "author": "Zachariah Hughes",
        "title": "Alaska Airlines cutting flights by 10% through January due to omicron-driven staff shortage - Anchorage Daily News",
        "description": "The reduction will primarily affect flights in the Lower 48 and is intended as a “reset” after massive disruptions in the air travel system nationwide during the holidays, the airline said.",
        "url": "https://www.adn.com/alaska-news/aviation/2022/01/06/alaska-airlines-cutting-flights-by-10-through-january-due-to-omicron-driven-staff-shortage/",
        "urlToImage": "https://www.adn.com/resizer//APdjFFz1eG0bBKspufEtEe7l9SU=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/adn/HCM4HU2KAZA5NFJJYYYYC5RG4Y.jpg",
        "publishedAt": "2022-01-07T00:27:05Z",
        "content": "A long line of travelers waits for Alaska Airlines customer service at Seattle-Tacoma International Airport on Tuesday morning, December 28, 2021. (Marc Lester / ADN) \r\nCiting a spike in the number o… [+1477 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Jim Cramer says the stock market has not reached a truly 'investable bottom.' Here is why - CNBC Television",
        "description": "\"Mad Money\" host Jim Cramer said Thursday that despite the stock market's early 2022 declines, he doesn't believe a truly \"investable bottom\" has arrived yet.",
        "url": "https://www.youtube.com/watch?v=JfBI14vF59g",
        "urlToImage": "https://i.ytimg.com/vi/JfBI14vF59g/maxresdefault.jpg",
        "publishedAt": "2022-01-07T00:23:10Z",
        "content": null
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Jay Peters",
        "title": "Trump's Truth Social app will apparently launch in February - The Verge",
        "description": "Former President Donald Trump’s new social network, Truth Social, will launch on iOS on February 21st, according to a listing on the App Store. The app is being made by the Trump Media and Technology Group (TMTG), Trump’s new media company.",
        "url": "https://www.theverge.com/2022/1/6/22871167/trump-truth-social-app-network-launch-february-tmtg",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/znL1TrihdLFY4ShAW3jqyJyPrmk=/0x216:3000x1787/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23151092/1345757904.jpg",
        "publishedAt": "2022-01-07T00:15:26Z",
        "content": "The App Store says it will be available on February 21st\r\nPhoto by Scott Olson/Getty Images\r\nFormer President Donald Trumps new social network, Truth Social, will launch on iOS on February 21st, acco… [+2331 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CoinDesk"
        },
        "author": "Muyao Shen, Damanick Dantes",
        "title": "First Mover Asia: Bitcoin Stabilizes Near $43K as Layer 1 Tokens Attract Attention - CoinDesk",
        "description": "ONE, FTM, ATOM and NEAR quickly turned green despite Wednesday’s broader market sell-off.",
        "url": "https://www.coindesk.com/markets/2022/01/06/first-mover-asia-bitcoin-stabilizes-near-43k-as-layer-1-tokens-attract-attention/",
        "urlToImage": "https://www.coindesk.com/resizer/6J42SmNcgyORophQDWbi_48dYvg=/1200x628/cloudfront-us-east-1.images.arcpublishing.com/coindesk/G7GAI72ILVAD5HHHB2RO6JRNEE.jpg",
        "publishedAt": "2022-01-06T23:30:00Z",
        "content": "Crypto traders continued to bet on the success of layer 1 tokens, as SOL, LUNA and AVAX last year logged impressive price returns. Layer 1 blockchains have been one of the biggest narratives in the c… [+231 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KRON4"
        },
        "author": "Amy Larson",
        "title": "Whistleblower who called out Elizabeth Holmes reacts to guilty verdict - KRON4",
        "description": "Two whistleblowers who helped blow the cover off Theranos’ secretive blood lab and expose Elizabeth Holmes of fraud were recent college graduates who wanted to do the right thing.",
        "url": "https://www.kron4.com/elizabeth-holmes-trial/whistleblower-who-called-out-elizabeth-holmes-reacts-to-guilty-verdict/",
        "urlToImage": "https://www.kron4.com/wp-content/uploads/sites/11/2022/01/whistleblowers2.jpg?w=1280",
        "publishedAt": "2022-01-06T23:19:05Z",
        "content": "SAN JOSE, Calif. (KRON) — Two whistleblowers who helped blow the cover off Theranos’ secretive blood lab and expose Elizabeth Holmes of fraud were recent college graduates who wanted to do the right … [+5037 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Emily McCormick",
        "title": "Stock market news live updates: Stock futures rise before December jobs report - Yahoo Finance",
        "description": "Stock futures opened higher Thursday evening as investors looked ahead to a key report on the U.S. labor market recovery at the end of a volatile week.",
        "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-january-7-2022-231419964.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/xtlifZ3d39QkrzggRT03iQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-01/384bf730-6f42-11ec-bebf-9c37f326276e",
        "publishedAt": "2022-01-06T23:14:19Z",
        "content": "Stock futures opened higher Thursday evening as investors looked ahead to a key report on the U.S. labor market recovery at the end of a volatile week. Contracts on the S&amp;P 500, Dow and Nasdaq ga… [+3307 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ESPN"
        },
        "author": null,
        "title": "New York Times purchasing The Athletic for $550 million - ESPN",
        "description": "In one of its largest-ever acquisitions, The New York Times Company, looking to expand its audience of paying subscribers to 10 million by 2025, is purchasing The Athletic for $550 million.",
        "url": "https://www.espn.com/espn/story/_/id/33008625/new-york-s-purchasing-athletic-550-million",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0106%2Fr958697_1296x729_16%2D9.jpg",
        "publishedAt": "2022-01-06T23:00:57Z",
        "content": "The New York Times Co. is buying sports news site The Athletic for $550 million, the latest move in its strategy to expand its audience of paying subscribers as the newspaper print ads business fades… [+2411 chars]"
        },
        {
        "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Caitlin McCabe",
        "title": "Meme Stocks Slump to Start New Year - The Wall Street Journal",
        "description": "Individual investors’ favorites GameStop and AMC are off to a rocky start, with both losing more than 10% in 2022",
        "url": "https://www.wsj.com/articles/meme-stocks-slump-to-start-new-year-11641478418",
        "urlToImage": "https://images.wsj.net/im-462995/social",
        "publishedAt": "2022-01-06T22:59:00Z",
        "content": "A U.S. stock market selloff is hitting shares of meme stocks particularly hard, dragging down companies that became favorites among individual investors last year.\r\nShares of GameStop Corp. and AMC E… [+374 chars]"
        }
        ]

    constructor(){
        super();
        //console.log('Inside Constructor');
        this.state =  {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div>
                
                <div>
                    <div className="container pt-4">
                        <h2 className='text-center'>Daily Highlighted News</h2>
                        <div className="row pt-3 d-flex justify-content-center">
                        {this.state.articles.map((element)=>{
                            return  <div key={element.url} className="col-md-6 col-lg-4">
                                        <Newsitem imgUrl={element.urlToImage} newsUrl={element.url} title={element.title} imgDesc={element.description} />
                            </div> 
                                  
                        

                        })}
                            
                       

                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
