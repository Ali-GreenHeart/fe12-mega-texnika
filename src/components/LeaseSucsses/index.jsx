import { Grid, Typography } from "@mui/material";
import { Container} from "@mui/system";
import sucses from "../../assets/sucses.png";
const LeaseSuccses = () => {
  return (
    <Container>
      <Grid container>
        <Grid item margin="auto">
          <img style={{ fontSize: 10 }} src={sucses} />
        </Grid>
        <Grid item textAlign="center">
          <Typography variant="h5">Sifarişiniz qəbul edildi</Typography>
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
export default LeaseSuccses;
