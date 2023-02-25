import { useState } from "react";
export const Food = (props) => {
  const [likeCounter, addLike] = useState(0);
  const [dislikeCounter, addDislike] = useState(0);
  if (likeCounter === 10) console.log(`We have a winner \n ${props.name}`);
  return (
    <div>
      <div>
        <img src={props.path} alt="" />
      </div>
      <h2>{props.name}</h2>
      <div>
        <span>👍 {likeCounter}</span>
        <span>👎 {dislikeCounter} </span>
      </div>
      <div>
        <button
          onClick={() => {
            addLike(likeCounter + 1);
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            addDislike(dislikeCounter + 1);
          }}
        >
          Dislike
        </button>
      </div>
    </div>
  );
};
