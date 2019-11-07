import React from "react";

function ErrorAlert({error,m}){
    if(error){
        return (<p className="alert alert-danger error">
            {m}
        </p>);
    }

    return '' ;
}

export default ErrorAlert;