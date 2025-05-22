// import logo from './logo.svg'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Designed and Developed by Manasa</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// import './App.css'
// import SampleFunction from './Components/SampleFunction'

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Welcome to React</h1> */}
//       {/* <SampleFunction /> */}
//       {/* to use different data, we use the concept called props -> props - sending data from parent to child */}
//       {/* so we can send the data like below. To get the name on the screen/browser we use props as parameter in SampleFunction component */}
//       <SampleFunction name="Manasa" />
//       <SampleFunction name="Ruthvik" />
//       {/* <SampleFunction />
//       <SampleFunction />
//       <SampleFunction />
//       <SampleFunction /> */}
//     </div>
//   )
// }

// import './App.css'
// import MobileCssEx from './Components/ModuleCSS/MobileCssEx'
// // import Movies from './Components/Movies'
// // import SampleClass from './Components/SampleClass'
// // import StyleEx from './Components/StyleEx'

// function App() {
//   return (
//     <div className="App">
//       {/* <Movies /> */}
//       {/* <SampleClass name="Manasa" /> */}
//       {/* <StyleEx /> */}
//       <MobileCssEx />
//     </div>
//   )
// }

// export default App

// //to check output use npm start - we can see the output in the browser

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// import BootstrapEx from './Components/BootstrapEx'
import 'animate.css'
// import MainComp from './Components/Context/MainComp'
import Header from './CarRental/Header'
import Footer from './CarRental/Footer'
import Routing from './CarRental/Routing'
// import ViewServices from './CarRental/Admin/ViewServices'
// import ViewCars from './CarRental/Admin/ViewCars'
import { createContext, useState } from 'react'
import MobileContainer from './redux/mobiles/MobileContainer'
import { Provider } from 'react-redux'
import { store } from './redux/mobiles/store'
// import MemoExample from './Components/Hooks/MemoExample'
// import RefExample from './Components/Hooks/RefExample'
export const loginStatus = createContext()

function App() {
  // const [login, setLogin] = useState(false)
  const [token, setToken] = useState("")
  return (
    <div className="App">
      {/* <BootstrapEx /> */}
      <loginStatus.Provider value={[token, setToken]}>
        <Header />
        <Routing />
        <Footer />
      </loginStatus.Provider>
      {/* <ViewCars /> */}
      {/* <ViewServices /> */}
      {/* <MainComp /> */}
      {/* <MemoExample /> */}
      {/* <RefExample /> */}
      {/* <Provider store={store}>
        <MobileContainer />
      </Provider> */}
    </div>
  )
}

export default App
