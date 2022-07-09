import Card from "./components/Card";
import { ButtonTotal } from "./components/Button";
import { Grid } from "./components/Grid";
import { useProductContext } from "./context/ProductoContext";

const App: React.FC = () => {
  const { productos, guardados, precioTotal } = useProductContext();

  return (
    <main>
      <header>Estampitiency</header>
      <Grid>
        {productos != null &&
          productos.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title}
                price={element.price}
                description={element.description}
                image={element.image}
                id={element.id}
              />
            );
          })}
      </Grid>
      <ButtonTotal>
        {guardados == 0
          ? `${guardados} productos`
          : `${guardados} productos (total: ${precioTotal})`}
      </ButtonTotal>
    </main>
  );
};

export default App;
