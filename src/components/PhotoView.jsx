import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function Photo(props) {
  return (
    <div className='image'>
      <img src={props.url} />
    </div>
  )
}

// 1 props
// 2 state
function PhotoView() {
  const [data, setData] = useState([])
  const [page, setpage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const loadImages = () => {
    setLoading(true)
    axios.get("https://picsum.photos/v2/list?page=" + page + "&limit=10").then(res => {
      console.log(res.data);
      setData([...data, ...res.data])
    }).catch(err => {
      alert("Something went wrong!");
    }).finally(()=>{
      setLoading(false)
    })
  }
  useEffect(() => {
    loadImages()
  }, [page]);

  function onClick() {
    setpage(page + 1)
  }
  return (
    <div className="App">
      <div className="images">
        {
          data.map((obj, i) => {
            return <Photo key={i} url={obj.download_url} />
          })
        }
      </div>
      {isLoading && <p>Loading</p>}
      <div className='load-more-btn'>
        <button onClick={onClick}>load more</button>
      </div>
    </div>
  );
}

export default PhotoView;
