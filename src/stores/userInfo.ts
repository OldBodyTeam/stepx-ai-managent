import { adminInfoCreate } from "@/app/(home)/actions";
import { AdminLoginCreate200ResponseData } from "@/services";
import { atom } from "jotai";
import _ from "lodash";

export const userIdAtom = atom<number | undefined>();
export const userInfoCacheAtom = atom<
  AdminLoginCreate200ResponseData["user_info"]
>({});
const userInfoAtom = atom(
  async (get) => {
    const id = get(userIdAtom);
    const cache = get(userInfoCacheAtom) as Record<string, any>;
    if (_.get(cache, `${id}`)) {
      return _.get(cache, `${id}`);
    }

    // to cache fetch, use jotai-cache
    const postFetched = await adminInfoCreate();
    if (postFetched) {
      return postFetched.data;
    }

    return _.get(cache, `${id}`) || {};
  },
  (_, set, post: Record<string, any>) => {
    // only for hydrated data for now
    set(userInfoCacheAtom, (cache) => ({
      ...cache,
      [post.id]: post,
    }));
  }
);
export { userInfoAtom };
