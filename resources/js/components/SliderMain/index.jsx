import React from 'react'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'

import './styles.scss'

const imagesList = [
  {
    imageDesktop:
      'https://static.wixstatic.com/media/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png/v1/fill/w_1204,h_362,al_c,q_90,usm_0.66_1.00_0.01/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.webp',
    imageMobile:
      'https://static.wixstatic.com/media/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png/v1/fill/w_640,h_310,al_c,usm_0.66_1.00_0.01/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png',
    alt: 'Banner 1',
    link: '',
  },
  {
    imageDesktop:
      'https://static.wixstatic.com/media/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png/v1/fill/w_1204,h_362,al_c,q_90,usm_0.66_1.00_0.01/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.webp',
    imageMobile:
      'https://static.wixstatic.com/media/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png/v1/fill/w_640,h_310,al_c,usm_0.66_1.00_0.01/ca9c70_b0f63c7246354ba78d109f9290f4f677~mv2.png',
    alt: 'Banner 1',
    link: '',
  },
]

const settings = {
  items: 1,
  lazyload: true,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  speed: 300,
  controls: false,
  navPosition: 'bottom',
  autoplay: true,
  autoplayButtonOutput: false,
}

const SliderMain = () => {
  return (
    <div className="sliderMain">
      <TinySlider settings={settings}>
        {imagesList &&
          imagesList.map((item, index) => {
            const { imageDesktop, imageMobile, alt } = item
            return (
              <div key={`image-${index}`} className="sliderMainItem">
                <picture className="sliderMainItemPicture">
                  <source media="(max-width: 768px)" srcSet={imageMobile} />
                  <source media="(min-width: 769px)" srcSet={imageDesktop} />
                  <img
                    src={imageDesktop}
                    alt={alt}
                    className="sliderMainItemImage tns-lazy-img"
                  />
                </picture>
              </div>
            )
          })}
      </TinySlider>
    </div>
  )
}

export default SliderMain
