import Project1 from "../assets/Tictactoe1.JPG";
import Sc1 from "../assets/Tictactoe1.JPG";
import Sc2 from "../assets/tictactoe2.JPG";
import Sc3 from "../assets/tictactoe3.JPG";


import Project2 from "../assets/box-office1.JPG";
import grid1 from '../assets/Box-office2.JPG'
import grid2 from '../assets/Box-office3.JPG'
import grid3 from '../assets/Box-office4.JPG'

import Project3 from "../assets/chat-app1.JPG"
import grid4 from '../assets/chat-app2.JPG';
import grid5 from '../assets/chat-app3.JPG'
import grid6 from '../assets/chat-app4.JPG'


export const ProjectData = () => {
  return [
    {
      id: 1,
      title: "Tic Tac Toe",
      DisplayImage: Project1,
      Description: `This is a simple game which we all have played in chilhood and also known as O-X game.
                    I have created this project using React and for styling used styled-component. In this game user can chechk the game 
                    history of his/her moves and also undo the move.`,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "https://github.com/AnshikaSethiya/TicTacToe",
      LiveUrl: "#",
    },
    {
      id: 2,
      title: "Box-office-app",
      DisplayImage: Project2,
      Description: `This project fetches the data from tvmaze API and shows it to the user as per their search.
       Users can search for either shows or actors and can also add them to Favourites by clicking on the star `,
      screenshots: [grid1, grid2, grid3],
      githubLink: "https://github.com/AnshikaSethiya/React-Box-office-app",
      LiveUrl: "https://anshikasethiya.github.io/React-Box-office-app/#/",
    },
    {
      id: 3,
      title: "Firebase Chat App",
      DisplayImage: Project3,
      Description: `This chat app is created using firebase and react. Here users can sign up using Facebook or Google and create their own chat room to chat and share files.
       The chat room is fully safe as only the admin has the right to manage the room. `,
      screenshots: [grid4, grid5, grid6],
      githubLink: "https://github.com/AnshikaSethiya/chat-app-firebase",
      LiveUrl: "https://chat-web-app-96ce5.firebaseapp.com/signin",
    },
    {
      id: 4,
      title: "Project 4",
      DisplayImage: Project1,
      Description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          odio, ipsum quo, dolore enim dolorem similique laboriosam laudantium
          tempora saepe, iusto vitae earum dicta aspernatur ex reiciendis nemo
          cum! Ipsum. Lorem ipsum, `,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "#",
      LiveUrl: "#",
    },
    {
      id: 5,
      title: "Project 5",
      DisplayImage: Project1,
      Description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          odio, ipsum quo, dolore enim dolorem similique laboriosam laudantium
          tempora saepe, iusto vitae earum dicta aspernatur ex reiciendis nemo
          cum! Ipsum. Lorem ipsum, `,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "#",
      LiveUrl: "#",
    },
    {
      id: 6,
      title: "Project 6",
      DisplayImage: Project2,
      Description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          odio, ipsum quo, dolore enim dolorem similique laboriosam laudantium
          tempora saepe, iusto vitae earum dicta aspernatur ex reiciendis nemo
          cum! Ipsum. Lorem ipsum, `,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "#",
      LiveUrl: "#",
    }
  ];
};
