import React, {useState, useEffect} from 'react'
import backend from '../../api';

const Banner = () => {
    const [recommended, setRecommended] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
          const request = await backend.get("/recommendeds")
            .then(response => {
                setRecommended(response.data[Math.floor(Math.random() * response.data.length - 1)])
            })
            .catch(err => {
              console.log(err.message);
              setError(true);
            })
          return request;
        }
        fetchData();
      }, []);

      console.log(recommended)
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}

export default Banner
