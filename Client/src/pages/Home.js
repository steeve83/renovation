import React from 'react';
import Blueprint from '../assets/blueprint.jpg';
import '../styles/Home.css'
import Bathroom from '../assets/bathroom.png';
import Kitchen from '../assets/kitchen.png';
import '../App.css';

function Home() {
    return (
        <div className='home' style={{backgroundImage: `url(${Blueprint})`}}>
             <h1 className='text-format'>Choose A Project</h1>
        <div className='container'>
           
            <div className='bathroom'>
                <img src={Bathroom} alt="" />
                <h2 className='text-format'>Bathroom</h2>
                
            </div>
            <div className='kitchen'>
                <img src={Kitchen} alt="" />
                <h2 className='text-format'>Kitchen</h2>
            </div>
        </div>



        </div>
    )
}

export default Home
