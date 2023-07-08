import { Close, Edit } from "@mui/icons-material"
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const url = "http://localhost:3000/posts/"
const TestPage = ({ }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        handleGetCards()
    }, [])

    const handleGetCards = () => {
        axios.get(url).then(({ data }) => {
            setPosts(data)
        })
    }


    const handleAddCard = () => {
        const title = prompt('enter title')
        const author = prompt('enter author')
        const imgSrc = prompt('enter imgSrc')
        const newPost = { title, author, imgSrc }

        axios.post(url, newPost)
            .then(() => handleGetCards())
            .catch(() => {
                alert('neyise sehv gonderdin!')
            })
    }

    const handleDeleteCard = (id) => {
        axios.delete(url + id)
            .then(() => handleGetCards())
            .catch(() => alert('silinmedi!'))
    }

    const handleEditCard = (post) => {
        const title = prompt('enter  new title', post.title)
        const author = prompt('enter new  author', post.author)
        const imgSrc = prompt('enter new  imgSrc', post.imgSrc)
        if (title && author && imgSrc) {
            const newPost = { title, author, imgSrc }
            axios.put(url + post.id, newPost)
                .then(() => handleGetCards())
                .catch(() => alert('error on put'))
        } else {
            alert('duz yaz!')
        }
    }

    return (
        <Box p={2}>
            <h1>Welcome Test Page</h1>
            <Button onClick={handleAddCard}>ADD Card</Button>
            <Grid container>
                {
                    posts.map((post) => {
                        return <Grid item xs={12} sm={6} lg={3} key={post.id}>
                            <Paper elevation={10} sx={{ p: 2, m: 2 }}>
                                <IconButton onClick={() => handleDeleteCard(post.id)} color="error" sx={{ float: 'right' }}>
                                    <Close />
                                </IconButton>
                                <IconButton onClick={() => handleEditCard(post)} color="error" sx={{ float: 'right' }}>
                                    <Edit />
                                </IconButton>
                                <img src={post.imgSrc} alt="" style={{ width: "100%" }} />
                                <Typography textAlign="center" variant="h4" >{post.title}</Typography>
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}
export default TestPage
