import { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { googleMapStyle } from "../../assets/template/googleMap"
import pin from "../../assets/img/pin.png"

export default function Home() {

    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key
    })

    if (!isLoaded) return <div>Loading...</div>
    return <Map />
}

const Map = () => {
    const center = useMemo(() => ({ lat: 51.107883, lng: 17.038538 }), [])
    const town = useMemo(() => ({ lat: 51.110964, lng: 17.034520 }), [])
    const options = {
        styles: googleMapStyle,
        disableDefaultUI: true,
    }
    return (
        <GoogleMap
            zoom={13}
            center={center}
            mapContainerClassName='map-container'
            options={options}
        >
            <MarkerF position={town} icon={pin}/>
        </GoogleMap>
    )
}