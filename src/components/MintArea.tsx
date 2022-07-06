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
                <div style={{ margin: '1vw', height: '30vw' }}>
                    <img src={DemoNFT} style={{ height: '35vw', margin: '-3vw 0vw -1vw 0vw' }}></img>
                    <div className="TitleHeader" style={{ margin: '1vw' }}> {supply}</div>
                </div>
                <div style={{ width: '30vw', height: '35vw' }}>
                    <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", marginTop: '8vw', marginBottom: '1vw' }}>
                        <div className="SmallerText" style={{
                            fontSize: '2vw', fontFamily: 'Caveat, cursive'
                        }}>
                            <div>-Only 5 Per Transaction, Don't be greedy.</div>
                            <div>-Maximum 10💀 per wallet</div>
                            <div>-0.005 for each 1💀</div>
                        </div>
                    </div>
                    <div className="FlexBoxes">
                        < button className="NormalButton" style={{ width: '4vw', height: '4vw', fontSize: '2vw' }} onClick={() => decrementCount()}> - </button>
                        <div style={{ width: '22vw', height: '5vw', color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '2.5vw', fontWeight: '900', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', fontFamily: 'Caveat, cursive' }}>{lotCount} 💀</div>
                        < button className="NormalButton" style={{ width: '4vw', height: '4vw', fontSize: '2vw' }} onClick={() => incrementCount()}> + </button>
                    </div>
                    {isConnected ?
                        (
                            <div>
                                <div>
                                    < button className="NormalButton" style={{ width: '30vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }} onClick={() => GeneralMint()} > Mint</button>
                                </div>
                                <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '2vw', fontWeight: '900', fontFamily: 'Caveat, cursive' }}> You have minted {String(minted)} / 10 </div>
                            </div>
                        ) : (
                            <div>
                                < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }} onClick={() => activateBrowserWallet()}> Connect </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >

    )
}