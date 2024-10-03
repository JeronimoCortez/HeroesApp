import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeores/ListHeroes"

export const Home = () => {

  return <ListHeroes heroes={heroesData} title="Todos los heroes" />
}

