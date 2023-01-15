import styled from "styled-components";
import { useContext } from "react";
import { TweetContext } from "../TweetContext";

const Stat = () => {
    const {
      numOfLikes,
      numOfReTweets
    }  = useContext(TweetContext);

  return (
    <Stats>
      <p>
        <span>{numOfReTweets}</span> Retweets
      </p>
      <p>
        <span>{numOfLikes}</span> Likes
      </p>
    </Stats>
  );
};

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;

  p {
    margin-right: 20px;
  }

  span {
    font-weight: bold;
  }
`;

export default Stat;
