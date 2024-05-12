 import { useState } from 'react';
import data from './data';

function App() {

  const[count,setCount]=  useState(0);
  const[text,setText]= useState([]); 

  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count)
    if(count <=0)
    {
      amount =1;
    }
    if(count > 4)
    {
      amount =4;
    }
    console.log(count);
    setText(data.slice(0,amount));
  }


  return (
    <div className="section-center">
      <h4>لورم ساز زیبا</h4>
      <form className='lorem' onSubmit={handleSubmit}>
          <label htmlFor="total">تعداد پاراگراف:</label>
          <input
           type="number"
           name='total'
           value={count}
           onChange={(e) => setCount(e.target.value)}
            />
          <button type='submit'>بساز</button>
      </form>
       
       <article className='lorem-text'>
       {
        text.map((item,index) =>{
          return <p key={index}>{item}</p>
        })
       }
       </article>
    </div>
  );
}

export default App;
