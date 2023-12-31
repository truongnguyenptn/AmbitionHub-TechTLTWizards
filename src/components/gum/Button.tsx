import React from "react";
import { Button } from "@nextui-org/react";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LikedIcon from "@material-ui/icons/FavoriteOutlined";
import ModeCommentIcon from "@material-ui/icons/ModeCommentOutlined";

export interface FollowMetadata {
  following: boolean;
  follow: () => Promise<any | void>;
  unfollow: () => Promise<any | void>;
}

function FollowButton({ data }: { data: FollowMetadata }) {
  return (
    <Button
      auto
      rounded
      bordered={data.following}
      onClick={() => (data.following ? data.unfollow() : data.follow())}
    >
      {!data.following ? "Follow" : "Unfollow"}
    </Button>
  );
}

function ReplyButton({ cta }: { cta: () => any }) {
  return (
    <div onClick={cta} style={{ cursor: "pointer" }}>
      <ModeCommentIcon fontSize="small" htmlColor="#0072F5" />
      <span className="ml-1">Reply</span>
    </div>
  );
}

export interface LikeMetadata {
  liked: boolean;
  like: () => Promise<any | void>;
  unlike: () => Promise<any | void>;
}

function LikeButton({ data }: { data: LikeMetadata }) {
  const handleLike = () => data.like();
  const handleUnlike = () => data.unlike();
  return (
    <div
      onClick={data.liked ? handleLike : handleUnlike}
      style={{ cursor: "pointer" }}
    >
      {data.liked ? (
        <div>
          <LikedIcon fontSize="small" htmlColor="#F31260" />
          <span className="ml-1">Loved</span>
        </div>
      ) : (
        <div>
          <LikeIcon fontSize="small" htmlColor="#F31260" />
          <span className="ml-1">Love</span>
        </div>
      )}
    </div>
  );
}

export { FollowButton, ReplyButton, LikeButton };
