import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PageContainer from "../../components/PageContainer";
import surunen from "../../assets/icare/surunen.png";
import surunen_buludlu from "../../assets/icare/surunen_buludlu.png";
import PaperImg from "../../components/PaperImg";
import AddIcon from "@mui/icons-material/Add";

const questions = [
  {
    id: 0,
    question: "Lorem Ipsum is simply dummy text of the printing and type?",
    answer: "Lorem Ipsum is simply",
  },
  {
    id: 1,
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer: "Lorem Ipsum is simply ",
  },
  {
    id: 2,
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
    answer: "Lorem Ipsum is simply dummy",
  },
  {
    id: 3,
    question: "Lorem Ipsum is simply dummy text of the printing?",
    answer: "Lorem Ipsum is simply",
  },
  {
    id: 4,
    question: "Lorem Ipsum is simply dummy text of the printing?",
    answer: "Lorem Ipsum is simply",
  },
  {
    id: 5,
    question: "Lorem Ipsum is simply dummy text of the printing?",
    answer: "Lorem Ipsum is simply",
  },
];

export const Lease = () => {
  return (
    <PageContainer>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container>
            <Grid
              container
              alignItems="flex-end"
              justifyContent="space-between"
              spacing={5}
            >
              <Grid item md={6} lg={4}>
                <Typography
                  variant="h5"
                  color="rgba(89, 108, 114, 1)"
                  fontFamily="Mulish"
                  fontWeight="700"
                  fontSize="50px"
                >
                  İcarə şərtləri
                </Typography>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <PaperImg src={surunen_buludlu} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <PaperImg src={surunen} />
                <Typography my={2} mt="50px">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="rgba(89, 108, 114, 1)"
            my={2}
            fontWeight="bold"
            textAlign="center"
            fontSize="30px"
            mt={20}
          >
            Tez-tez verilən suallar
          </Typography>
          <Box gap={2} mb={8}>
            {questions.map((question) => {
              return (
                <Accordion key={question.id} >
                  <AccordionSummary expandIcon={<AddIcon color="primary" />}>
                    <Typography>{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{question.answer} </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
