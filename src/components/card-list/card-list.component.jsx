import { useEffect, useState } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
    const { monsters, search } = props;
    const [filteredMonsters, setFilteredMonsters] = useState([]);
    
    useEffect(() => {
      setFilteredMonsters(() => {
        return monsters.filter((monster) =>
          monster.name.toLocaleLowerCase().includes(search)
        );
      });
    }, [search, monsters]);


    return (
      <div className="card-list">
        {filteredMonsters.map((filteredMonster) => {
          const { name, email, id } = filteredMonster;
          return (
            <div key={id}>
              <Card name={name} email={email} id={id} />
            </div>
          );
        })}
      </div>
    );
}

export default CardList;
