
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {WordpressState, Wordpress, PopularPost, Post} from './types'
import axios from 'axios';

export const state = () => ({
    wordpress: undefined,
    error: false,
    loading: false,
    pageType: ''
});

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<WordpressState, RootState> = {
  async nuxtServerInit({ commit }, {$sentry}) {
    try{
      //$sentry.captureMessage('New visitor ioan.dev', 'info');
      let response = await axios({
        url: process.env.PROXY_URL})
      let payload: Wordpress = response && response.data;
      commit('wordpressLoaded', payload);
    }catch(error) {
      //$sentry.captureException(error)
      console.log("An error has occured getting the posts.");
      commit('wordpressError');
    }
  }
};

export const getters: GetterTree<WordpressState, RootState> = {
    allPosts(state): readonly Post[] {
        const { wordpress } = state;
        const allPosts = (wordpress && wordpress.posts) || [];

        if (allPosts.length != 0) {

          const allPosts2 = allPosts.map(p => {
            let thumbnail = ""
            if (p.thumbnails.length != 0) {
              thumbnail = p.thumbnails[0].details.full.url
            }

            return {
              title: p.title,
              html: p.html,
              slug: p.slug,
              thumbnails: p.thumbnails,
              created_at: p.created_at,
              isPost: p.isPost,
              json: p.json,
              excerpt: p.excerpt,
              tags: p.tags,
              img: thumbnail,
              img_alt: p.title,
              link: p.link
            }
          })

          return allPosts2
        }

        return allPosts
    },
    popularPosts(state): readonly PopularPost[] {
        const { wordpress } = state;
        const popularPosts = (wordpress && wordpress.popularPosts) || [];
        return popularPosts
    },
    loading(state): boolean {
        const { loading } = state;
        return loading
    },
    pageType(state): string {
        const { pageType } = state;
        return pageType
    },
};

export const mutations: MutationTree<WordpressState> = {
    wordpressLoaded(state, payload: Wordpress) {
        state.error = false;
        state.wordpress = payload;
    },
    wordpressError(state) {
        state.error = true;
        state.wordpress = undefined;
    },
    setLoading(state, val: boolean) {
      state.loading = val
    },
    setPageType(state, val: string) {
      state.pageType = val
    }
};
