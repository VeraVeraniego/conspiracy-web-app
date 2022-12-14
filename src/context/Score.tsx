import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { API_URL } from '../common/constants'

interface ScoreContext {
  score: number
  updateScore: (userID: string) => void
}

export const ScoreContext = createContext<ScoreContext | null>(null)

export const ScoreProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [score, setScore] = useState<number>(0)

  const myEventsRequest = async (userId: string) => {
    const response = await axios.get<{ score: number }>(
      `${API_URL}/score?userId=${userId}`
    )

    setScore(response.data.score)
  }

  const updateScore = (userId: string) => {
    myEventsRequest(userId)
  }

  const value = { score, updateScore }
  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
}

export const useScore = () => {
  const context = useContext(ScoreContext)
  if (!context) {
    throw new Error('useUser must be used with in a UserProvider')
  }
  return context
}
