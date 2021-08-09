import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ImageCards from './components/ImageCards'
import axios from 'axios'

const App = () => {
    const [images, setImages] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchSubmit = (e) => {
        e.preventDefault()
        if(searchTerm != '') {
            const fetchData = async () => {
                const result = await axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCES_KEY}&query=${searchTerm}&per_page=30&page=1`)
                setImages(result.data.results)
            }
            fetchData()
        }
    }

    return(
        <>
            <div className='search-container'>
                <form onSubmit={(e) => searchSubmit(e)}>
                    <label htmlFor='seachBar'>Search for pictures:</label>
                    <input id='seachBar' autoComplete='off' type='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
            </div>
            <ImageCards images={images}/>
        </>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'))