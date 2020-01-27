import React from 'react';
import './reactLogo.style.css';


interface ReactLogoProps { }
 
const ReactLogo: React.SFC<ReactLogoProps> = () => (<>
  <div className="react-box">
    <div className="react-atom">
      <div className="react-nucleus" />
    </div>
  </div>
</>);

export default ReactLogo;

