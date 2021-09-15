export const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <>
        {/* Pagonation */}
        <div className="container-pagination">
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        {
                            prev ? 
                            <button className="page-link" onClick={handlePrevious}>Previous</button>
                            : null
                        }
                        {
                            next ? 
                            <button className="page-link" onClick={handleNext}>Next</button>
                            :
                            null  
                        }
                    </li> 
                </ul>
            </nav>
        </div> 
        </>
    );
}
