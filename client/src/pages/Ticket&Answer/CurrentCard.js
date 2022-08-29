import React, { useEffect } from 'react';
import moment from 'moment';
import PN from 'persian-number';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../../redux/Post/answerSlice';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../redux/cardSlice';
import Loading from '../../components/ui/Loading';
import AnswerInput from './AnswerInput';
import AnswerCard from './AnswerCard';

const CurrentCard = () => {
  //useSelector
  const post = useSelector((state) => state.fetch.currentPost.postMessages);
  const answer = useSelector((state) => state.answer.answer);
  const loading = useSelector((state) => state.fetch.loading);
  //useDispatch
  const dispatch = useDispatch();
  //useParams
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostById(id));
    dispatch(getAnswer({ id }));
  }, [dispatch, id]);

  return loading ? (
    <Loading />
  ) : (
    <div className=' w-[85%] sm:w-2/3 md:w-1/2 m-auto pt-16 flex flex-col justify-end items-center'>
      <div className=' w-full flex justify-start items-center'>
        <img
          className='border rounded-full bg-blue-100'
          src='https://img.icons8.com/color/42/000000/communicate-skin-type-7.png'
          alt='user'
        />
        <div className='mr-2'>
          <p className='font-Roboto text-[10px] text-gray-300'>
            {moment(post && post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <p className='text-xs'>
            کاربر<span>{post && PN.convertEnToPe(post.ticketNumber)}</span>
          </p>
        </div>
      </div>
      <div className='bg-blue-50 relative mt-2 font-Roboto w-full min-h-[110px] rounded-l-3xl rounded-br-3xl rounded-tr-[-30px]'>
        <p className=' text-sm text-purple-700 font-yekan p-4'>
          {post && post.ticketText}
        </p>
      </div>
      {answer ? (
        <AnswerCard
          answerMessage={answer.answer}
          createdAt={answer.createdAt}
        />
      ) : (
        <AnswerInput id={id} post={post} />
      )}
    </div>
  );
};

export default CurrentCard;

//after:content-[""] after:w-5 after:h-5 after:bg-cyan-50 after:absolute after:top-4 after:left-0 after:-translate-x-1/2 after:rotate-45 after:-z-10
