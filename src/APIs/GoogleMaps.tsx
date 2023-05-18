import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

//The coordinates are just from some arbitrary spot in central park new york city
const coords= {lat: 40.776004, lng: -73.966548}
const id = "4e1faeeeaaf137b1"

export const TheMap = (): JSX.Element => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChPDLEF6QUEk0XPAH1ndzBj_ncN7OQnZk",
        mapIds: [id],
    });

    if (!isLoaded) return <div>...Loading</div>

    return (
        <div 
            className={`
                h-[41%]
                sm:h-[56%] border-t-2 border-violet-800
            `}
        >
            <GoogleMap 
                zoom={19} 
                center={coords} 
                mapContainerClassName={`w-full h-full`}
            >
                <MarkerF position={coords} />
            </GoogleMap>
        </div>
        
    )
}