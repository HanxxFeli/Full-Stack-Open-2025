import {useState, useEffect} from 'react'
import Search from './components/Search'
import Country from './components/Country'
import countryService from './services/countries'

const App = () => { 
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  // if filter exists, fetch the data to match the countries
  useEffect(() => { 

    // if search filter is present, fetch the data and set the countries from the data; else, set countries into an empty array
    if (searchFilter) { 
    countryService
      .displayCountries()
      .then(countries => { 
        setCountries(countries) 
      })
    } else { 
      setCountries([])
    }
  }, [searchFilter])

  // check if filter exists, if yes, filter the country list; if not, filteredcountries should be an empty array
  const filteredCountries = searchFilter
    ? countries.filter(country => 
      country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
    ) : []

  // handler for search filter 
  const handleSearchFilter = (event) => { 
    const filterValue = event.target.value
    console.log(filterValue)
    setSearchFilter(filterValue)
  }

  console.log(filteredCountries)
  console.log("countries are", countries)

  // if more than 10, display message. else if < 10, display names. If only 1, get the only value in the array 
  return ( 
    <div>
      <Search value={searchFilter} onChange={handleSearchFilter}/>
      
      <div>
        { searchFilter && filteredCountries.length > 10 
          ? (<p>Too many matches, specify another filter</p>) 
          : filteredCountries.length === 1 
            ? <Country key={filteredCountries[0].name.common} country={filteredCountries[0]} showDetails={true}/>
            : filteredCountries.map(country => 
              <Country key={country.name.common} country={country} />
          ) 
        }
      </div>
    </div>
  ) // return
} // App

export default App
