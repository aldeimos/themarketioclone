import React, { useState } from 'react';

import styles from './index.module.scss';

interface Photo {
  id: string;
  urls: {
    [key: string]: string;
  };
}

interface ProductSliderProps {
  photos: Photo[];
  imgResolution: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ photos, imgResolution }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextSlide = (e) => {
    e.preventDefault();

    if (currentIndex < photos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevSlide = (e) => {
    e.preventDefault();

    if (currentIndex >= 1) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(photos.length - 1);
    }
  };

  const renderedSlides = photos.map((img) => (
    <img
      key={img.id}
      className={styles.productSlider__image}
      src={img.urls[imgResolution]}
      alt="Товар"
    />
  ));

  return (
    <div className={styles.productSlider}>
      <button
        type="button"
        className={`${styles.productSlider__control} ${styles.productSlider__control_prev}`}
        onClick={handlePrevSlide}
      />
      <div
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        className={styles.productSlider__content}>
        {renderedSlides}
      </div>
      <button
        type="button"
        className={`${styles.productSlider__control} ${styles.productSlider__control_next}`}
        onClick={handleNextSlide}
      />
    </div>
  );
};

export default ProductSlider;
