import { Dialog, Button, DialogTitle, IconButton, DialogContent, Typography, TextField, Container } from "@mui/material"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import LeaseLoading from "../LeaseLoading";

const LeaseModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [step, setStep] = useState(0) // 0[normal], 1[pending],2[success], 3[error] 


    const handleLease = () => {
        setStep(1)

        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(({ data }) => {
        //         setStep(2)
        //     })
        //     .catch(() => {
        //         setStep(3)
        //     })
    }

    return (
        <>
            <Button onClick={() => setModalOpen(true)} fullWidth> Günlük icarə et</Button>
            <Dialog
                fullWidth
                maxWidth="md"
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={() => setModalOpen(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8
                        }}
                    >
                        <CloseIcon color="primary" />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ minHeight: "200px" }}>
                    {
                        step === 0 && (
                            <Container sx={{ py: 5 }} maxWidth="sm">
                                <Typography sx={{ mb: 2 }} variant="h5" color="secondary" textAlign="center" fontWeight={500}>Məlumatları doldurun</Typography>
                                <TextField sx={{ mb: 2 }} placeholder="Ad və Soyad*" />
                                <TextField sx={{ mb: 2 }} placeholder="Elaqe nomresi" />
                                <TextField sx={{ mb: 2 }} placeholder="E-mail*" />
                                <TextField sx={{ mb: 2 }} placeholder="Sirketin adi" />
                                <Button onClick={() => handleLease()} fullWidth> icarə et</Button>
                            </Container>
                        )
                    }
                    {
                        step === 1 && (
                            <LeaseLoading />
                        )
                    }
                    {
                        step === 2 && (
                            <p>success</p>
                        )
                    }

                    {
                        step === 3 && (
                            <p>error</p>
                        )
                    }

                </DialogContent>
            </Dialog>
        </>
    )
}
export default LeaseModal
