// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
import cardio from "../../assets/ramais.png";
import ensino from "../../assets/ensino.png";
import img01 from "../../assets/001.png";

// function CarouselComponent() {
//     return (
//         <Carousel slide={true}>
//           <Carousel.Item>
//             <img src={cardio}/>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src={ensino}/>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src={img01}/>
//           </Carousel.Item>
//         </Carousel>
//       );
//   }
  
//   export default CarouselComponent;



import axios from "axios"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel';

export default function Scraping() {
    const [ links, setLinks ] = useState([])

   useEffect(() => {

    const imagens = [
        ensino,
        img01
    ]

    setLinks(imagens)
        // axios.get('http://rota/santacasa/comunicacao/avisos')
        // .then((response) => {
        //     // console.log(response.data)
        //     setLinks(response.data)
        //     // console.log(response)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

    }, [])

    return (
        <>
            <div className="carousel-carousel">
            <Carousel data-bs-theme="dark" className="custom-carousel" >
                {links.map((item, index) => (
                    <Carousel.Item>
                        <div key={index}>
                            <a href={item[0]} classNameName="carousel-item">
                                <img src={item} width='800px' height='450px' className="d-block"/>
                            </a>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
            
        </>
    )
}