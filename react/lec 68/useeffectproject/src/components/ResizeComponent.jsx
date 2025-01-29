import React, { useState, useEffect } from 'react';

function ResizeComponent() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
const handleResize = () => setWindowWidth(window.innerWidth);

window. addEventListener('resize', handleResize);

return () =>{
window. removeEventListener('resize', handleResize);
};
}, []);
//it willl run only on first render

return (
<div>
<h1>Window width: {windowWidth}px</h1>
</div>);
}
export default ResizeComponent;