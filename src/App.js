import React from 'react';
import Button from "./components/button/Button";

const App = ({props}) => {
    return (
        <div>
            <Button props={props} text={'add'}/>
            <Button props={props} text=/>
            <Button props={props}/>
            <Button props={props}/>

        </div>
    );
};

export default App;