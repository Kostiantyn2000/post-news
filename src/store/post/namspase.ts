import { IPost } from "@/types";

export namespace Post {
  export type TCreatePostPayload = IPost & {};
  export type TDeletePostPayload = {
    id: number;
  };
}
