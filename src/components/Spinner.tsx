import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <div className='container mt-4 d-flex justify-content-center flex-column'>
            <div>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </div>
            <div>
                <span>Loading</span>
            </div>
        </div>
    );
}

export default Loading;