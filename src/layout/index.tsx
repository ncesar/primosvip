import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Item } from '../components/Item';
import axios from 'axios';

type HomepageResponse = {
  full_name: string;
  description: string;
  html_url: string;
};

export const Homepage = () => {
  const [items, setItems] = useState([]);
  console.log(items, 'items');

  useEffect(() => {
    axios
      .get(
        'http://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc',
      )
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      {items.map((item: HomepageResponse) => {
        return (
          <Item>
            <p>{item.full_name}</p>
            <p>{item.description}</p>
            <a href={item.html_url} target="_blank" rel="noreferrer">
              Acessar repositorio
            </a>
          </Item>
        );
      })}
    </div>
  );
};
