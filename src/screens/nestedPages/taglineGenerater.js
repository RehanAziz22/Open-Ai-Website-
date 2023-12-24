import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap';
import MyTextField from '../../components/MYTextfield'
import CachedIcon from '@mui/icons-material/Cached';
import CircularProgress from '@mui/material/CircularProgress';
const { Configuration, OpenAIApi } = require("openai");

export default function TaglineGenerator() {
    let [productName, setProductName] = useState('');
    let [responseText, setResponseText] = useState('The response will be shown here.')
    let [isloading, setLoader] = useState(false)
    let [btnVal, setBtnVal] = useState('')
    let [isloading2, setLoader2] = useState(false)
    let [isloading3, setLoader3] = useState(false)
    //OPEN AI

    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const generateNew = () => {
        setLoader3(true)
        if (productName !== "") {
            setProductName('')
            setResponseText('The response will be shown here.')
            setLoader3(false)
        }

    }
    const handleReload = () => {
        setBtnVal("reload")
        generateContent()
    }

    const handleSubmit = () => {
        setBtnVal("submit")
        generateContent()
    }
    const generateContent = async () => {
        if (btnVal == "reload") {

            setLoader(true)
        } if (btnVal == "submit") {
            setLoader2(true)
        }
        const res = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a tagline for an ${productName}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        console.log(res.data.choices[0].text)
        setResponseText(res.data.choices[0].text)
        setLoader(false)
        setLoader2(false)
    }
    console.log(productName)
    //   image_url = response.data.data[0].url;
    return (<>
        <Grid container sx={{ padding: 5, marginTop: 10 }}>

            <Grid item xs={12} >
                <Typography sx={{ textAlign: "left", width: "100%" }} variant="h4" component="h2">
                    Tagline Generator for Brands 🖊
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginY: 3, textAlign: "left" }} component="h2">
                    The online AI Tagline generator is designed to provide you with quick and accurate Tagline for your product
                </Typography>
            </Grid>



            <Grid item xs={12}>
                <Typography variant="body1" sx={{ marginTop: 5, marginBottom: 2, textAlign: "left" }} component="h2">
                    What product or service tagline do you want to create?
                </Typography>
            </Grid>
            <Grid item xs={12}   >
                <MyTextField sx={{ marginTop: 1 }}
                    label={"Enter Product Name...."}
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
                <Button style={{ width: "100px", marginRight: 2 }} onClick={handleSubmit} variant="primary">{isloading ? <CircularProgress sx={{ color: "white", fontSize: "16px", width: "20px" }} /> : 'Generate'}</Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px", marginRight: 2 }} onClick={handleReload} variant="primary">{isloading2 ? <CircularProgress sx={{ color: "white", fontSize: "16px", width: "20px" }} /> : <CachedIcon />}</Button>
                {/* </Grid>
            <Grid item sm={2} sx={{marginY:2,justifyContent:"center",display:"flex"}}> */}
                <Button style={{ width: "100px" }} onClick={generateNew} variant="primary">{isloading3 ? <CircularProgress sx={{ color: "white", fontSize: "16px", width: "20px" }} /> : 'New'}</Button>
            </Grid>
            <Grid item lg={12} sm={12}>
                <Box sx={{ backgroundColor: "#f5f5f5", borderRadius: "4px", padding: "20px", width: "100%" }}>

                    <Typography sx={{ textAlign: "left", width: "100%", padding: "10px", fontWeight: "bold" }} variant="h5" component="h2">
                        AI Tagline Suggestion For : {productName.toUpperCase()}
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Multiline"
                        fullWidth
                        multiline
                        value={responseText}
                        sx={{ lineHeight: "26px" }}
                        rows={10}
                        defaultValue="Default Value"
                    />
                </Box>
            </Grid>
        </Grid>
    </>
    )
}


