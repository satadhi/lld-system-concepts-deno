/**
 * This is a classic exmaple for i neeed to handle state and depending on the state stuff is going on
 */

// type LocationState = {
//     state : "success" | "error" | "loading",
//     location ?: {lng: number, lat:number} 
//     error?: {message: string}
// }


// function PrintLocation(lo : LocationState) {

//     switch(lo.state) {
//         case "loading": 
//         console.log(lo.state);
//         break;
//        case "success":
//             console.log(lo.location.lat, lo.location.lng). <-- this line will give bad bug
//         case "error":
//             console.log(lo.error)
//     }
// }


type  successState = {
    state : "success" ,
    location : {lng: number, lat:number} 
}

type loadingState = {
    state :  "loading",
    
}

type errorState = {
    state :  "error",
    error: {message: string}
}

type LocationState = successState | loadingState | errorState;

function PrintLocation(lo : LocationState) {

    switch(lo.state) {
        case "loading": 
        console.log(lo.state);
        break;
       case "success":
            console.log(lo.location.lat, lo.location.lng)
            break;
        case "error":
            console.log(lo.error)
    }
}