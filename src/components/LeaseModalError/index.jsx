import { Dialog } from "@mui/material";
import PageContainer from "../PageContainer";
import PaperImg from "../PaperImg";
import error from "../../assets/LeaseModalError/error.png";


const LeaseModalError = () => {
  return (
    <PageContainer>
      <Dialog>
        <PaperImg src={error}/>
      </Dialog>
    </PageContainer>
  );
};
export default LeaseModalError;
