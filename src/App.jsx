import { useEffect, useState } from "react";
import Form from "./Form"
import Header from "./Header"
import List from "./List"
import Error from "./Error";
import './index.css'


function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [list, setList] = useState([]);
  const [deleteContact, setDeleteContact] = useState('');
  const [error, setError] = useState(false)
  useEffect(() => {
    if (deleteContact.length !== 0) {
      console.log('yes');
      setList(list.filter((item) => item.id !== deleteContact))
    } else {
      console.log('no');
    }
  }, [deleteContact])

  console.log(list);
  return (
    <div className="flex justify-center content-center flex-wrap px-[150px] w-full ">
      <Header />
      <Form setList={setList} name={name} setName={setName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} setError={setError} />
      {error && <Error />}
      <List contacts={list} setDeleteContact={setDeleteContact} />
    </div>
  )
}

export default App
