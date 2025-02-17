import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker
            key={ev.id}
            lat={ev.geometries[0].coordinates[1]}
             lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: new Date(ev.geometries[0].date).toLocaleString() })} />
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.781666,
        lng: -17.054833
    },
    zoom: 1
}

export default Map
