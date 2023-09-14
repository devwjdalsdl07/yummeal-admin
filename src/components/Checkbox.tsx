import React from "react";

import { CheckboxCss } from "../style/CheckboxCss";
import { StyledInput, StyledLabel } from "../style/DeliveryCss";
interface IProps {
  ordercode: number;
  createdAt: string;
  shipment: number;
  userName: string;
  productName: string;
  productNumber: number;
  count: number;
  totalProductPrice: number;
  totalDiscount: number;
  totalOrderAmount: number;
  isSelected: boolean;
  handleCheckboxChange: () => void;
}
const Checkbox: React.FC<IProps> = ({
  ordercode,
  createdAt,
  shipment,
  userName,
  productName,
  productNumber,
  count,
  totalProductPrice,
  totalDiscount,
  totalOrderAmount,
  isSelected,
  handleCheckboxChange,
}) => {
  const mapShipmentStatus = (shipment: number) => {
    switch (shipment) {
      case 0:
        return "배송완료";
      case 1:
        return "준비중";
      case 2:
        return "배송중";
      case 3:
        return "주문취소";
      case 4:
        return "반품처리";
      default:
        return "알 수 없음";
    }
  };

  return (
    <CheckboxCss>
      <StyledLabel>
        <ul>
          <li>
            <StyledInput
              type="checkbox"
              checked={isSelected}
              onChange={handleCheckboxChange}
            />
          </li>
          <li>{ordercode}</li>
          <li>{mapShipmentStatus(shipment)}</li>
          <li>{createdAt}</li>
          <li>{userName}</li>
          <li>{productName}</li>
          <li>{productNumber}</li>
          <li>{count}</li>
          <li>{totalProductPrice.toLocaleString()}</li>
          <li>{totalDiscount.toLocaleString()}</li>
          <li>{totalOrderAmount.toLocaleString()}</li>
        </ul>
      </StyledLabel>
    </CheckboxCss>
  );
};

export default Checkbox;
