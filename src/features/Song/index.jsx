import React from "react";
import AlbumList from "./components/AlbumList";

SongFeatures.propTypes = {};

function SongFeatures(props) {
  const albumList = [
    {
      id: 1,
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/9/d/0/99d0a9c69d082085c7943e091352080c.jpg",
      title: "Nhạc DJ hay nhất",
    },
    {
      id: 2,
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/7/d/1/e7d1f109b1aa2e3f3543d4b3a7b9e9a8.jpg",
      title: "Nhạc trẻ hay nhất",
    },
    {
      id: 3,
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/6/1/a/161a13f9f884c2776e231ad181122c80.jpg",
      title: "Nhạc vàng hay nhất",
    },
    {
      id: 4,
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/3/d/c/c3dcba812230420be2f98b0cf3efd3cb.jpg",
      title: "Nhạc kháng chiến hay nhất",
    },
    {
      id: 5,
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/3/2/d/e32dcb340a1623b9ac91db90e9fba4e3.jpg",
      title: "Nhạc thất tình hay nhất hay nhất",
    },
  ];
  return (
    <div>
      <h3>Có thể bạn sẽ thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default SongFeatures;
