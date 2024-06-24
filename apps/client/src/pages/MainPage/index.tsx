import { defer } from "react-router-dom";
import { MainPage } from "./MainPage";


export const mainPageLoader = async () => defer({
  task: await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
})

export {
  MainPage
}

