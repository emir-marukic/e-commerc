import React, { createContext, useContext } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const handleShopLinkClick = () => {
    console.log("handle shop click");
    const tabContainer = document.getElementById("tabContainer");
    if (tabContainer) {
      console.log("scrolling to the element");
      tabContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={handleShopLinkClick}>
      {children}
    </ScrollContext.Provider>
  );
};
