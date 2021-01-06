import React, { CSSProperties } from 'react'

import { Carousel } from 'antd'

export const MyCarousel: React.FC = () => {

  const contentStyle: CSSProperties = {
    height: '240px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay className="mb-4">
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default MyCarousel;
