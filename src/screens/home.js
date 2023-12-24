import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate = useNavigate();
  let [cardDetails, setCardDetails] = useState([
    {
      title: "Generate Product Description 😍",
      description: "The online AI product description generator is designed to provide you with quick and accurate desription for your produt ",
      path: "productdescription",
      url:"https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/productdescription1.jpg"
    },
    {
      title: "Tagline Generator for Brands 🖊",
      description: " The online AI content generator is designed to provide you with quick and accurate content for your website or blog",
      path: "taglineGenerator",
      url:"https://images.squarespace-cdn.com/content/v1/57532abf27d4bd17be970a61/1605372735423-H5ERGZOSCFX0SKM2WN9V/Tagline.png?format=750w"
    }, {
      title: "Generate Tweets 🕊",
      description: " Looking for something witty to tweet? Let our AI-powered tweeting generator create something unique for you!.",
      path: "/tweetsGenerator",
      url:"https://miro.medium.com/max/1400/1*lBo_o6jr-Qtvo-2JX7TTvw.png"
    }, {
      title: "Generate Image 📷",
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      path: "imageGenerator",
      url:"https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png"
    }, {
      title: "Generate Applications 🖊",
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      path: "applicationGenerator",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRno3h1uew_C26_4UujOcPqrZuqIaCmD3Cx9Q&usqp=CAU"
    }, {
      title: "Rephrase Text 📑",
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      path: "rephraseText",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6KHlEg0kCBPkz4L_yj-cLshGPopG9UWcGg&usqp=CAU"
    }
  ])

  return (<>
    <Grid container sx={{ padding: 5, marginTop: 10 }}>
      <Grid item lg={12} >
        <Typography sx={{textAlign:"left",width:"100%"}} variant="h4" component="h2">
          Online Artificial Intelligence Content Generator 📃🔥
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="body1" sx={{ marginY: 3,textAlign:"left" }} component="h2">
          Start by picking any of the use-cases below to start generating AI Content
        </Typography>
      </Grid>
      <Grid item lg={12} >
        <Grid container spacing={2} sx={{margin:"auto",display:"flex",justifyContent:"space-between"}}>
          {cardDetails.map((e, i) => {
            return <Grid item xs={12} sm={6} md={4} key={i} sx={{padding:"10px",paddingLeft:0 }}>
              <Card>
                <Card.Img height={250} variant="top" src={e.url} />
                <Card.Body style={{display:"flex",justifyContent:"left",flexWrap:"wrap"}}>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text style={{textAlign:"left"}}>
                    {e.description}
                  </Card.Text>
                  <Button  onClick={() => { navigate(e.path) }} variant="primary">Generate</Button>
                </Card.Body>
              </Card>
            </Grid>
          })
          }
        </Grid>
      </Grid>
    </Grid>
  </>
  )
}
