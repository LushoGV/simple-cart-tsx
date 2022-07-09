import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api";
import { Producto } from "../types";

interface ProviderProps {
  children: JSX.Element | JSX.Element[]; //1 elemento o varios
}

export interface contexto {
  productos: Producto[];
  guardados: number;
  precioTotal: number;
  calcularProductos: (opValue: number, precio: number) => void;
}

export const ProductsContext = createContext<contexto>({} as contexto);

export const ProductoProvider = ({ children }: ProviderProps) => {
  const [productos, setProductos] = useState<Producto[]>([]); //api
  const [guardados, setGuardados] = useState<number>(0); //usuario
  const [precioTotal, setPrecioTotal] = useState<number>(0); //precioDelUsuario

  const calcularProductos = (opValue: number, precio: number) => {
    let cantProductos = guardados;
    let precioProductos = precioTotal;

    if (opValue == 1) {
      precioProductos += 1 * precio;
      cantProductos = cantProductos + 1;
    } else {
      precioProductos = precioProductos - 1 * precio;
      cantProductos = cantProductos - 1;
    }

    setGuardados(cantProductos);
    setPrecioTotal(precioProductos);
  };

  useEffect(() => {
    api.list().then(setProductos);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productos,
        guardados,
        precioTotal,
        calcularProductos,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  const {
    productos,
    guardados,
    precioTotal,
    calcularProductos,
  } = useContext(ProductsContext);

  return {
    productos,
    guardados,
    precioTotal,
    calcularProductos,
  };
};
