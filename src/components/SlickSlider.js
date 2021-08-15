import React from 'react';
import Slider from 'react-slick'

import '../../node_modules/slick-carousel/slick/slick.css'; 
import '../../node_modules/slick-carousel/slick/slick-theme.css';

class SlickSlider extends React.Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: 5000,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                    }
                }
            ]
        }

        let datas = this.props.data

        return (
            <div className="slick-slider-comnponent container">
                <Slider {...settings}>
                    {datas.map(data => (
                        <div className="img-wrapper p-1">
                            <img src={data.strCategoryThumb} alt={data.strCategory} key={data.idCategory} className="img-thumbnail pointer-cursor" />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default SlickSlider