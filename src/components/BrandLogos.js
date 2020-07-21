import React from "react";

const BrandLogos = () => {
    return (
        <div className="brand__logos--outer">
            <div className="brand__logos--container">
                <a className="brand__logo--canon" href="/category/canon"><img className="brand__image" src={require("../assets/brandLogo/canon_brand.jpg")} alt="brand-img" /> <img className="logo__canon" src={require("../assets/brandLogo/canon_logo.png")} alt="brand-logo" /></a>
                <a className="brand__logo--nikon" href="/category/nikon"><img className="brand__image" src={require("../assets/brandLogo/nikon_brand.jpg")} alt="brand-img" /> <img className="logo__nikon" src={require("../assets/brandLogo/nikon_logo3.png")} alt="brand-logo" /></a>
                <a className="brand__logo--sony" href="/category/sony"><img className="brand__image" src={require("../assets/brandLogo/sony_brand.jpg")} alt="brand-img" /> <img className="logo__sony" src={require("../assets/brandLogo/sony_logo.png")} alt="brand-logo" /></a>
                <a className="brand__logo--olympus" href="/category/olympus"><img className="brand__image" src={require("../assets/brandLogo/olympus_brand.jpg")} alt="brand-img" /> <img className="logo__olympus" src={require("../assets/brandLogo/olympus_logo.png")} alt="brand-logo" /></a>
                <a className="brand__logo--fujifilm" href="/category/fujifilm"><img className="brand__image" src={require("../assets/brandLogo/fujifilm_brand.jpg")} alt="brand-img" /> <img className="logo__fujifilm" src={require("../assets/brandLogo/fujifilm_logo.png")} alt="brand-logo" /></a>
                <a className="brand__logo--leica" href="/category/leica"><img className="brand__image leica" src={require("../assets/brandLogo/leica_brand.jpg")} alt="brand-img" /> <img className="logo__leica" src={require("../assets/brandLogo/leica_logo.png")} alt="brand-logo" /></a>
            </div>
        </div>
    );
}

export default BrandLogos;