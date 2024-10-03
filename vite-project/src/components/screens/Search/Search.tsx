import { useEffect, useState } from "react";
import { useForm } from "../../../redux/hooks/useForm"
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHeroe/CardHero";
import styles from "./Search.module.css"

export const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });

  const {search} = values;

  const [heros, setHeros] = useState<IHeroes[]>([]);

  useEffect(() => {
    const result = heroesData.filter((h) => h.superhero.toLowerCase().trim().includes(search))  
    setHeros(result);
  }, [search])

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            Ingrese Heroe
          </InputGroup.Text>
          <Form.Control onChange={handleChange} type="text" name="search" />
        </InputGroup>
      </div>
      <div  className={styles.containerListHeros}>
        { heros.length > 0 ? (
            <>
              { heros.map((hero) => (
                  <div key={hero.id} style={{width:"80%"}}>
                    <CardHero hero={hero}/>
                  </div>
                ))}
                </> )
                : (
                <div>
                  <h2>No hay resultados</h2>
                </div>
                )}
      </div>
    </div>
  )
}

