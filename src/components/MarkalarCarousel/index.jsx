import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../assets/markalar/image 15.png"
import Img2 from "../../assets/markalar/image 16.png"
import Img3 from "../../assets/markalar/image 17.png"
import Img4 from "../../assets/markalar/image 18.png"
import Img5 from "../../assets/markalar/image 19.png"
import Img6 from "../../assets/markalar/image 20.png"
import Img7 from "../../assets/markalar/image 21.png"
import { Stack } from "@mui/material";


const MarkalarCarousel = () => {
    return (
        <Carousel
            autoPlay
            interval={2000}
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
        >
            <Stack flexDirection="row" alignItems="center">
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img1} />
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img2} />
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img3} />
            </Stack >
            <Stack flexDirection="row" alignItems="center">
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img4} />
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img5} />
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img6} />
                <img style={{ flexGrow: 0, objectFit: 'contain', height: 30 }} src={Img7} />
            </Stack >
        </Carousel>
    )
}
export default MarkalarCarousel
