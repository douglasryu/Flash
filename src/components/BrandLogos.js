import React from "react";

const BrandLogos = () => {
    return (
        <div className="brand__logos--outer">
            <div className="brand__logos--container">
                <div className="brand__logo--canon"><img className="brand__image" src={require("../assets/brandLogo/canon_brand.jpg")} alt="brand-img" /> <img className="logo__canon" src={require("../assets/brandLogo/canon_logo.png")} alt="brand-logo" /></div>
                <div className="brand__logo--nikon"><img className="brand__image" src={require("../assets/brandLogo/nikon_brand.jpg")} alt="brand-img" /> <img className="logo__nikon" src={require("../assets/brandLogo/nikon_logo3.png")} alt="brand-logo" /></div>
                <div className="brand__logo--sony"><img className="brand__image" src={require("../assets/brandLogo/sony_brand.jpg")} alt="brand-img" /> <img className="logo__sony" src={require("../assets/brandLogo/sony_logo.png")} alt="brand-logo" /></div>
                <div className="brand__logo--olympus"><img className="brand__image" src={require("../assets/brandLogo/olympus_brand.jpg")} alt="brand-img" /> <img className="logo__olympus" src={require("../assets/brandLogo/olympus_logo.png")} alt="brand-logo" /></div>
                <div className="brand__logo--fujifilm"><img className="brand__image" src={require("../assets/brandLogo/fujifilm_brand.jpg")} alt="brand-img" /> <img className="logo__fujifilm" src={require("../assets/brandLogo/fujifilm_logo.png")} alt="brand-logo" /></div>
                <div className="brand__logo--leica"><img className="brand__image leica" src={require("../assets/brandLogo/leica_brand.jpg")} alt="brand-img" /> <img className="logo__leica" src={require("../assets/brandLogo/leica_logo.png")} alt="brand-logo" /></div>
            </div>
        </div>
    );
}

export default BrandLogos;