import React, { Component } from 'react';
import { Grid, Cell, Tooltip } from 'react-mdl';

class Projects extends Component{
    render() {
        return(
            <div>
                    <Grid className="about-grid">
                        <Cell col={12}>
                          <div className="content">
                              <h2>Projects</h2>
                              <hr></hr>
                              <br></br><br></br>
                              <h3 className="name-color">Portfolio Webpage</h3>
                              <p>(<span className="name-color">2020</span>) Personal Website to showcase my projects, technical skills and experiences. The website is made with HTML, CSS, React, and React MDL. Hosted on Github Pages.</p>
                              <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> HTML, CSS, React, React-MDL</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22/portfolio-website" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                <a style={{ color: '#66ccff' }} href="/" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Live Demo">
                                    <i className="fas fa-play" aria-hidden="true" color="white"/>
                                </Tooltip>
                                Live Demo
                                </a>
                            </div>
                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Discord Guild Bot</h3>
                              <p>(<span className="name-color">2020</span>) Personal Discord Bot I made for my server to help fellow members and guildies communicate with each other, join the guild and various other activities. The bot was made using Discord.js, JavaScript, Node.js, Firbase and various API's. Core Features include welcoming new members and instructing them towards how to apply to join the guild, a waiting list stored in Firebase, a Guild Bank that guildies can access, view, and update also stored in Firebase. There are also fun commands such as using an API and sending a random dog picture once a day and being able to send the bot a picture and finding out what anime/manga that picture may have come from. It is also hosted on Heroku and can run by itself without help from any external sources.</p>
                              <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> JavaScript, Discord.js, Node.js, Firebase, Heroku</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22/sxstimbot-v1" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                
                            </div>
                            <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Realtime Online Chat Room</h3>
                              <p>(<span className="name-color">2020</span>) Developed an online chat room that anyone can join and talk in, using Node.js and Express to handle server side operations and Socket.io to implement web sockets which send and receive data. Made simple front end with HTML and CSS, deployed via Heroku. </p>
                              <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> Node.js, Express, Socket.io, HTML, CSS, Heroku</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22/online-chat-room" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                <a style={{ color: '#66ccff' }} href="https://onlinechatroom.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Live Demo">
                                    <i className="fas fa-play" aria-hidden="true" color="white"/>
                                </Tooltip>
                                Live Demo
                                </a>
                            </div>

                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Chess Minimax AI</h3>
                              <p>(<span className="name-color">2020</span>) I made a chess AI, which has various levels of difficulty. It uses the Limited Depth Minimax with Alpha Beta Pruning Algorithm and I implemented it on a basic webpage using HTML, CSS, Chess.js, jQuery, and JavaScript.</p>
                              <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> HTML, CSS, jQuery, JavaScript, Chess.js, AI</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22/Chess-AI" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                <a style={{ color: '#66ccff' }} href="http://chess-ai.rf.gd/" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Live Demo">
                                    <i className="fas fa-play" aria-hidden="true" color="white"/>
                                </Tooltip>
                                Live Demo
                                </a>
                            </div>
                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              
                              <h3 className="name-color">Text Color Machine Learning</h3>
                              <p>(<span className="name-color">2020</span>) I made a basic website which displays two boxes. The first box is the training model where you can train the model and see the data set, while the 2nd box shows the completed version. I implemented it on a basic webpage using HTML, CSS, Brain.js, and JavaScript.</p>
                              <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> HTML, CSS, JavaScript, Brain.js, ML</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22/Basic-Text-Color-ML" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                <a style={{ color: '#66ccff' }} href="https://colorml.neocities.org/" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Live Demo">
                                    <i className="fas fa-play" aria-hidden="true" color="white"/>
                                </Tooltip>
                                Live Demo
                                </a>
                            </div>

                            <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Greenify</h3>
                              <p>(<span className="name-color">2021</span>) Made a Fitness tracking React Native app with a group of four people utilizing React Native, Expo, Firebase, Javascript and Figma. The app also tracked your location in real time to calculate accurately how far you ran and updated to a real time leaderboard which kept track of your score. We also had user authentication so we could store everyone's score on a global leaderboard. The purpose of the app was to get individuals out of the house and promote activity. </p>
                              <img
                            src="https://cdn.discordapp.com/attachments/760223235501064242/841842801833803806/Logo.png"
                            alt="avatar"
                            className="h2-img"
                        />
                        <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> HTML, CSS, React, React Native, Figma, Javascript, Expo, Firebase</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/Samyakk123/TOHacks" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                <a style={{ color: '#66ccff' }} href="https://youtu.be/r1fjqyZQuBM" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Live Demo">
                                    <i className="fas fa-play" aria-hidden="true" color="white"/>
                                </Tooltip>
                                Demo
                                </a>
                            </div>

                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Budget for the Masses</h3>
                              
                              <p>(<span className="name-color">2020</span>) This is an app that I made with a group of four during Hack the Valley 4. We used Andriod Studio and Dialogflow to make the app. The reasoning behind the app was be used by anyone and by using our app individuals can aim towards financial freedom by building healthy budgeting habits.</p>
                              <img
                            src="https://raw.githubusercontent.com/ljz3/Hackathon---Hack-the-Valley-4/master/app/src/main/res/drawable-v21/logo.png"
                            alt="avatar"
                            className="h1-img"
                        />
                        <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> Andriod Studio, Dialogflow</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/ljz3/Hackathon---Hack-the-Valley-4" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                
                            </div>
                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">Serein</h3>
                              <p>(<span className="name-color">2020</span>) A website I made with a group of three during NSBEHacks 2020. We made the website using HTML, CSS, and React. We used Google's Cloud Tech Analysis to read through our resumes and give us certain scores depending on how many keyworks we hit and then used an API to convert that infomation into a radar chart to display. Serein's purpose was to simplifly an individual's resume and turn them into radar charts for easy access by the recruiter. Instead of relying on traditional AI and ML means of sifting through resumes, Serein uses a chart to compare individuals.</p>
                              <img
                            src="https://raw.githubusercontent.com/ShirleyofHuang/Serein/master/serein/src/Components/serein.jpg"
                            alt="avatar"
                            className="h2-img"
                        />
                        <p style={{fontSize:'85%'}}><span className="name-color">Tags:</span> HTML, CSS, React, Cloud Tech Analysis</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/ShirleyofHuang/Serein" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                
                            </div>

                              <hr style={{ width: '85%', borderTop: '2px solid white'}}></hr>
                              <h3 className="name-color">More Projects in My Github</h3>
                              <p>Check it out!</p>
                              <div className ="p-link">
                                <a style={{ color: '#66ccff' }} href="https://github.com/anisin22?tab=repositories" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="Github">
                                    <i className="fab fa-github" aria-hidden="true"/> 
                                    </Tooltip>
                                    Github
                                </a>
                                
                            </div>
                          </div>  
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;