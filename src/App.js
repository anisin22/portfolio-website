import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Tooltip } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {

    
  return (
    <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color: "white"}}to="/">Anish Singla</Link>}  scroll>
            <div className='nav-bar'> 
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/skills">Skills</Link>
                <a href="/Anish_Singla_Resume.pdf">
                    Resume
                </a>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            </div>
        
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color: "black"}}to="/">Anish Singla</Link>}>
            <Navigation>
                <Link to="/aboutme" style={{fontSize:'20px'}}>About Me</Link>
                <Link to="/skills" style={{fontSize:'20px'}}>Skills</Link>
                <a href="/Anish_Singla_Resume.pdf" style={{fontSize:'20px'}}>
                Resume
                </a>
                <Link to="/projects" style={{fontSize:'20px'}}>Projects</Link>
                <Link to="/contact" style={{fontSize:'20px'}}>Contact</Link>
            </Navigation>
                            <div className ="social-link">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/anish-singla/" rel="noopener noreferrer" target="_blank">
                                    <Tooltip label="LinkedIn">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </Tooltip>
                                    
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/anisin22" rel="noopener noreferrer" target="_blank">
                                <Tooltip label="Github">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </Tooltip>
                                </a>
                            </div>
            <hr className="sidebar-line"/>
            <p className='sidebar-footer'>@2020 - Anish Singla</p>

        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
