import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material"
import PageContainer from "../../components/PageContainer"
import ekskavator from "../../assets/ekskavator_1.png"
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png"
import eskavator from "../../assets/eskavator.png"
import forklift from "../../assets/forklift.png"
import belas from "../../assets/belas.png"
import CategoryCard from "../../components/CategoryCard"
import PaperImg from "../../components/PaperImg"
import { useState } from 'react'

let imgList=[ekskavator,ekskavator_yukleyici,eskavator,forklift,belas]

let obj={
	titleOne:"Məhsulun adı",
	titleTwo:"Ekskavator",
	dateOne:'2017',
	paragraphs:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
	textOne:"Günlük icarə:",
	textTwo:"Aylıq icarə:",
	azn:"1000 AZN"
}


const Texnikalar = () => {
	const [boxImg,setBoxImg]=useState(ekskavator)

	const handleImage =(img)=>setBoxImg(img)

    return (
        <PageContainer>
            <Container className='background_radiuses_texture'>
				<Grid container alignItems="center" spacing={3}>
					<Grid item xs={8} md={1}>
						{
							imgList.map((list)=><Card key={list} sx={{mt:2,p:1,cursor:'pointer'}} >
								<CardMedia height="85" component="img" image={list} onClick={()=>handleImage(list)} />
							</Card>)
						}
                    </Grid>
                    <Grid item xs={8} md={5}>
                        <Card>
							<CardMedia height="350" component="img" image={boxImg}/>
						</Card>
                    </Grid>
					<Grid item xs={8} md={6}>
                        <Card sx={{p:2}}>
							<Box display={{display:'flex',justifyContent:'space-between'}}>
								<CardContent>
									<Typography variant='h5' color="#596C74">
										{obj.titleOne}
									</Typography>
									<Typography variant='h6' color="#686868">
										{obj.titleTwo}
									</Typography>
								</CardContent>
								<CardContent>
									<Typography sx={{ fontSize: 16 }} color="#B0ADAD">
										{obj.dateOne}
									</Typography>
								</CardContent>
							</Box>
							<Box>
								<CardContent>
									<Typography color="#69768B">
										{obj.paragraphs}
									</Typography>
								</CardContent>
							</Box>
							<Box display={{display:'flex',justifyContent:'space-between'}}>
								<CardContent>
									<Typography sx={{ fontSize: 18 }} fontWeight='bold' color="#596C74">
										{obj.textOne}
									</Typography>
									<Typography sx={{ fontSize: 18 }} fontWeight='bold' color="#686868">
										{obj.textTwo}
									</Typography>
								</CardContent>
								<CardContent>
									<Typography sx={{ fontSize: 18 }} fontWeight='bold' color="#FFC01F">
										{obj.azn}
									</Typography>
									<Typography sx={{ fontSize: 18 }} fontWeight='bold' color="#FFC01F">
										{obj.azn}
									</Typography>
								</CardContent>
							</Box>
							<Box>
								<CardActions>
									<Button fullWidth > Günlük icarə et</Button>
								</CardActions>
							</Box>
						</Card>
                    </Grid>
                </Grid>
			</Container>
        </PageContainer>
    )
}
export default Texnikalar
