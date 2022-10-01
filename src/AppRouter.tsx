import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateEvent } from './components/CreateEvent/CreateEvent'
import { Dashboard } from './components/Dashboard/Dashboard'
import { EventDetails } from './components/EventDetails/EventDetails'
import { Leaderboard } from './components/Leaderboard/Leaderboard'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="createEvent" element={<CreateEvent />} />
        <Route path="eventDetails" element={<EventDetails />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
