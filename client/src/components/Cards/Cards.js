import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import Card from './Card/Card';

const Cards = () => {
  const items = useSelector((state) => state.fetch.posts);

  return !items.length ? (
    <Loading />
  ) : (
    <div>
      {items.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Cards;
