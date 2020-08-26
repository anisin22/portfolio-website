import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component{
    render() {
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <img
                            src="https://lh3.googleusercontent.com/9x_ZwPRr5z_oXZ99xMlmpbiifFeOBBt9w34sRmykCY6LQcVbESWk89UKUKq6Rmam4_iKBp12C9g2Kpy4wyZxE1Q5S-TZLh7DVC6BRdvyYABlwJSGemjP6wdCDI3ipBWpEfhK-Y4Oxn_3ZonUp4xW_WVSLwdSUF-fm27WdGaOCySE6D8_c24KJQxx68-lSHrzRfceZHuAOkHFUdBVmK-MVuqPatFASxbK9qFyAOXfjOKhYkRAC4orPBLPFlDdpAVktaLWRXmlDZxc63OCiYJHo9DPxgP_08qYiDjUiytgxZPMvAWHnmn7tRTnArOmiB1PD2i-plAkpLlFXShMxSDJ39s-Ty1so2Xh4wdYot57auGH3VyJiGK_gU0ka5QsVFXV75nS7bRSosL96k5d9hrRSaZED3mbyWUd-OwUEnWvwaXMZls1kb7UwUgYPOK7DkzBVsnov6rxq0Rv82a3XUynnl7rniKYV0s8T9GMOBXKiFgWdh_VeWOFPEqKL6Z1b6XxccQJJbvQIGry6vZsK0DTBAXXKxFGPO27oxpBRv1HnDcbFCbPaBP6n7ZPbDRK9J-zOyEawM6h52kf2ABt4Kjc362LdR_SZyYTZ4bEi2aLg0YbSYCEMoTM0gssHh9kTtFzaE2OYaYy2YjmqdRfcCUJAoenwRJR3PL_1cBKAeTzA-CyVPaTTN00CUkw7tcPg2A=s920-no?authuser=0"
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