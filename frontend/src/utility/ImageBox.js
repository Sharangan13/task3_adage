import React from 'react';

const ImageBox = ({
  imageUrl,
  boxWidth,
  boxHeight,
  borderRadiusTopLeft = '0px',
  borderRadiusTopRight = '0px',
  borderRadiusBottomLeft = '0px',
  borderRadiusBottomRight = '0px',
}) => {
  const boxStyle = {
    width: boxWidth,
    height: boxHeight,
    borderRadius: `${borderRadiusTopLeft} ${borderRadiusTopRight} ${borderRadiusBottomRight} ${borderRadiusBottomLeft}`,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
  };

  // Adjust objectFit to 'contain' if image width is less than box width
  const handleImageLoad = (e) => {
    const img = e.target;
    if (img.width < parseInt(boxWidth)) {
      img.style.objectFit = 'contain';
    }
  };

  return (
    <div style={boxStyle}>
      <img
        src={imageUrl}
        alt="Customize Box"
        style={imageStyle}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageBox;
