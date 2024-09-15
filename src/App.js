import Converter from "./components/Converter";

function App() {

  return (
   <div
    className="w-full h-screen flex bg-cover bg-center"
    style={{backgroundImage:`url('https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
     <Converter/>
    </div>
  );
}

export default App;
