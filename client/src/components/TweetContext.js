import { createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

import moment from "moment";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const tweet = {
    tweetContents:"Where in the world am I?",
    displayName: "Carmen Sandiego ✨",
    username: "carmen-sandiego",
    avatarSrc:{ avatar },
    isRetweetedByCurrentUser: false,
    isLikedByCurrentUser:false,
  }

  const date = moment().format('h:mm A - MMM Do, YYYY');
  
  return (
    <TweetContext.Provider
      value={{ ...tweet, date }}
    >
      {children}
    </TweetContext.Provider>
  );
};
