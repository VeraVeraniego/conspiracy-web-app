import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateEvent } from './components/CreateEvent/CreateEvent'
import { Dashboard } from './components/Dashboard/Dashboard'
import { EventDetails } from './components/EventDetails/EventDetails'
import { Navbar } from './components/Navbar/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="createEvent" element={<CreateEvent />} />
          <Route path="eventDetails" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
