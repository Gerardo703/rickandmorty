export const Card = ({ characters = [] }) => {
    return ( 
        <>
            {/* Card donde se muestra cada personaje */}
            <div className="container">
                { characters.map( (character, id ) => (
                    <div key={id} className="card">
                        <img className="card-header" src="" alt="" />
                        <div className="card-body">
                            <img className="card-body-img" src={character.image} width="120" height="120" alt="" />
                            <h1 className="card-body-name">{character.name}</h1>
                            <p className="card-body-country">{character.location.name}</p>
                        </div>
        
                        <div className="card-footer">
                            <div className="card-footer-social">
                                <h3>{character.species}</h3>
                                <p>Species</p>
                            </div>
                            <div className="card-footer-social">
                                <h3>{character.status}</h3>
                                <p>Status</p>
                            </div>
                            <div className="card-footer-social">
                                <h3>{character.gender}</h3>
                                <p>Gender</p>
                            </div>
                        </div>
                    </div>
                ))}    
            </div>
        </>
    );
}