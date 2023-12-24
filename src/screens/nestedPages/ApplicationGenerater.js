import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap';
import MyTextField from '../../components/MYTextfield'
import CachedIcon from '@mui/icons-material/Cached';
const { Configuration, OpenAIApi } = require("openai");

export default function ApplicationGenerator() {
    let [productName, setProductName] = useState('');
    let [responseText, setResponseText] = useState('The response will be shown here.')

    //OPEN AI

    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const generateNew = () => {
        setProductName('')
        setResponseText('The response will be shown here.')
    }
    const generateContent = async () => {
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate an Application for the following: ${productName}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        console.log(res.data.choices[0].text)
        setResponseText(res.data.choices[0].text)
    }
    console.log(productName)
    //   image_url = response.data.data[0].url;
    return (<>
        <Grid container sx={{ padding: 5, marginTop: 10 }}>

            <Grid item xs={12} >
                <Typography sx={{ textAlign: "left", width: "100%" }} variant="h4" component="h2">
                Generate Application 🖊
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginY: 3, textAlign: "left" }} component="h2">
                    The online AI Application generator is designed to provide you with quick and accurate Application for your product
                </Typography>
            </Grid>



            <Grid item xs={12}>
                <Typography variant="body1" sx={{ marginTop: 5,marginBottom:2, textAlign: "left" }} component="h2">
                    What type of Application do you want to Write?
                </Typography>
            </Grid>
            <Grid item xs={12}   >
                <MyTextField sx={{ marginTop: 1}}
                    label={"Enter Text...."}
                    value={productName}
                    onChange={(e) => { setProductName(e.target.value) }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ marginTop: 1, textAlign: "left" }} component="h2">
                    Enter as much information as possible for more accurate description.
                </Typography>
            </Grid>
            <Grid item xs={8} sm={4} lg={3} sx={{ marginY: 2, justifyContent: "space-between", display: "flex" }}>
                <Button style={{ width: "100px",marginRight:2 }} onClick={generateContent} variant="primary">Generate</Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px",marginRight:2 }} onClick={generateContent} variant="primary"><CachedIcon /></Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px" }} onClick={generateNew} variant="primary">New</Button>
            </Grid>
            <Grid item lg={12} sm={12}>
                <Box sx={{ backgroundColor: "#f5f5f5",borderRadius:"4px",padding:"20px",width:"100%" }}>

                    <Typography sx={{ textAlign: "left", width: "100%", padding:"10px",fontWeight:"bold" }} variant="h5" component="h2">
                        AI Application Suggestion For : {productName.toUpperCase()}
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Multiline"
                        fullWidth
                        multiline
                        value={responseText}
                        sx={{lineHeight:"26px"}}
                        rows={10}
                        defaultValue="Default Value"
                    />
                </Box>
            </Grid>
        </Grid>
    </>
    )
}


