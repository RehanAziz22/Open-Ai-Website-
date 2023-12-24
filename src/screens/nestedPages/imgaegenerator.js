import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap';
import MyTextField from '../../components/MYTextfield'
import CachedIcon from '@mui/icons-material/Cached';

const { Configuration, OpenAIApi } = require("openai");

export default function ImageGenerator() {
    let [prompttext, setPrompt] = useState('');
    let [responseUrl, setResponseUrl] = useState('')

    //OPEN AI
    const generateNew = () => {
        setPrompt('')
        setResponseUrl('The response will be shown here.')
    }
    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const generateImage = async () => {
        const res = await openai.createImage({
            prompt: prompttext,
            n: 1,
            size: "1024x1024",
        });
        console.log(res.data.data[0].url)
        setResponseUrl(res.data.data[0].url)
    }
    //   image_url = response.data.data[0].url;
    return (<>
        <Grid container sx={{ padding: 5, marginTop: 10 }}>

            <Grid item lg={12} >
                <Typography sx={{ textAlign: "left", width: "100%" }} variant="h4" component="h2">
                    Generate Image
                </Typography>
            </Grid>
            <Grid item lg={12}>
                <Typography variant="body1" sx={{ marginY: 3, textAlign: "left" }} component="h2">
                    The online AI image generator is designed to provide you with quick and accurate image for your product
                </Typography>
            </Grid>



            <Grid item xs={12}>
                <Typography variant="body1" sx={{ marginTop: 5,marginBottom:2, textAlign: "left" }} component="h2">
                    What type of image do you want to create?
                </Typography>
            </Grid>
            <Grid item xs={12}   >
                <MyTextField sx={{ marginTop: 1}}
                    label={"Enter Text...."}
                    value={prompttext}
                    onChange={(e) => { setPrompt(e.target.value) }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ marginTop: 1, textAlign: "left" }} component="h2">
                    Enter as much information as possible for more accurate description.
                </Typography>
            </Grid>
            <Grid item xs={8} sm={4} lg={3} sx={{ marginY: 2, justifyContent: "space-between", display: "flex" }}>
                <Button style={{ width: "100px",marginRight:2 }} onClick={generateImage} variant="primary">Generate</Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px",marginRight:2 }} onClick={generateImage} variant="primary"><CachedIcon /></Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px" }} onClick={generateNew} variant="primary">New</Button>
            </Grid>
            <Grid item lg={12}>
                {responseUrl && <Image style={{width:"400px",height:"100%"}} src={responseUrl}/>}
            </Grid>
        </Grid>
    </>
    )
}


