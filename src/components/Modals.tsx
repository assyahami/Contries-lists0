import Modal from 'react-bootstrap/Modal';
import type { CountryResponse } from '../types/country.types';
import CountryCard from './Cards';
import { getCountryName } from '../utils/countryHelper';

function AppModal({
    country,
    onHide,
    show
}: {
    country: CountryResponse;
    onHide: () => void;
    show: boolean
}) {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}
            show={show}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {getCountryName(country)}
                </Modal.Title>
            </Modal.Header>
            <CountryCard country={country} isModal={true} />
        </Modal>
    );
}

export default AppModal

