import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from "./Components/eye.svg";
import { useState } from "react";
function App() {
  let [selected, setSelected] = useState(0);
  let [type, setType] = useState(true)
  const onPageChange = (value) => {
    setSelected(value)
  }

  const rightLogoOnClick = () => {
    setType(!type)
  }
  const onChange = (value) => {
    console.log(value)
  }
  return (
    <div className="container">
      <Input type={type} size={20} variant={"outline"} rightLogo={Eye} rightLogoOnClick={rightLogoOnClick} onChange={onChange} />
      <Image
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="userImage" borderRadius={100} width={50} height={50} fit="cover" />

      <Pagination total={10} selected={selected} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
