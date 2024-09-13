import React from 'react'
import "./separator.css"

const Separator = ({Text=""}) => {
  return (
    <div class="spacer">
        <div align="center">{Text}</div>
    <div class="mask"></div>
    </div>
  );
}

export default Separator;




