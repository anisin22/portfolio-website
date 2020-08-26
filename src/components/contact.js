import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Tooltip } from 'react-mdl';
class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="landing-grid-two"> 
                
                    
                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <br/><br/>
                        <h3 style={{color:"white", fontFamily: 'monospace'}}>Lets Talk!</h3>
                        <div className="contact-list">
                        <List>
                            

                            <ListItem>
                            <a style={{ color: '#66ccff' }} href="mailto:singla.anish@yahoo.com">
                            <ListItemContent className="contact-word" style={{fontSize: '26px', fontFamily: 'monospace' , color: 'white'}}>
                            <div className="contact-word">
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            singla.anish@yahoo.com
                            </div>
                                    
                                </ListItemContent>
                                </a>
                            </ListItem>

                            <ListItem>
                            <a style={{ color: '#66ccff' }} href="mailto:anish.singla@mail.utoronto.ca">
                            <ListItemContent className="contact-word" style={{fontSize: '26px', fontFamily: 'monospace', color: 'white'}}>
                            <div className="contact-word">
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            anish.singla@mail.utoronto.ca
                            </div>
                                    
                                </ListItemContent>
                            </a>
                                
                            </ListItem>
                            
                            
                        </List>
                        </div>
                        <div className ="contact-link">
                                {/* LinkedIn */}
                                <a  href="https://www.linkedin.com/in/anish-singla/" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="LinkedIn">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </Tooltip>
                                    
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/anisin22" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Github">
                                    <i className="fa fa-github-square" aria-hidden="true" color="white"/>
                                </Tooltip>
                                </a>
                            </div>
                    </Cell>
                
                </Grid>
                
            </div>
        )
    }
}

export default Contact;