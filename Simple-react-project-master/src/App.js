import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App text-center  bg-red">
      <form className='flex border d-flex flex-column w-75 h-75 m-auto jestify-center align-center family-sans'>
        <h1 className=''>
          Log Up
        </h1>
        <label className=" text-center mt-2">Full name : </label>
        <input type={'text'} placeholder={'Full Name...'} className='w-50 m-auto'/>
        <label className=" text-center mt-2">Email : </label>
        <input type={'email'} placeholder={'Email...'} className='w-50 m-auto'/>
        <div className='ml-0 mr-20 '>
        <label className=" text-center mt-2 mr-20">Gender :
        <input type={'checkbox'} /><label >Male</label>
        <input type={'checkbox'} /><label >Female</label>
        </label>
        </div>
        <label className=" text-center mt-2">new password : </label>
        <input type={'password'} placeholder={'Password...'} className='w-50 m-auto'/>
        <label className=" text-center mt-2">check password : </label>
        <input type={'password'} placeholder={'Check Password...'} className='w-50 m-auto'/>
        <input type={'submit'} value={'submit'} className='btn btn-primary w-25 m-auto mt-2'/>
        
      </form>
    </div>
  );
}

export default App;
