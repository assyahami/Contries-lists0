import { Card, Button, Badge, Stack } from 'react-bootstrap';
import { FaTreeCity } from "react-icons/fa6";
import { TbPhoneCalling } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import type { CountryResponse } from '../types/country.types';
import { useState } from 'react';
import AppModal from './Modals';
import { getCallingCode, getCapital, getCountryName, getFLag } from '../utils/countryHelper';
import { GrGroup } from 'react-icons/gr';
import { RiSpeakLine } from 'react-icons/ri';

function CountryCard({ country, isModal = false }: { country: CountryResponse, isModal?: boolean }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
            {isModal ? <div
                className="d-flex justify-content-center align-items-center bg-light border-bottom rounded-top"
                style={{ height: '160px' }}
            >
                <img
                    src={getFLag(country)}
                    alt={`${getCountryName(country)} flag`}
                    style={{
                        maxHeight: '120px',
                        width: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </div>
                : <div className="ratio ratio-4x3 overflow-hidden rounded-top border-bottom bg-light">
                    <Card.Img
                        variant="top"
                        className="object-fit-cover"
                        src={getFLag(country)}
                        alt={`${getCountryName(country)} flag`}
                    />
                </div>}

            <Card.Body className="p-3">
                <div className="mb-3 d-flex justify-content-between">

                    <Card.Title className="h5 fw-bold mb-0 text-truncate">
                        {getCountryName(country)}
                    </Card.Title>
                    <Badge bg="light" text="dark" className="mb-2 fw-medium border">
                        {country.region}
                    </Badge>
                </div>

                <Stack gap={2} className="text-secondary mb-4">
                    <div className="d-flex align-items-center gap-2 small">
                        <FaTreeCity className="text-primary" />
                        <span className="text-dark fw-semibold">Capital:</span>
                        <span className="text-truncate text-dark">{getCapital(country) || 'N/A'}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 small">
                        <GrGroup className="text-primary" />
                        <span className="text-dark fw-semibold">Population:</span>
                        <code className=" px-1 py-0 rounded text-brand">
                            {country.population}
                        </code>
                    </div>


                    {isModal && <div className="d-flex align-items-center gap-2 small">
                        <GiWorld className="text-primary" />
                        <span className="text-dark fw-semibold">Domain:</span>
                        <code className=" px-1 py-0 rounded text-brand">
                            {country.tld.join(', ')}
                        </code>
                    </div>}

                    {isModal && <div className="d-flex align-items-center gap-2 small">
                        <TbPhoneCalling className="text-primary" />
                        <span className="text-dark fw-semibold">Calling Code:</span>
                        <span className='text-dark'>{getCallingCode(country)}</span>
                    </div>}

                    {isModal && <div className="d-flex align-items-center gap-2 small">
                        <RiSpeakLine className="text-primary" />
                        <span className="text-dark fw-semibold">Languages:</span>
                        <code className=" px-1 py-0 rounded text-brand">
                            {country.languages &&
                                Object.values(country.languages).map((lang) => (
                                    <span key={lang} className="badge bg-primary me-1">
                                        {lang}
                                    </span>
                                ))}

                        </code>
                    </div>}

                </Stack>

                {!isModal && <Button
                    variant="outline-primary"
                    className="w-100 rounded-pill fw-bold btn-sm"
                    onClick={handleOpen}
                >
                    View Details
                </Button>}
            </Card.Body>
            <AppModal country={country} show={showModal} onHide={handleClose} />
        </Card>
    );
}

export default CountryCard;