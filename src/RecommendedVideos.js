import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  const videos = [
    {
      image:
        "https://i.ytimg.com/vi/QKG821etGJM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDrHvjwroeelYGk9_xiqHK7MjhkQ",
      title: "Yandel Ft. Maluma - Qué Vas A Hacer (Music Video)",
      views: "1.3 M de vistas",
      timestamp: "hace 2 días",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14Gj6M2crP1s_jvBkftusEJcqYi83bdE8U9kzpw=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/IBZ81dnTUWw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD_p-RMd8yTODRQ_-7pg_9ngHyX9g",
      title: "Surreal World | Progressive House Set | 2017 Mixed By Johnny M",
      views: "98,323 vistas",
      timestamp: "hace 3 años",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GgSQm5rchniX-LCHFOWiXnx1A-h37d_gfFlRA=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/PGJ43zaam_0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAJoeCCvBhKcxdaZ4cXEk0bVi7XRg",
      title: "BAD BUNNY - BOOKER T (Video Oficial)",
      views: "15 M de vistas",
      timestamp: "hace 3 días",
      channelImage:
        "https://yt3.ggpht.com/ytc/AAUvwnjSMssRx-Oeo-hpnM6hSyadbrKcvH_OTr3GbN94sQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/VRuoR--LdqQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC9Zz6EAaTHAwP37GMkx_nACXdGMw",
      title:
        "Mix: will.i.am - Feelin' Myself ft. Miley Cyrus, Wiz Khañifa, French Montana",
      views: "113 M de vistas",
      timestamp: "hace 5 años",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GgSQm5rchniX-LCHFOWiXnx1A-h37d_gfFlRA=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/MK9b4AkkTVg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKg9Ua8VJy2zFzZa4aCaOKqRtfpA",
      title:
        "G.L VS WWP POR 1500 USD 4 VS 4 AGE OF EMPIRES 2 DEFINITIVE EDITION",
      views: "15,441 vistas",
      timestamp: "Transmitido hace 12 horas",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GhNQCNAn77v3ohqZxThYnTXIdpKHNMjBff-0w=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/LBpyWbOrYr4/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDKUw-ZpoHyPFMyByq41ZLxXmAIiA",
      title:
        "River Plate - Palmeiras [0-3] | RESUMEN | SEMIFINALES (Ida) | CONMEBOL Libertadores 2020",
      views: "672,556 vistas",
      timestamp: "hace 12 horas",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GjMipct5Xw2B-umAgbdDKPXSziBS5WFVI34jg=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/HnKaaDcWOXw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLApOXPuIQcCFMYplhmn0Gk6fOV0Sw",
      title: "Why I Don't Like Machine Learning",
      views: "168,120 vistas",
      timestamp: "hace 1 año",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GgSTCjrwSQFEd8ZlZ4wtck8SWB-3KSyZN6DQg=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/hjX4hY0GMmI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC15_MlS3h9HwTeiirMONKNHBRfiQ",
      title: "Paying UI Designers To Design A Better App Than Me!",
      views: "158,569 vistas",
      timestamp: "hace 3 semanas",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14GiYIRhgmjHy6ayY93sk4WOV9Vt69pjWDgHvtA=s68-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      image:
        "https://i.ytimg.com/vi/C9ZYquB3zq0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZAD0s5JbDJomumOTbwIIzP3CgSQ",
      title: "Maluma - Medallo City (Official Video)",
      views: "6.7 M de vistas",
      timestamp: "hace 1 semana",
      channelImage:
        "https://yt3.ggpht.com/ytc/AAUvwnhTztkwixNaWM0sFt5y1OpzxisgYEYATLqXpMi3Gg=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/gPIKAp0gWbI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAO3APmFjznUtFXcfPb1NGcl2hwzw",
      title: "what it’s really like to reunite after 30 years",
      views: "1.9 M de vistas",
      timestamp: "hace 2 semanas",
      channelImage:
        "https://yt3.ggpht.com/a-/AOh14Ggt5K1cZd9JJ67vlxWpAHbOKdioCAj1_QBTaQ=s68-c-k-c0x00ffffff-no-rj-mo",
    },
  ];

  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map(({ image, title, views, timestamp, channelImage }, i) => (
          <VideoCard
            key={i}
            image={image}
            title={title}
            views={views}
            timestamp={timestamp}
            channelImage={channelImage}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
