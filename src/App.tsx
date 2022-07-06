import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rinkeby, Mainnet, ChainId, DAppProvider, useEthers, Config } from '@usedapp/core';
import { MintArea } from './components/MintArea';
import './fonts/CartoonOneFont.css';
import BrownConnect from './images/BrownConnect.png';
import Brown from './images/Brown.png';
const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: `https://mainnet.infura.io/v3/ba30e50414ff488a8a09fb4619cc8891`,
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}

function App() {
  return (
    <DAppProvider config={config}>
      <div className="SectionOne">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'right' }}>
          <a href="https://twitter.com/deadiestombwtf" className='TwitterButton' style={{ width: '4vw', height: '4vw', margin: '.25vw' }} target="_blank"> </a>
          <a href="https://opensea.io/collection/deadiestombwtf" className='OpenseaButton' style={{ width: '4vw', height: '4vw', margin: '.25vw' }} target="_blank"> </a>
        </div>
        <MintArea />
        <img src={BrownConnect} style={{ width: '100vw', maxWidth: '100%', marginBottom: '-5px' }}></img>
      </div>

      <div className="SectionTwo">
        <div style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>

          <div id='FAQ' className="TitleHeader" style={{ fontSize: '6vw' }}>FAQ</div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>1 - WHAT IS THE TOTAL SUPPLY?</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', marginTop: '1vw', fontFamily: 'Caveat, cursive' }}>A Total of 555 unique Gradies will be created.</div>


          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>2 - WHEN WILL GRADIENT LIFE LAUNCH?</div>



            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Pre-Sale Mint Date: April 20th, 10am PST</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Public Mint Date: April 21th, 10am PST.</div>


          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>3 - HOW MUCH TO MINT?</div>


            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Pre-Sale: 0.03 ETH</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Public Sale: 0.04 ETH</div>

          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>4 - FUTURE OF GRADIENT LIFE NFT?</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Building value and quality on our project is our main goal, we will explore and innovate in the NFT Space with the endless possibility of NFT Tech, for sure we will have a breeding system for our Gen 2 collection and utility token soon, make sure to join our discord so you will be up to date with our latest updates!</div>


          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>5 - ARE THERE ANY NFT GIVEAWAYS?</div>
            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>Yes, we have reserved 333 Gradies for community giveaway only.</div>

          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>


            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>6 - HOW TO BUY?</div>


            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>

              <div style={{ paddingBottom: '.5vw' }}>Here are the steps on what you need to do to get your Gradient Life NFT.</div>

              <div>1. Download the [metamask.io](http://metamask.io/) extension on your browser.</div>

              <div>2. Purchase Ethereum from various exchanges, such as Coinbase or Binance.</div>

              <div>3. Send Ethereum from this exchange to your MetaMask wallet.</div>

              <div>4. On launch day, open the Gradient Life NFT website and select the number of NFTs you wish to mint.</div>

              <div>5. Choose between 1 - 5 Gradies, Click “MINT” button, Metamask will popup asking for connection.</div>

              <div>6. Confirm the transaction and any associated fees.</div>

              <div>7. Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea.</div>

            </div>

          </div>

        </div>

        <div style={{ padding: '1vw' }}></div>

      </div>

      <div className='mainHeader' style={{ height: '5vw' }}>


        <div style={{ height: '3vw' }}></div>

        <div style={{ height: '.1vw', backgroundColor: 'rgba(255,255,255,.7)', margin: '0vw 1vw 0vw 1vw' }}></div>

        <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(255,255,255,.7)', fontSize: "1vw" }}>© deadiestomb.wtf</div>

      </div>


    </DAppProvider >
  );
}

export default App;
