import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component{
    render() {
        return(
            <div className="about-me" >
                 <Grid className="landing-grid">
                 <Cell col={12}>
                        <h2>About Me</h2>
                        <hr className='about-bar'></hr>
                        <p>Creative and detail-oriented undergraduate at the <span className="name-color">University of Toronto.</span>  
                            Possesses a <span className="name-color">strong work ethic</span> and is capable of <span className="name-color">effective collaboration.  
                            Good analytical skills, and highly proficient in Algorithm Development, Data Structures, and Programming Logic. </span>
                            <br/><br/>I am also interested in: <span className="name-color">Artificial Intelligence specifically Machine Learning, Cyber Security, Game Development, and Data Analysis.</span>
                            <br/><br/>In addition to my studies, I am associated with various leadership initiatives and groups around campus. I am the president for the <span className="name-color"><a style={{ color: '#66ccff' }} href='https://www.facebook.com/DS3UTSC'>Data Science and Statistics Society</a></span> and I am working on a mentorship program for students interested in Data Science and Statistics for my campus.<br></br> <br></br>Thanks for visiting my website! Feel free to check out my projects or get in touch via any of my contacts!</p>
                            <a href="https://drive.google.com/file/d/1_uFMLwiA2rryx0_wXciz8Jg_xoffLq9t/view">
                            
                            </a>
                            <br/>
                            <img 
                        src="https://i.imgur.com/8VF9GNw.png"
                        alt="avatar"
                        className="club-img"
                        
                        />
                
                        </Cell>
                       </Grid>
                       
                        </div>
                        

                        
        )
    }
}

export default About;