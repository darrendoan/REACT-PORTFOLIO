import React from "react";
import "./Hero.css"
import hero from "../../assets/hero-image.jpg"
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0daf0a57-312f-43ed-941e-13891de5c8cd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <>
            <div className="hero">
                <img src={hero} alt="hero image" />
                <h1>Hello! I'm Darren, full stack developer based in Australia.</h1>
                <p>I am currently a student of the Usyd Coding Bootcamp from Sydney, with 6 months experience in all aspects of full stack development.</p>
                <div className="hero-actions">
                    <a className="hero-resume" href="../../assets/myResume.pdf" download="resume.pdf"><button>My Resume</button></a>
                </div>
            </div>
            <div className="form">
                <Typography gutterBottom variant="h3" align="center" fontFamily={'outfit'}>
                    Contact Me
                </Typography>
                <Typography gutterBottom align="center" variant="h5"fontFamily={'outfit'}>Email: doandarren95@gmail.com</Typography>
                <Typography gutterBottom align="center" variant="h5"fontFamily={'outfit'}>Ph: 0406280085</Typography>
                <Card style={{maxWidth:1050, margin:"0 auto", borderColor:"black", border: "1.5px solid black"}}>
                    <CardContent style={{backgroundColor: '#EDF4F2'}} >
                        <form >
                            <Grid container spacing={1}>

                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder="Enter Your First Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder="Enter Your Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="Email" label="Email" placeholder="Enter Your Email Address" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="number" label="Phone Number" placeholder="Enter Your Phone Number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message" multiline rows={3} placeholder="Send a Message" variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" color="primary" variant="contained" fullWidth onSubmit={onSubmit}>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card> </div>

        </>


    )
}

export default Contact