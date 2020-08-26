import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component{
    render() {
        return(
            <div className="about-me" >
                 <Grid className="landing-grid">
                 <Cell col={12}>
                        <h2>About Me</h2>
                        <hr></hr>
                        <p>Creative and detail-oriented undergraduate at the <span className="name-color">University of Toronto.</span>  
                            Possesses a <span className="name-color">strong work ethic</span> and is capable of <span className="name-color">effective collaboration.  
                            Good analytical skills, and highly proficient in Algorithm Development, Data Structures, and Programming Logic. </span>
                            <br/><br/>I am also interested in: <span className="name-color">Artificial Intelligence specifically Machine Learning, Cyber Security, Game Development, and Data Analyis.</span>
                            <br/><br/>In addition to my studies, I am associated with various leadership inititves and groups around campus. I am the president for the <span className="name-color"><a style={{ color: '#66ccff' }} href='https://www.facebook.com/DS3UTSC'>Data Science and Statistics Society</a></span> and I am working on a mentorship program for students interested in Data Science and Statistics for my campus.<br></br> <br></br>Thanks for visiting my website! Feel free to check out my projects or get in touch via any of my contacts!</p>
                            <a href="https://drive.google.com/file/d/1_uFMLwiA2rryx0_wXciz8Jg_xoffLq9t/view">
                            
                            </a>
                            <br/>
                            <img 
                        src="https://lh3.googleusercontent.com/Hh1F0L27456jvwffRyzT7u1nXY1KAPSvxFTePIEKlbl1Z4RavGt2ODIrKSvB-BzsFISwnswuYF4g4OP5cIUvc9c5ohZhOq7fwBpiyfnSOjm1nOOyYQUsq_RRM-KAqyrkxQwotrACsuCdZdwXHGkZappiZByQ_TBOH3744Pwji6CwMTY6EvZplHL8hBI1PZrbnZEMnzmgfcM2-nGamm8iaE3RZI72g8MxM9zUgfZ-5FJVN4HtQQ3Bk0tqcqrZlbOrIYm8JUPaIcEKgcBSVmalm_3PPoTz6vpLxwk6o7s53i86cfAJcLmukLgqAg8gsXaW8Yz3GApCJuGM-OACLYzK3_2PK8DuTCC6SVVbvOdrxPX-ihMwGghDCUcdr1Al9akzeMS5z_p1lS8u4hheHh-mBJ4KtMCTmsu_z3x7Jk-Jje0FH8tkkpIYW_4vjVvI0q2ENMyeZTZ9dk2rZE3w_0-l4_ld7Iskx-vJk3UKTwBEZVbgGbkLGHRvTXU4fypf-A4K7QNbLYsV02vaV-OfCnfCe8cRRvMmF4dcGNbnAGQOnIUI-KXGtVF0U2CZPrdu5MhRtk7UqsIW9ddLpZdQgZlmIK7jxIO_2zx9FicTF_0CUpDseQKHTFeIeXliw659ODRNlPiWHoGzJARy-1jEGoj3Y_jnYQ4gUO09DokOYS8M-9EEAUac6Lfb5sqE-zgW1MU=w1500-h321-no?authuser=0"
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