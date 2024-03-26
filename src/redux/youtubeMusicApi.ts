import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SongDetailed } from 'ytmusic-api';
import { InfoQueryParams } from '../model/InfoQueryParams';
import { InfoResponse } from '../model/InfoResponse';
import { LyricResponse } from '../model/LyricRespnose';
import { StreamingResponse } from '../model/StreamingResponse';
import { SearchQueryParams, SearchSongParams } from '../model/searchQueryParam';
import { SearchSuggestionQueryParams } from '../model/searchSuggestionQueryParams';
import { SearchSuggestionResponse } from '../model/searchSuggestionsModel';
import { DiscoverContent } from '../model/DiscoverContent';

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
    getHome: builder.query<DiscoverContent[], undefined>({
      query: () => ({
        url: '/discover'
      }),
    }),
    getSearchSuggestions: builder.query<SearchSuggestionResponse, SearchSuggestionQueryParams>({
      query: (params: SearchSuggestionQueryParams) => ({
        url: '/serachSuggestions',
        params
      }),
    }),
    getSearch: builder.query<SongDetailed[], SearchSongParams>({
      query: (params: SearchQueryParams) => ({
        url: '/search',
        params
      }),
    }),
    getSearchSong: builder.query<SongDetailed[], SearchSongParams>({
      query: (params: SearchQueryParams) => ({
        url: '/searchSong',
        method: 'GET',
        params
      }),
    }),
    getInfo: builder.query<InfoResponse, String>({
      query: (params: String) => ({
        url: '/info',
        body: { "id": params } as InfoQueryParams,
      }),
    }),
    getStreamingData: builder.query<StreamingResponse, String>({
      query: (params: String) => ({
        url: '/streaming-data',
        body: { "id": params } as InfoQueryParams,
      }),
    }),
    getLyric: builder.query<LyricResponse, String>({
      query: (params: String) => ({
        url: '/lyric',
        body: { "id": params } as InfoQueryParams,
      }),
    }),
  }),
});

export const { useGetHomeQuery, useGetSearchQuery, useGetSearchSongQuery, useGetSearchSuggestionsQuery, useGetInfoQuery, useGetLyricQuery, useGetStreamingDataQuery } = youtubeMusicApi;
