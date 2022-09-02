import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetProductsQuery } from '../api';
import getSortedProducts from '../utils/getSortedProducts';
import { setSort } from '../store/sort';

export default function useProductsList() {
    const sort = useSelector(state => state.sort);
    const dispatch = useDispatch();
    const { data: products, isLoading, isSuccess } = useGetProductsQuery();

    const changeSort = useCallback(e => dispatch(setSort(e.target.value)), [dispatch])

    return {
        sort,
        isLoading,
        isSuccess,
        products: isSuccess ? getSortedProducts(products, sort) : [],
        changeSort,
    }
}
