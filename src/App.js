import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Billing } from "./pages/Billing";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1 overflow-auto">
        <Header />
        {children}
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout><Profile/> </Layout>} />
        <Route path='/home' element={<Layout><Home /></Layout>} />
        <Route path='/billing' element={<Layout><Billing /> </Layout>} />
      </Routes>

    </div>
  )
};

export default App;