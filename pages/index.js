import { Provider } from "react-redux";
import Header from "../components/Header";
import Main from "./layout/Main";



export default function Home() {
  return (
    <Provider store={store}>
      <Main>
       salam
      </Main>
    </Provider>
  )
}


