import React, { useEffect, useState } from 'react';
import CategoryList from '../Category/CategoryList';
import CategoryCard from './CategoryCard';
import Pagination from './Pagination/Pagination';
import categoryListData from './CategoryListData';
import { GET_BASE_URL } from '../../config';
import store from '../../store/store';

export default function Category() {
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postCount, setPostCount] = useState(1);
  const postsPerPage = 16;
  const pageNumber = Math.ceil(postCount / postsPerPage);

  useEffect(() => {
    store.subscribe(() => {
      fetchCardData();
    });
  }, []);

  const fetchCardData = () => {
    const queryString = Object.entries(store.getState()).map(el => {
      return el[1].categoryId ? `&${el[0]}=${el[1].categoryId}` : '';
    });
    const result = queryString.join('');
    fetch(
      `${GET_BASE_URL}:8002/posts?offset=${currentPage}&limit=${postsPerPage}${result}`
    )
      .then(response => response.json())
      .then(postdata => {
        setCardData(postdata.results);
        setPostCount(postdata.post_count);
      });
  };

  return (
    <>
      <CategoryList categoryListData={categoryListData} />
      <CategoryCard cardData={cardData} />
      <Pagination
        pageNumber={pageNumber}
        paginate={setCurrentPage}
        fetchCardData={fetchCardData}
        currentPage={currentPage}
      />
    </>
  );
}
