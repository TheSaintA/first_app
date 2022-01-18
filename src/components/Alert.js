import React from 'react'

export default function Alert(props) {
    const Captalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert &&
        <div>
            <div className="row my-lg-5">
            <div className="col">
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Captalize(props.alert.type)}</strong> : {props.alert.msg}  
            </div>

            {/* <div className="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..."/>
                <strong className="me-auto">{Captalize(props.alert.type)}</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                {props.alert.msg}
                </div>
            </div>
            </div> */}
            </div>
            </div>
            
        </div>
    )
}
