import styled from "styled-components";
import { v4 } from "uuid";
import Button from "../../UI/Button";

const product = [
  {
    name: "Sushi",
    receapt: "Finest fish and veggies ",
    price: 22.99,
    id: v4(),
  },
  {
    name: "Schnitzel",
    receapt: "A german speciality",
    price: 16.0,
    id: v4(),
  },
  {
    name: "Barbecue Burger",
    receapt: "American, raw, meaty",
    price: 12.99,
    id: v4(),
  },
  {
    name: "Green Bowl",
    receapt: "Healthy...and green...",
    price: 19.99,
    id: v4(),
  },
];

export const Content = () => {
  return (
    <Container>
      {product.map((item) => (
        <div className="box">
          <div className="boxFirstItem" key={item.id}>
            <h2>{item.name}</h2>
            <p className="box-p">{item.receapt}</p>
            <p className="box-p-2">
              <strong>$</strong> {item.price}
            </p>
            <p className="line"></p>
          </div>
          <div>
            <div className="boxItem">
              <h2>Amount</h2>
              <input type="number" />
            </div>
            <Button />
          </div>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 564px;
  width: 110%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  padding: 30px 40px 40px 40px;

  .boxFirstItem {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 20px;
    padding-top: 15px;
  }
  .line {
    position: absolute;
    width: 77%;
    border-bottom: 1px solid #b0b0b0;
    padding-bottom: 120px;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box-p {
    font-style: italic;
  }
  .box-p-2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
  .boxItem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  input {
    height: 32px;
    width: 60px;
    border-radius: 6px;
  }
  h2 {
    display: inline-block;
  }
  button {
    margin-left: 80px;
    margin-top: 12px;
    font-size: 14px;
    color: #ffff;
  }
  button:hover {
    background-color: #4d1601;
    cursor: pointer;
  }
  button:active {
    background: #993108;
  }
`;
