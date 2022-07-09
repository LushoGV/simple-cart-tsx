import { Props } from "../types";
import { Button, ButtonCalc } from "../components/Button";
import { CardStyle } from "./CardStyle";
import { useProductContext } from "../context/ProductoContext";
import { useEffect, useState } from "react";

const Card = (props: Props) => {
  const { calcularProductos } = useProductContext();
  const [buttons, setButtons] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const modificar = (opValue: number, precio: number) => {
    let actualizados = count;

    if (opValue == 1) {
      actualizados = actualizados + 1;
      calcularProductos(1, precio);
    } else if (opValue != 1 && actualizados > 0) {
      actualizados = actualizados - 1;
      calcularProductos(2, precio);
    }
    setCount(actualizados);
  };

  useEffect(() => {
    count == 0 && setButtons(false);
  }, [count]);

  return (
    <CardStyle>
      <img src={props.image} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      {buttons ? (
        <section>
          <ButtonCalc onClick={() => modificar(2, props.price)}>-</ButtonCalc>
          <p>{count}</p>
          <ButtonCalc onClick={() => modificar(1, props.price)}>+</ButtonCalc>
        </section>
      ) : (
        <Button
          onClick={() => {
            setButtons(!buttons),
              setCount(1),
              calcularProductos(1, props.price);
          }}
        >
          agregar
        </Button>
      )}
    </CardStyle>
  );
};

export default Card;
