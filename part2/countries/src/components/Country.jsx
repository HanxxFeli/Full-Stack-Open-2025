
// displaying countries from the API 
const Country = ({country, showDetails = false}) => { 
    
    // if showDetails is true, return the full detailed page (do on Aug 15)
    if (showDetails) { 
        return ( 
            <div>
            <div>
                <h1>{country.name.common}</h1>

                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
            </div>
            <div>
                <h1>Languages</h1>
                <ul>
                {Object.values(country.languages).map((language, index) => { 
                    <li key={index}>{language}</li>
                })}
                </ul>
            </div>
            <img src={country.flags.png}/>
            </div>  
        )
    } else { 
        return ( 
            <div>
                {country.common.name}
            </div>
        )
    }
    // else, show the regular page (do on Aug 15)
}

export default Country