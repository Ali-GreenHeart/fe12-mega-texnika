import { Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import eror from "../assets/eror.png";
const LeaseError = () => {
  return (
    <Container>
      <Grid container>
        <Grid item margin="auto">
          <img style={{ fontSize: 10 }} src={eror} />
        </Grid>
        <Grid item textAlign="center">
          <Typography variant="h5">Sifarişiniz tamamlanmadi</Typography>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LeaseError;
