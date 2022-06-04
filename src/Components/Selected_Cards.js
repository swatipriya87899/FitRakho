import React,{useState, useEffect} from 'react'
import Card from './Card';
import './Selected_Cards.css';

const Selected_Cards = (props) => {
    const [data, setData] = useState([]);

    //fetching userSelected data from Api
    const getData = () => {
      fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${props.search_res}&numResults=6`)
        .then((res) => res.json())
        .then((res) => {
          setData(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [props.search_res])
  return (
    
    <div className='selected_cards'>
       { data.results &&
           data.results.map((datas)=>{
              return(
             <Card video={datas.video} heading={datas.heading} text={datas.text} tags={datas.tags} key={datas.heading}></Card>
              )
           })
       }
    </div>
  )
}

export default Selected_Cards