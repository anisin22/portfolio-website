import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Skills extends Component{
    render() {
        return(
            <div>
                <Grid className="landing-grid">
                    
                <Cell col={12}>
                <h2 className='skill-title'>Technologies</h2>
                <hr className="language-bar"></hr>

                <div className='inline-lists'>

                    {/* List One */}
                <div className="skills-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fa fa-html5" aria-hidden="true"/>
                                    HTML 5
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-js-square" aria-hidden="true"/>
                                    JavaScript
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-react" aria-hidden="true"/>
                                    React/React-MDL
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-git" aria-hidden="true"/>
                                    Git
                                </ListItemContent>
                            </ListItem>

                            
                            
                        </List>
                        </div>

                        {/* List Two */}
                        <div className="skills-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    
                                    <i className="fab fa-css3-alt" aria-hidden="true"/>
                                    CSS 3
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-java" aria-hidden="true"/>
                                    Java
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fas fa-database" aria-hidden="true"/>
                                    Firebase
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fas fa-server" aria-hidden="true"/>
                                    Heroku
                                </ListItemContent>
                            </ListItem>

                            
                            
                        </List>
                        </div>

                        {/* List Three */}
                        <div className="skills-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    
                                    <i className="fab fa-python" aria-hidden="true"/>
                                    Python
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-cuttlefish" aria-hidden="true"/>
                                    C
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'monospace', color:'white'}}>
                                    <i className="fab fa-node" aria-hidden="true"/>
                                    Node.js
                                </ListItemContent>
                            </ListItem>

                            
                            
                        </List>
                        </div>
                    </div>
                

                </Cell>
                
                </Grid>
            </div>
        )
    }
}

export default Skills;