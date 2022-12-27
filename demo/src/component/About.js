import React from 'react'
import './About.css'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <h2>A Growing Protocol Ecosystem</h2>
                <p>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
                <div className='card-container'>
                    <div className='card'>
                    <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    <div className='card'>
                    <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    <div className='card'>
                    <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    <div className='card'>
                    <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    
                </div>
                <a href='/' className='btn'>User Defi</a>
            </div>
        </div>
    )
}

export default About
