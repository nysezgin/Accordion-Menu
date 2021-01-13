import React from 'react'
import mobileLogoTop from "./images/illustration-woman-online-mobile.svg";
import mobileLogoBottom from "./images/bg-pattern-mobile.svg";
import desktopLogoBox from "./images/illustration-box-desktop.svg";
import desktopLogoTop from "./images/illustration-woman-online-desktop.svg";
import desktopLogoBottom from "./images/bg-pattern-desktop.svg";

function MobileLogo() {
    return (
      <>
        <div className="mobile-logo">
          <img src={mobileLogoBottom} alt="" className="mobile-logo__bottom" />
          <img src={mobileLogoTop} alt="" className="mobile-logo__top" />
        </div>
        <div className="desktop-logo">
          <img
            src={desktopLogoBottom}
            alt=""
            className="desktop-logo__bottom"
          />
          <img src={desktopLogoTop} alt="" className="desktop-logo__top" />
          <img src={desktopLogoBox} alt="" className="desktop-logo__top-box" />
        </div>
      </>
    );
}

export default MobileLogo
