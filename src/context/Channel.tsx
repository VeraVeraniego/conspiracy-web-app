import React, { createContext, useContext, useState } from 'react'

interface ChannelContext {
  channel: string
  selectChannel: (newChannel: string) => void
}

export const ChannelContext = createContext<ChannelContext | null>(null)

export const ChannelProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [channel, setChannel] = useState<string>('Arequipa')

  const selectChannel = (newChannel: string) => {
    setChannel(newChannel)
  }

  const value = { channel, selectChannel }
  return (
    <ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
  )
}

export const useChannel = () => {
  const context = useContext(ChannelContext)
  if (!context) {
    throw new Error('useUser must be used with in a UserProvider')
  }
  return context
}
