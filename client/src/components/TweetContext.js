import { createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

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
  
  return (
    <TweetContext.Provider
      value={{ ...tweet }}
    >
      {children}
    </TweetContext.Provider>
  );
};
