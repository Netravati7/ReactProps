const contacts = [
  {
    name: "Sanvi",
    imgURl:
      "data:image/jpeg;base64,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",
    tel: "8907654321",
    email: "sanvi@gamil.com"
  },

  {
    name: "Vinu",
    imgURl:
      "https://www.finetoshine.com/wp-content/uploads/2020/08/Baby-Wallpaper-Hd-Images.jpg",
    tel: "8907654123",
    email: "vinu@gamil.com"
  },
  {
    name: "Shivani",
    imgURl:
      "https://cdn.shopclues.com/images/thumbnails/77712/640/1/133235292-77712107-1516288666.jpg",
    tel: "8907612323",
    email: "shivani@gamil.com"
  },
  {
    name: "Arush",
    imgURl: "https://cdn.wallpapersafari.com/51/52/ojh78v.jpg",
    tel: "8907614444",
    email: "arush@gamil.com"
  }
];

export default contacts;