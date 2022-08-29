import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPosts } from '../../redux/cardSlice';
import {v4 as uuidv4} from 'uuid'
import Loading from '../../components/ui/Loading';
import Card from './Card';

const Cards = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.fetch.posts);
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  return !items.length ? (
    <Loading />
  ) : (
    <div>
      {items.map((item) => (
        <Card item={item} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Cards;
