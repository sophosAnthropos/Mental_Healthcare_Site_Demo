import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const coords= {lat: 33.83750321536022, lng: -79.05877370674344}
const id = "4e1faeeeaaf137b1"

export const TheMap = (): JSX.Element => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChPDLEF6QUEk0XPAH1ndzBj_ncN7OQnZk",
        mapIds: [id],
    });

    if (!isLoaded) return <div>...Loading</div>

    return (
        <GoogleMap 
            zoom={19} 
            center={coords} 
            mapContainerClassName={`w-full h-full`}
        >
            <MarkerF 
                position={coords}
            />
        </GoogleMap>
    )
}