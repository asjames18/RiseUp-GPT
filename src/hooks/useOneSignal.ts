import { useEffect } from 'react'

declare global {
  interface Window {
    OneSignal: any
  }
}

export const useOneSignal = () => {
  useEffect(() => {
    const showNotificationPrompt = async () => {
      try {
        // Wait for 10 seconds
        await new Promise(resolve => setTimeout(resolve, 10000))

        // Check if OneSignal is initialized
        if (window.OneSignal) {
          // Check if the user is already subscribed
          const isPushSupported = await window.OneSignal.isPushNotificationsSupported()
          const isPushEnabled = await window.OneSignal.isPushNotificationsEnabled()

          if (isPushSupported && !isPushEnabled) {
            // Show the notification prompt
            await window.OneSignal.showSlidedownPrompt()
          }
        }
      } catch (error) {
        console.error('Error showing notification prompt:', error)
      }
    }

    showNotificationPrompt()
  }, [])

  const sendSampleNotification = async () => {
    try {
      if (window.OneSignal) {
        await window.OneSignal.sendNotification({
          title: "Ready to RiseUp?",
          message: "Let's finish what you started. Budget. Build. Break the cycle.",
          url: window.location.href,
        })
      }
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  return {
    sendSampleNotification
  }
} 