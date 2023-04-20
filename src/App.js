import React from 'react';
import PageTitle from "./components/PageTitle";
import style from './styles/modules/app.module.scss';
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={style.app__wrapper}>
            <AppHeader />
            <AppContent/>

            <div>
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
