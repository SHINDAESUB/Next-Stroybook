import useSWR from 'swr';
import type { ApiContext, Category, Condition, Product } from 'types';

export type UseSearchProps = {
    category?: Category; // 카테고리
    conditions?: Condition[]; // 상품 상태
    userId?: number; // 소유한 사용자 id
    sort?: keyof Omit<Product, 'owner'>; // 정렬할 키
    order?: 'asc' | 'desc'; // 오름차순 또는 내림차순
    initial?: Product[]; // 초기 상태
};

export type UseSearch = {
    products: Product[]; // 검색에 일치한 상품 리스트
    isLoading: boolean; // 로드
    isError: boolean; // 에러
};

/**
 * 제품 API(목록 취득)의 커스텀훅
 * @param context API 컨텍스트
 * @param params 검색 조건
 * @returns 상품 목록과 API 호출 상태
 */
const useSearch = (
    context: ApiContext,
    {
        category,
        userId,
        conditions,
        initial,
        sort = 'id',
        order = 'desc',
    }: UseSearchProps = {},
): UseSearch => {
    const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`;
    const params = new URLSearchParams();

    category && params.append('category', category);
    userId && params.append('owner.id', `${userId}`);
    conditions &&
        conditions.forEach((condition) =>
            params.append('condition', condition),
        );
    sort && params.append('_sort', sort);
    order && params.append('_order', order);
    const query = params.toString();
    const { data, error } = useSWR<Product[]>(
        query.length > 0 ? `${path}?${query}` : path,
    );

    return {
        products: data ?? initial ?? [],
        isLoading: !error && !data,
        isError: !!error,
    };
};

export default useSearch;
