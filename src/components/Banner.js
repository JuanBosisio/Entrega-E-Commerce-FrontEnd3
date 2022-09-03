import React, { useState } from "react";
import AsusLogo from "../img/logo/asus-logo-1.png"
import MSILogo from "../img/logo/msi-logo-1.png"
import IntelLogo from "../img/logo/intel-logo-2-1.png"
import AMDLogo from "../img/logo/amd-logo.png"
import AppleLogo from "../img/logo/apple-logo-1-1.png"
import SamsungLogo from "../img/logo/samsung-logo-6.png"


export default function Banner(){
    
    return(
        <div>
            <div class="brands">
                <ul>
                    <li><img src={AsusLogo}></img></li>
                    <li><img src={MSILogo}></img></li>
                    <li><img src={IntelLogo}></img></li>
                    <li><img src={AMDLogo}></img></li>
                    <li><img src={AppleLogo}></img></li>
                    <li><img src={SamsungLogo}></img></li>
                </ul>
            </div>
            <div className="div-slider">
                
            </div>
        </div>
    )
}