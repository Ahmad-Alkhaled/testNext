import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss';
import axios from 'axios'
import { useEffect , useState , useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [ All , setAll ] = useState([]);
  const [ text , setText ] = useState('');
  const mainRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  const x = ()=>{
    axios.get('/api/addTask')
    .then((res)=>{
      setAll(res.data.data);
      mainRef.current.style.cursor='default'
      inputRef.current.style.cursor='default'
      buttonRef.current.style.cursor='pointer'
    })
  }

  useEffect(()=>{
    // cursor:wait;
    // console.log(mainRef.current.style.cursor='wait');
      x();
  },[])

  const add = (event)=>{
    const inputText = text; 
    if(inputText != ''){
      mainRef.current.style.cursor='wait'
      inputRef.current.style.cursor='wait'
      buttonRef.current.style.cursor='wait'
      // setAll([...All,{taskText:text}])
      axios.post('/api/addTask',{ taskText:inputText })
      .then(()=>{
       
        setText('')
        x()
      })
    }
 
  }
  const Delete = (event)=>{
    mainRef.current.style.cursor='wait'
      inputRef.current.style.cursor='wait'
      buttonRef.current.style.cursor='wait'
    axios.delete(`/api/${event._id}`)
      .then(()=>{
        x()
      })
  }

  return (
    <>
      <Head>
        <title>test  Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={mainRef} className={styles.main}>
        <div className={styles.form} >
          <input type="text" ref={inputRef} value={text} placeholder='enter your task' 
          onChange={(e)=>{ setText(e.target.value) }}
          onKeyDown={(event)=>{
            if(event.code === 'Enter')
            {
              add()
            }

          }} />
          <button ref={buttonRef} onClick={add} > Add </button>
        </div>
        <div className={styles.container} >
          {
            All.map((task,i)=>{
              return (
                <div key={i} >
                  <i key={i} className="fa-solid fa-trash-can" onClick={()=>{ Delete(task) }} ></i>
                   {task.taskText} 
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
