import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext({
  image: null,
  setImage: () => {}
});

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};