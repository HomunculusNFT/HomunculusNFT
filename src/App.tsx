import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rinkeby, Mainnet, ChainId, DAppProvider, useEthers, Config } from '@usedapp/core';
import { MintArea } from './components/MintArea';
import './fonts/CartoonOneFont.css';
import BrownConnect from './images/BrownConnect.png';
import Brown from './images/Brown.png';
import Banner from './images/BannerT.png';
import TheFather from './images/The Father.png';
import TheLittleMan from './images/The Little Man.png';
import TheHomunculus from './images/The Homunculus.png';
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
        <img src={Banner} style={{ position: 'absolute', width: '15vw', maxWidth: '100%', marginBottom: '-5px' }}></img>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'right' }}>
          <a href="https://twitter.com/LittleMan_NFT_" className='TwitterButton' style={{ width: '4vw', height: '4vw', margin: '.25vw' }} target="_blank"> </a>
          <a href="https://opensea.io/collection/littlemanlol" className='OpenseaButton' style={{ width: '4vw', height: '4vw', margin: '.25vw' }} target="_blank"> </a>
        </div>
        <MintArea />
        <img src={BrownConnect} style={{ width: '100vw', maxWidth: '100%', marginBottom: '-5px' }}></img>
      </div>

      <div className="SectionTwo">
        <div style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>

          <div id='FAQ' className="TitleHeader" style={{ fontSize: '6vw' }}>ℜ𝔘𝔏𝔈 𝔒𝔉 𝔄𝔏ℭℌ𝔈𝔐𝔜</div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>1 - 𝓗𝓞𝓦 𝓜𝓐𝓝𝓨 𝓛𝓘𝓣𝓣𝓛𝓔 𝓜𝓐𝓝 𝓝𝓕𝓣 𝓘𝓝 𝓣𝓞𝓣𝓐𝓛?</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', marginTop: '1vw', fontFamily: 'Caveat, cursive' }}>𝔄 𝔱𝔬𝔱𝔞𝔩 𝔬𝔣 7,777 ℌ𝔬𝔪𝔲𝔫𝔠𝔲𝔩𝔲𝔰 𝔠𝔯𝔢𝔞𝔱𝔢𝔡 𝔟𝔶 𝔞𝔠𝔠𝔦𝔡𝔢𝔫𝔱 𝔴𝔥𝔦𝔩𝔢 𝔦𝔫 𝔱𝔥𝔢 𝔪𝔞𝔨𝔦𝔫𝔤 𝔬𝔣 𝔓𝔥𝔦𝔩𝔬𝔰𝔬𝔭𝔥𝔢𝔯'𝔰 𝔖𝔱𝔬𝔫𝔢</div>


          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>2 - 𝓦𝓔𝓝 𝓜𝓘𝓝𝓣?</div>



            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>𝔐𝔦𝔫𝔱 𝔬𝔫 𝔍𝔲𝔩𝔶 8𝔱𝔥, 10𝔞𝔪 𝔓𝔖𝔗.</div>


          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>3 - 𝓕𝓤𝓣𝓤𝓡𝓔 𝓞𝓕 𝓛𝓘𝓣𝓣𝓛𝓔 𝓜𝓐𝓝 𝓝𝓕𝓣?</div>


            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>𝔑𝔬 ℜ𝔬𝔞𝔡𝔪𝔞𝔭 𝔞𝔫𝔡 𝔇𝔦𝔰𝔠𝔬𝔯𝔡...𝔶𝔢𝔱, 50% 𝔬𝔣 𝔦𝔫𝔦𝔱𝔦𝔞𝔩 𝔰𝔞𝔩𝔢𝔰 𝔞𝔫𝔡 75% 𝔬𝔣 𝔞𝔩𝔩 𝔯𝔬𝔶𝔞𝔩𝔱𝔶 𝔳𝔞𝔩𝔲𝔢 𝔴𝔦𝔩𝔩 𝔟𝔢 𝔠𝔞𝔳𝔢𝔡 𝔦𝔫𝔱𝔬 𝔥𝔬𝔩𝔡𝔢𝔯'𝔰 𝔳𝔞𝔲𝔩𝔱 𝔴𝔞𝔩𝔩𝔢𝔱 𝔣𝔬𝔯 𝔣𝔲𝔱𝔲𝔯𝔢 𝔡𝔢𝔳𝔢𝔩𝔬𝔭𝔪𝔢𝔫𝔱 𝔭𝔲𝔯𝔭𝔬𝔰𝔢, 𝔩𝔬𝔬𝔨𝔦𝔫𝔤 𝔣𝔬𝔯𝔴𝔞𝔯𝔡 𝔱𝔬 𝔣𝔬𝔯𝔪 𝔞 𝔇𝔄𝔒 𝔠𝔬𝔪𝔪𝔲𝔫𝔦𝔱𝔶 𝔴𝔦𝔱𝔥 𝔥𝔬𝔩𝔡𝔢𝔯𝔰 𝔞𝔫𝔡 𝔡𝔢𝔠𝔦𝔡𝔢 𝔬𝔫 𝔱𝔥𝔢 𝔤𝔯𝔬𝔴𝔱𝔥 𝔬𝔣 𝔏𝔦𝔱𝔱𝔩𝔢 𝔐𝔞𝔫 𝔑𝔉𝔗.</div>

          </div>

          <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

            <div style={{ fontSize: '2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Caveat, cursive' }}>4 - 𝓐𝓝𝓨 𝓗𝓞𝓜𝓘𝓔𝓢 𝓕𝓞𝓡 𝓖𝓘𝓥𝓔𝓐𝓦𝓐𝓨?</div>

            <div style={{ padding: '.5vw', fontSize: '1.5vw', fontFamily: 'Caveat, cursive' }}>𝔜𝔢𝔰, 𝔣𝔬𝔩𝔩𝔬𝔴 𝔗𝔴𝔦𝔱𝔱𝔢𝔯 𝔣𝔬𝔯 𝔪𝔬𝔯𝔢 𝔦𝔫𝔣𝔬.</div>


          </div>

        </div>

        <div style={{ padding: '1vw' }}></div>

      </div>

      <div className="SectionThree">
        <div style={{ padding: '1vw' }}></div>
        <div id='FAQ' className="TitleHeader" style={{ fontSize: '6vw' }}>𝔗ℌ𝔈 𝔈𝔏𝔇𝔈ℜ𝔖</div>
        <div className='FlexBoxes' style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw", height: "42vw" }}>

          <div className="BlackSection" style={{ width: "24.4vw", borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
            <div className="TitleHeader" style={{ padding: '1vw', fontSize: '2vw' }}>“ 𝔗𝔥𝔢 𝔏𝔦𝔱𝔱𝔩𝔢 𝔐𝔞𝔫”</div>
            <img src={TheLittleMan} style={{ borderWidth: '0.2vw', borderColor: 'black', borderStyle: 'solid', width: '20vw', margin: '0vw 2vw', borderRadius: '1vw' }}></img>
            <div style={{ padding: '.5vw', fontSize: '1.5vw', marginTop: '1vw' }}>“ 𝔗𝔥𝔢 𝔏𝔦𝔱𝔱𝔩𝔢 𝔐𝔞𝔫” 𝔦𝔰 𝔱𝔥𝔢 𝔣𝔦𝔯𝔰𝔱 𝔰𝔲𝔠𝔠𝔢𝔰𝔰𝔣𝔲𝔩 𝔥𝔬𝔪𝔲𝔫𝔠𝔲𝔩𝔲𝔰 𝔱𝔥𝔞𝔱 𝔦𝔰 𝔠𝔯𝔢𝔞𝔱𝔢𝔡 𝔟𝔶 𝔣𝔞𝔱𝔥𝔢𝔯 𝔴𝔦𝔱𝔥 𝔱𝔥𝔢 𝔯𝔢𝔡 𝔰𝔱𝔬𝔫𝔢, 𝔩𝔞𝔱𝔢𝔯 𝔨𝔫𝔬𝔴𝔫 𝔞𝔰 “𝔓𝔥𝔦𝔩𝔬𝔰𝔬𝔭𝔥𝔢𝔯’𝔰 𝔖𝔱𝔬𝔫𝔢”, 𝔦𝔱 𝔠𝔞𝔫 𝔱𝔞𝔩𝔨 𝔞𝔫𝔡 𝔦𝔰 𝔢𝔵𝔱𝔯𝔢𝔪𝔢𝔩𝔶 𝔦𝔫𝔱𝔢𝔩𝔩𝔦𝔤𝔢𝔫𝔱, 𝔞𝔩𝔰𝔬 𝔭𝔬𝔰𝔰𝔢𝔰𝔰𝔢𝔡 𝔰𝔬𝔪𝔢 𝔨𝔦𝔫𝔡 𝔬𝔣 𝔪𝔶𝔰𝔱𝔢𝔯𝔦𝔬𝔲𝔰 𝔞𝔟𝔦𝔩𝔦𝔱𝔦𝔢𝔰.</div>
          </div>

          <div className="BlackSection" style={{ width: "24.4vw", borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
            <div className="TitleHeader" style={{ padding: '1vw', fontSize: '2vw' }}>“ 𝔗𝔥𝔢 𝔉𝔞𝔱𝔥𝔢𝔯”</div>
            <img src={TheFather} style={{ borderWidth: '0.2vw', borderColor: 'black', borderStyle: 'solid', width: '20vw', margin: '0vw 2vw', borderRadius: '1vw' }}></img>
            <div style={{ padding: '.5vw', fontSize: '1.5vw', marginTop: '1vw' }}>" 𝔗𝔥𝔢 𝔉𝔞𝔱𝔥𝔢𝔯" 𝔦𝔰 𝔠𝔯𝔲𝔢𝔩 𝔱𝔬 𝔥𝔲𝔪𝔞𝔫, 𝔟𝔲𝔱 𝔶𝔢𝔱 𝔨𝔦𝔫𝔡 𝔱𝔬 𝔞𝔫𝔦𝔪𝔞𝔩𝔰 𝔞𝔫𝔡 𝔦𝔫𝔰𝔢𝔠𝔱𝔰, 𝔥𝔢 𝔠𝔞𝔫 𝔲𝔰𝔢 𝔥𝔲𝔪𝔞𝔫 𝔬𝔯 𝔥𝔲𝔪𝔞𝔫 𝔟𝔩𝔬𝔬𝔡 𝔱𝔬 𝔣𝔲𝔰𝔢 𝔞𝔫𝔡 𝔱𝔯𝔶𝔦𝔫𝔤 𝔱𝔬 𝔠𝔯𝔢𝔞𝔱𝔢 𝔭𝔥𝔦𝔩𝔬𝔰𝔬𝔭𝔥𝔢𝔯𝔰 𝔰𝔱𝔬𝔫𝔢 𝔟𝔲𝔱 𝔴𝔬𝔫’𝔱 𝔭𝔦𝔠𝔨 𝔞 𝔣𝔩𝔬𝔴𝔢𝔯 𝔣𝔯𝔬𝔪 𝔱𝔥𝔢 𝔤𝔞𝔯𝔡𝔢𝔫, 𝔟𝔲𝔱 𝔩𝔬𝔳𝔦𝔫𝔤 𝔥𝔦𝔰 𝔥𝔬𝔪𝔦𝔢𝔰 𝔠𝔯𝔢𝔞𝔱𝔦𝔬𝔫𝔰.</div>
          </div>

          <div className="BlackSection" style={{ width: "24.4vw", borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
            <div className="TitleHeader" style={{ padding: '1vw', fontSize: '2vw' }}>“ 𝔗𝔥𝔢 ℌ𝔬𝔪𝔲𝔫𝔠𝔲𝔩𝔲𝔰”</div>
            <img src={TheHomunculus} style={{ borderWidth: '0.2vw', borderColor: 'black', borderStyle: 'solid', width: '20vw', margin: '0vw 2vw', borderRadius: '1vw' }}></img>
            <div style={{ padding: '.5vw', fontSize: '1.5vw', marginTop: '1vw' }}>𝔒𝔫𝔢 𝔬𝔣 𝔱𝔥𝔢 1 𝔬𝔣 1 " 𝔗𝔥𝔢 ℌ𝔬𝔪𝔲𝔫𝔠𝔲𝔩𝔲𝔰" 𝔦𝔰 𝔬𝔫𝔢 𝔬𝔣 𝔱𝔥𝔢 𝔪𝔬𝔰𝔱 𝔰𝔲𝔠𝔠𝔢𝔰𝔰𝔣𝔲𝔩 𝔠𝔯𝔢𝔞𝔱𝔦𝔬𝔫 𝔬𝔣 𝔥𝔦𝔰, 𝔪𝔞𝔨𝔦𝔫𝔤 𝔱𝔥𝔢 𝔞𝔭𝔭𝔢𝔞𝔯𝔞𝔫𝔠𝔢 𝔞𝔩𝔪𝔬𝔰𝔱 𝔞𝔰 𝔠𝔩𝔬𝔰𝔢 𝔱𝔬 𝔞 𝔫𝔬𝔯𝔪𝔞𝔩 𝔥𝔲𝔪𝔞𝔫.</div>
          </div>

        </div>
        <div style={{ padding: '3vw' }}></div>
      </div>

      <div className='mainHeader' style={{ height: '5vw' }}>


        <div style={{ height: '3vw' }}></div>

        <div style={{ height: '.1vw', backgroundColor: 'rgba(255,255,255,.7)', margin: '0vw 1vw 0vw 1vw' }}></div>

        <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(255,255,255,.7)', fontSize: "1vw" }}>© littleman.lol</div>

      </div>


    </DAppProvider >
  );
}

export default App;
