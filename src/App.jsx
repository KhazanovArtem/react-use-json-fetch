
import './App.css'
import useJsonFetch from './useJsonFetch'

function App() {

  const Request = ({target}) => {
    const [data, loading, error] = useJsonFetch(
      import.meta.env.VITE_REACT_APP_URL, 
      target
    )
    return (
      <div>
      Data: {data === '' ? <span>Загрузка...</span> : data}
      {`, ${loading}, ${error}`}
      </div>
    )
  }


  return (
    <div className='container'>
      <div className='data'>
        <Request target='data'/>
      </div>
      <div className='error'>
        <Request target='error'/>
      </div>
      <div className='loading'>
        <Request target='loading'/>
      </div>
    </div>
  )
}

export default App
