import { tokenApi } from "@/utils/server-service";
import { atom } from "jotai";
export const adminInfoCreate = async () => {
  const response = await tokenApi.adminInfoCreate({});
  return response.data;
};
export const postId = atom(1);
export const postCache = atom({});
export const postData = atom(
  async (get) => {
    const id = get(postId);
    const cache = get(postCache);

    if (cache[id]) {
      return cache[id];
    }

    // to cache fetch, use jotai-cache
    const postFetched = await adminInfoCreate();
    if (postFetched) {
      return postFetched;
    }

    return cache[id] || EMPTY_POST_DATA;
  },
  (_, set, post: PostType) => {
    // only for hydrated data for now
    set(postCache, (cache) => ({
      ...cache,
      [post.id]: post,
    }));
  }
);
const userInfoAtom = atom();
export { userInfoAtom };
