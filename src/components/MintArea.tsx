import { useEthers, useCall, useContractFunction, useEtherBalance } from "@usedapp/core";
import { Contract } from "ethers";
import ContractABI from '../ContractABI.json';
import { utils, ethers } from 'ethers';
import React, { useState } from 'react';
import '../main.css';
import DemoNFT from '../images/DemoAnim.gif';
import { debug } from "console";

const contractInterface = new ethers.utils.Interface(ContractABI);
const contractAddress = '0x51AF0dE2F4E2aA6898c52c0036B07d2156272134';

const contractContract = new Contract(contractAddress, contractInterface);

console.log("ContractAddress = ", contractAddress);

function AlertPrice(price: string) {
    alert("require " + `${price}` + "ETH to mint");
}

function AlertWhitelist() {
    alert("you're not whitelisted");
}

function GetSupply() {
    const { account } = useEthers()
    const { value, error } =
        useCall(
            account &&
            contractAddress && {
                contract: contractContract,
                method: "totalSupply", // Method to be called
                args: [], // Method arguments - address to be checked for balance
            }
        ) ?? {};
    return value ? value.toString() + '/3088' : '0/3088';
}

function GetMaxMintAmount() {
    const { account } = useEthers()

    const { value: mintedAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "numberMinted",
        args: [account],
    }) ?? {};

    const { value: maxAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "mintPerAddressLimit",
        args: [],
    }) ?? {};

    return (mintedAmount && maxAmount) ? mintedAmount.toString() + "/" + maxAmount.toString() : '';
}

function GetMinted() {
    const { account } = useEthers()

    const { value: mintedAmount } = useCall(account &&
        contractAddress && {
        contract: contractContract,
        method: "numberMinted",
        args: [account],
    }) ?? {};

    return (mintedAmount) ? mintedAmount : 0;
}

export const MintArea = () => {
    const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined && chainId == 1
    const etherBalance = Number(useEtherBalance(account))
    const supply = GetSupply();

    const maxMintAmount = GetMaxMintAmount();
    const minted = GetMinted();

    const { state, send } = useContractFunction(contractContract, 'GeneralMint', { transactionName: 'Mint' })
    function GeneralMint() {
        const mintAmount = String(lotCount);
        if (minted == 0) {
            send(mintAmount, {
                value: (parseFloat(mintAmount) * 5000000000000000 - 5000000000000000).toString(),
            });
        }
        else {
            send(mintAmount, {
                value: (parseFloat(mintAmount) * 5000000000000000).toString(),
            });
        }
    }

    let [lotCount, setLotCount] = useState(0);

    function incrementCount() {
        if (lotCount >= (10 - minted)) return;
        setLotCount(lotCount + 1);
    }
    function decrementCount() {
        if (lotCount <= 0) return;
        setLotCount(lotCount - 1);
    }
    return (
        <div style={{
            padding: '1vw', verticalAlign: 'middle', textAlign: 'center'
        }}>
            <div className="FlexBoxes">
                <div style={{ margin: '1vw', height: '40vw' }}>
                    <img src={DemoNFT} style={{ height: '35vw', margin: '-3vw 0vw -1vw 0vw' }}></img>
                    <div className="TitleHeader" style={{ margin: '1vw' }}> {supply}</div>
                </div>
                <div style={{ width: '40vw', height: '40vw' }}>
                    <div className="BlackSection" style={{ marginTop: '7.5vw', marginBottom: '1vw' }}>
                        <div style={{
                            fontSize: '2vw', fontFamily: 'Caveat, cursive', padding: '4vw 2.5vw', textAlign: 'left'
                        }}>
                            <div>-𝔒𝔫𝔩𝔶 10 𝔓𝔢𝔯 𝔗𝔯𝔞𝔫𝔰𝔞𝔠𝔱𝔦𝔬𝔫, 𝔇𝔬𝔫'𝔱 𝔟𝔢 𝔤𝔯𝔢𝔢𝔡𝔶.</div>
                            <div>-𝔐𝔞𝔵𝔦𝔪𝔲𝔪 10 ℌ𝔬𝔪𝔦𝔢𝔰 𝔭𝔢𝔯 𝔴𝔞𝔩𝔩𝔢𝔱.</div>
                            <div>-1 ℌ𝔬𝔪𝔦𝔢 𝔉𝔯𝔢𝔢, 𝔱𝔥𝔢 𝔯𝔢𝔰𝔱 0.0077 𝔢𝔞𝔠𝔥.</div>
                        </div>
                    </div>
                    <div className="FlexBoxes">
                        < button className="NormalButton" style={{ width: '4vw', height: '4vw', fontSize: '2vw' }} onClick={() => decrementCount()}> - </button>
                        <div style={{ width: '32vw', height: '5vw', color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '2.5vw', fontWeight: '900', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', fontFamily: 'Caveat, cursive' }}>{lotCount} ℌ𝔬𝔪𝔦𝔢</div>
                        < button className="NormalButton" style={{ width: '4vw', height: '4vw', fontSize: '2vw' }} onClick={() => incrementCount()}> + </button>
                    </div>
                    {isConnected ?
                        (
                            <div>
                                <div>
                                    < button className="NormalButton" style={{ width: '40vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }} onClick={() => GeneralMint()} >𝔐𝔦𝔫𝔱</button>
                                </div>
                                <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '2vw', fontWeight: '900', fontFamily: 'Caveat, cursive' }}> 𝔜𝔬𝔲 𝔥𝔞𝔳𝔢 𝔪𝔦𝔫𝔱𝔢𝔡 {String(minted)} / 10 </div>
                            </div>
                        ) : (
                            <div>
                                < button className="NormalButton" style={{ width: '40vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }} onClick={() => activateBrowserWallet()}> ℭ𝔬𝔫𝔫𝔢𝔠𝔱 </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >

    )
}