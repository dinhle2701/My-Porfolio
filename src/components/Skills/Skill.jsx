import React, { useState, useEffect } from 'react';
import Container from '../Custom/Container'
import ScrollReveal from '../Custom/ScrollReveal'
import Technical from './Technical/Technical';
import Project from './Project/Project';

const Skill = () => {
    
    return (
        <div id='skill' className='skill h-auto scroll-mt-18 reveal mb-18'>
            <ScrollReveal />

            <Container>
                <h1 className='text-center py-10 text-4xl text-white font-bold'>SKILLS</h1>
                <Technical />
                <div className="my-8"></div>

                <Project/>

            </Container>


        </div>
    )
}

export default Skill
