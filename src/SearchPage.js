import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  const { image, channel, verified, subs, noOfVideos, description } = {
    image:
      "https://yt3.ggpht.com/ytc/AAUvwnjfxXWpNNsdSmkZ0wozyVXVPffu4dd-ivs0t3skGw=s176-c-k-c0x00ffffff-no-rj-mo",
    channel: "Johnny M In The Mix ► Dj Activities (C')",
    verified: true,
    subs: "70,500",
    noOfVideos: "145",
    description:
      "Hello, i'm Johnny M and i'm from Athens/Greece. Playing and mixing music from 1999... My favorite genres ofcourse are Greek ...    ",
  };

  const videos = [
    {
      image:
        "https://i.ytimg.com/vi/IBZ81dnTUWw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD_p-RMd8yTODRQ_-7pg_9ngHyX9g",
      title: "Surreal World | Progressive House Set | 2017 Mixed By Johnny M",
      views: "98,323 vistas",
      timestamp: "hace 3 años",
    },
    {
      image:
        "https://i.ytimg.com/vi/VRuoR--LdqQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC9Zz6EAaTHAwP37GMkx_nACXdGMw",
      title:
        "Mix: will.i.am - Feelin' Myself ft. Miley Cyrus, Wiz Khañifa, French Montana",
      views: "113 M de vistas",
      timestamp: "hace 5 años",
    },
  ];

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={image}
        channel={channel}
        verified={verified}
        subs={subs}
        noOfVideos={noOfVideos}
        description={description}
      />
      <hr />
      {videos.map(({ image, title, views, timestamp }, i) => (
        <VideoRow
          key={i}
          subs={subs}
          image={image}
          title={title}
          views={views}
          timestamp={timestamp}
          channel={channel}
        />
      ))}
    </div>
  );
}

export default SearchPage;
