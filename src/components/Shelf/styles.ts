import styled, { keyframes } from "styled-components";

export const ShelfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px 20px;
`;

export const ShelfItem = styled.div`
  position: relative;
  flex: 0 0 25%;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding-bottom: 10px;

  @media (max-width: 900px) {
    flex: 0 0 45%;
  }
`;

export const ShelfItemImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ShelfItemPriceContainer = styled.div`
  min-height: 45px;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const ShelfItemOldPrice = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-decoration: line-through;
  color: #dc3545;
`;
export const ShelfItemPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
`;

export const ShelfItemProductName = styled.h2`
  font-size: 16px;
  margin: 10px 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ShelfItemDiscountFlag = styled.span`
  position: absolute;
  right: -5px;
  top: 10px;
  background: #28a745;
  padding: 5px 10px;
  font-size: 12px;
  color: white;

  @media (max-width: 900px) {
    font-size: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5.5px;
    width: 0;
    height: 0;
    border-bottom: 6px solid transparent;
    border-left: 4px solid green;
  }
`;
export const ShelfItemAddToCartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  background: #232323;
  border: none;
  margin: 40px auto 0 auto;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all;

  &.inCart {
    background: #dc3545;
  }

  &:hover {
    opacity: 0.7;
  }

  .icon {
    width: 20%;
  }

  .text {
    font-size: 12px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    width: 70%;

    @media (max-width: 900px) {
      font-size: 10px;
    }
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #232323;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
`;
