// mock方法,详细的可以看官方文档

const api = [
  {
    url: "/api/recomendlist",
    type: "get",
    response: (config) => {
      return {
        msg: "success",
        code: 200,
        data: [
          {
            id: 17,
            cover:
              "https://nft.mangyang.com/files/25c82345bd2154c8adb4fad7a061ac97.png",
            name: "\u832b\u6d0b",
            amount: "38385.00",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 12485,
          },
          {
            id: 22,
            cover:
              "https://nft.mangyang.com/files/4bdc23a2d630823c3a6355cb68a085b2.png",
            name: "\u832b\u6d0b\u4ff1\u4e50\u90e8",
            amount: "12800.89",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 992,
          },
          {
            id: 23,
            cover:
              "https://nft.mangyang.com/files/85ad6e8af5143dcdc71acdbc63476af3.png",
            name: "\u832b\u6d0b\u8865\u7262",
            amount: "2187.00",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 0,
          },
          {
            id: 20,
            cover:
              "https://nft.mangyang.com/files/280483cecb9a640b8f5adee2cb8397b4.png",
            name: "\u7ec6\u96ea",
            amount: "969.29",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 612,
          },
          {
            id: 1,
            cover:
              "https://nft.mangyang.com/files/d4329732f78a8f911440264f4a05c744.png",
            name: "\u71b5\u6249",
            amount: "919.46",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 0,
          },
          {
            id: 19,
            cover:
              "https://nft.mangyang.com/files/bba52132ef4cd3fbff8663cf8255ef11.png",
            name: "\u74f6\u4e2d\u4e50\u571f",
            amount: "476.44",
            artist:
              "https://nft.mangyang.com/files/0e125e3c9e07f80bb32128475f17e63f.jpg",
            collect: 1,
          },
        ],
      };
    },
  },
  {
    url: "/api/rank",
    type: "get",
    response: (config) => {
      return {
        msg: "success",
        code: 200,
        data: [
          {
            id: 23,
            cover:
              "https://nft.mangyang.com/files/85ad6e8af5143dcdc71acdbc63476af3.png",
            name: "\u832b\u6d0b\u8865\u7262",
            range: "65.67",
            low: "49.70",
            pond: "2187.00",
          },
          {
            id: 17,
            cover:
              "https://nft.mangyang.com/files/25c82345bd2154c8adb4fad7a061ac97.png",
            name: "\u832b\u6d0b",
            range: "49.51",
            low: "2600.00",
            pond: "38385.00",
          },
          {
            id: 1,
            cover:
              "https://nft.mangyang.com/files/d4329732f78a8f911440264f4a05c744.png",
            name: "\u71b5\u6249",
            range: "47.06",
            low: "25.00",
            pond: "919.46",
          },
          {
            id: 20,
            cover:
              "https://nft.mangyang.com/files/280483cecb9a640b8f5adee2cb8397b4.png",
            name: "\u7ec6\u96ea",
            range: "25.63",
            low: "25.00",
            pond: "969.29",
          },
          {
            id: 22,
            cover:
              "https://nft.mangyang.com/files/4bdc23a2d630823c3a6355cb68a085b2.png",
            name: "\u832b\u6d0b\u4ff1\u4e50\u90e8",
            range: "18.89",
            low: "107.00",
            pond: "12800.89",
          },
          {
            id: 19,
            cover:
              "https://nft.mangyang.com/files/bba52132ef4cd3fbff8663cf8255ef11.png",
            name: "\u74f6\u4e2d\u4e50\u571f",
            range: "12.36",
            low: "10.00",
            pond: "476.44",
          },
        ],
      };
    },
  },
];

export default api;
