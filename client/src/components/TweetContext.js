import { createContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";

import moment from "moment";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const tweet = {
    tweetContents: "Where in the world am I?",
    displayName: "Carmen Sandiego ✨",
    username: "carmen-sandiego",
    avatarSrc: { avatar },
  };
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfReTweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("h:mm A - MMM Do, YYYY");

  return (
    <TweetContext.Provider 
      value={{
        ...tweet,
        date,
        numOfLikes,
        numOfReTweets,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
