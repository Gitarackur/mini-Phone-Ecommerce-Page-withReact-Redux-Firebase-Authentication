import React from 'react'

import styled from 'styled-components'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const DIVD= styled.div`
  color: white;
//   background-color: #0d2538;
  height: 150px;

  .clip-img{
    position: absolute;
    width: 100%;
    display: block;
  }

  .clip-img img{
    height: 100%;
  }


  .clip-path{
    background-color: #0d2538;
    position: absolute;
    right: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    clip-path: polygon(53% 0, 100% 0%, 100% 100%, 41% 100%);
    padding: 2%;
  }



  .clip-path div{
  }
`


const Carousel1 = () => {


    const options = {
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
    
            }
        },
    };

    

    return (
        <div className="container">

            <h1 className="p-4">Popular Categories</h1>

            <div className="p-2">
                <OwlCarousel items={3} autoplay ={false} mouseDrag={true} touchDrag={true} 
                    className="owl-theme" loop margin={30} 
                    nav={false}
                    dots={true}
                    {...options}
                >

                    <DIVD className="card item">
                        <div className="clip-img">
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_960_720.jpg"/>
                        </div>
                        <div className="clip-path">
                            <div className="">
                                <h3>Accesories</h3>
                                <p className="">Shop Now</p>
                            </div>
                        </div>
                    </DIVD>

                    <DIVD className="card item">
                        <div className="clip-img">
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_960_720.jpg"/>
                        </div>
                        <div className="clip-path">
                            <div >
                                <h3>Accesories</h3>
                                <p className="">Shop Now</p>
                            </div>
                        </div>
                    </DIVD>

                    <DIVD className="card item">
                        <div className="clip-img">
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_960_720.jpg"/>
                        </div>
                        <div className="clip-path">
                            <div className="">
                                <h3>Accesories</h3>
                                <p className="">Shop Now</p>
                            </div>
                        </div>
                    </DIVD>
                </OwlCarousel>
          </div>
        </div>
    )
}

export default Carousel1
