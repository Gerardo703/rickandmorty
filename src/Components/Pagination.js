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
                                : <button className="page-link" disabled onClick={handlePrevious}>Previous</button>
                            }
                            {
                                next ? 
                                <button className="page-link" onClick={handleNext}>Next</button>
                                :
                                <button className="page-link" disabled onClick={handleNext}>Next</button>  
                            }
                        </li> 
                    </ul>
                </nav>
            </div> 
        </>
    );
}
