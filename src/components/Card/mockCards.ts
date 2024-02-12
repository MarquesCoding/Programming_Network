import {CardProps} from "./Card";

const cards: CardProps[] = [
  {
    user: {
      postComment: "Great video!",
      postTitle: "How to make a cake",
      name: "John Doe",
      avatar: "https://example.com/avatar1.jpg",
    },
    meta: {
      date: "2024-02-10",
      likes: 100,
      comments: 20,
      downVotes: 5,
    },
  },
  {
    user: {
      postComment: "Interesting content!",
      postTitle: "How to make a pizza",
      name: "Jane Smith",
      avatar: "https://example.com/avatar2.jpg",
    },
    meta: {
      date: "2024-02-09",
      likes: 150,
      comments: 30,
      downVotes: 10,
    },
  },
  {
    user: {
      postComment: "Nice video!",
      postTitle: "How to make a sandwich",
      name: "Alice Johnson",
      avatar: "https://example.com/avatar3.jpg",
    },
    videoUrl: "https://example.com/video3.mp4",
    meta: {
      date: "2024-02-08",
      likes: 120,
      comments: 25,
      downVotes: 8,
    },
  },
  {
    user: {
      postComment: "Awesome content!",
      postTitle: "How to make a burger",
      name: "David Brown",
      avatar: "https://example.com/avatar4.jpg",
    },
    videoUrl: "https://example.com/video4.mp4",
    meta: {
      date: "2024-02-07",
      likes: 200,
      comments: 40,
      downVotes: 15,
    },
  },
  {
    user: {
      postComment: "Keep it up!",
      postTitle: "How to make a salad",
      name: "Emily White",
      avatar: "https://example.com/avatar5.jpg",
    },
    videoUrl: "https://example.com/video5.mp4",
    meta: {
      date: "2024-02-06",
      likes: 180,
      comments: 35,
      downVotes: 12,
    },
  },
];

export default cards;
