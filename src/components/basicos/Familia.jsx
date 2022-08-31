import React, {cloneElement} from "react";

const Familia = (props) => {
  return (
    <div>
        {props.children.map((child) =>{
            return cloneElement(child, {...props})
        })}
    </div>
  );
};

export default Familia;
