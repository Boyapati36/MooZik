import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchSuggestionResponse } from '../model/searchSuggestionsModel';
import { SearchSuggestionQueryParams } from '../model/searchSuggestionQueryParams';
import { SearchResponse } from '../model/searchModels';
import { SearchQueryParams } from '../model/searchQueryParam';
import { InfoResponse } from '../model/InfoResponse';
import { InfoQueryParams } from '../model/InfoQueryParams';
import { StreamingResponse } from '../model/StreamingResponse';
import { LyricResponse } from '../model/LyricRespnose';

const baseUrl: string = process.env.REACT_APP_YOUTUBE_API_ENDPOINT as string;

export const youtubeMusicApi = createApi({
  reducerPath: 'youtubeMusicApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_YOUTUBE_API_KEY as string);
      headers.set('X-RapidAPI-Host', process.env.REACT_APP_YOUTUBE_API_HOST as string);
      headers.set('content-type', process.env.REACT_APP_YOUTUBE_API_CONTENT_TYPE as string);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchSuggestions: builder.query<SearchSuggestionResponse, SearchSuggestionQueryParams>({
      query: (params: SearchSuggestionQueryParams) => ({
        url: '/search-suggestions',
        params
      }),
    }),
    getSearch: builder.query<SearchResponse, SearchQueryParams>({
      query: (params: SearchQueryParams) => ({
        url: '/search',
        params
      }),
    }),
    getInfo: builder.query<InfoResponse, String>({
      query: (params: String) => ({
        url: '/info',
        params: { "id": params } as InfoQueryParams,
      }),
    }),
    getStreamingData: builder.query<StreamingResponse, String>({
      query: (params: String) => ({
        url: '/streaming-data',
        params: { "id": params } as InfoQueryParams,
      }),
    }),
    getLyric: builder.query<LyricResponse, String>({
      query: (params: String) => ({
        url: '/lyric',
        params: { "id": params } as InfoQueryParams,
      }),
    }),
  }),
});

export const { useGetSearchQuery, useGetSearchSuggestionsQuery, useGetInfoQuery, useGetLyricQuery, useGetStreamingDataQuery } = youtubeMusicApi;
