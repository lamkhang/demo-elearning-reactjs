// import * as ActionType from "./../constants/actionType";

let initState = {
  courseListOnline: [
    {
      id: 1,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 1",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 2",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 3",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 4",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 5",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 6",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 7,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 7",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 8,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 8",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 9,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 9",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 10,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 10",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 11,
      type: "online",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course online 11",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

  ],

  courseListOffline: [
    {
      id: 1,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 1",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 2",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 3",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 4",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 5",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 6",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 7,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 7",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 8,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 8",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 9,
      type: "ofline",
      img: "https://logodix.com/logo/2163252.png",
      title: "Course ofline 9",
      detail: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

  ],
}
const courseReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state }
  }

};

export default courseReducer;