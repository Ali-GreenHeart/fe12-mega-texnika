import { Box, Button, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MegaTexnikaLogo from "../../assets/logo.png";
import NavLink from "../NavLink";
import BurgerMenu from "../BurgerMenu";

const texnikalarLinks = [
  {
    id: 0,
    to: "/texnikalar/eskavator",
    title: "Eskavator",
  },
  {
    id: 1,
    to: "/texnikalar/forklift",
    title: "Forklift",
  },
  {
    id: 2,
    to: "/texnikalar/mehsulun_adı",
    title: "Məhsulun Adı",
  },
];

const Header = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(255, 192, 31, 1)", py: 1 }}>
        <Container>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography>
              +994(12) 123 45 67 | Fətəli Xan Xoyski 111A, Bakı Azərbaycan
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <img src={MegaTexnikaLogo} style={{ objectFit: "contain" }} />
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            flexDirection="row"
            gap={1}
          >
            <NavLink to="/" title="Əsas səhifə" />
            <NavLink to="/about" title="Haqqımızda" />
            <NavLink
              to="/texnikalar"
              title="Texnikalar"
              links={texnikalarLinks}
            />
            <NavLink to="/icare" title="İcarə şərtləri" />
            <NavLink to="/blog" title="Blog" />
            <NavLink to="/elaqe" title="Əlaqə" />
          </Stack>
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            flexDirection="row"
            gap={1}
          >
            <Typography>Az</Typography>
            <Typography>En</Typography>
            <Typography>Ru</Typography>
          </Stack>
          <BurgerMenu />
        </Stack>
      </Container>
    </>
  );
};
export default Header;
