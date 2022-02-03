import styled from "styled-components";

export const MinicartButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #232323;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    opacity: 0.7;
  }

  .quantity {
    position: absolute;
    top: 5px;
    left: 30px;
    background: white;
    font-size: 12px;
    color: #232323;
    font-weight: 600;
    margin: 0 10px;
    padding: 3px 5px;
    border-radius: 50%;
  }

  .total {
    color: white;
    font-weight: 600;
    margin-left: 15px;
  }
`;

export const MinicartPopup = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: 40%;
  z-index: 10;
  background: #e5e5e5;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const MinicartOverlay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.9);
`;

export const MinicartPopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 0 20px;
  box-shadow: 0 1px 5px rgb(122 122 122 / 20%);
  background: white;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const MinicartPopupBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  height: 70%;
  overflow-y: scroll;
`;

export const MinicartPopupEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;

  p {
    margin: 20px 0;
  }
`;

export const MinicartPopupBackButton = styled.button`
  background: #232323;
  border: none;
  font-size: 14px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding: 15px 25px;
  border-radius: 50px;
  transition: 0.3s all;

  &:hover {
    opacity: 0.7;
  }
`;

export const MinicartPopupItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  img {
    width: 10%;
    height: auto;
  }

  .name {
    width: 60%;
    font-size: 12px;

    @media (max-width: 900px) {
      width: 50%;
      font-size: 10px;
    }
  }

  .price {
    width: 15%;
    font-size: 12px;

    @media (max-width: 900px) {
      font-size: 10px;
    }
  }

  .delete {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const MinicartPopupCheckoutButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50px;
  margin: 20px auto;
  padding: 15px 30px;
  background: #232323;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  transition: 0.3s all;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 12px;
  }

  &:hover {
    opacity: 0.7;
  }

  .divisor {
    margin: 0 10px;
    width: 2px;
    height: 25px;
    background: white;
  }
`;
