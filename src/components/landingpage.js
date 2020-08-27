import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component{
    render() {
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <img
                            src="https://i.imgur.com/YFwOIg1.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Hi, my name is <span className="name-color">Anish Singla</span></h1>
                            <p>I am an asipring Computer Programmer and currently studying at the <span className="name-color">University of Toronto </span>in Canada.</p>
                        </div>
                        </Cell>
                        
                        
                        
                            
                        
                    
                </Grid>
                
            </div>
        )
    }
}

export default Landing;