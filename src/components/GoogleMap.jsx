import './GoogleMap.css';

const GoogleMap = () => {
    // Acer Institute Mathura location link
    const mapUrl = "https://maps.app.goo.gl/xjp72ZQZbmcHnjHaA";

    return (
        <div className="google-map-container">
            <iframe
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=654&amp;height=352&amp;hl=en&amp;q=acer%20institute%20mathura+(Acer%20Institute)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Acer Institute Mathura Location"
                style={{ border: 0 }}
            />
            <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link btn btn-primary"
            >
                Open in Google Maps
            </a>
        </div>
    );
};

export default GoogleMap;
