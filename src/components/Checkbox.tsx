import React, { useState } from "react";

import { StyledInput, StyledLabel, StyledP } from "../style/DeliveryCss";
import { IDataType } from "../pages/Delivery";
import { CheckboxCss } from "../style/CheckboxCss";

const Checkbox = ({
  objNumber,
  objOrder,
  objId,
  objName,
  ea,
  totalPrice,
  discountPrice,
  price,
}: IDataType) => {
  const [isSelected, setIsSelected] = useState(false); 

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };

  const text = "";
  return (
    <CheckboxCss>
      <li>
        <StyledLabel htmlFor={text}>
          <StyledInput
            type="checkbox"
            id={text}
            name={text}
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
          <StyledP>{text}</StyledP>
        </StyledLabel>
      </li>
      <li>{objNumber}</li>
      <li>{objOrder}</li>
      <li>{objId}</li>
      <li>{objName}</li>
      <li>{ea}</li>
      <li>{totalPrice}</li>
      <li>{discountPrice}</li>
      <li>{price}</li>
    </CheckboxCss>
  );
};

export default Checkbox;
