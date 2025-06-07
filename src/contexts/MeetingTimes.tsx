import { createContext, useContext } from 'react';

const meetingTimes = {
    cubesat: {
        structures: {
            times: ["7:00PM"],
            location: "The Cage",
            days: ["Wednesday"]
        },
        thermal: {
            times: [],
            location: "The Cage",
            days: []
        },
        power: {
            times: ["8:00PM"],
            location: "The Cage",
            days: ["Thursday"]
        },
        communications: {
            times: ["8:00PM"],
            location: "The Cage",
            days: ["Wednesday"]
        },
        systemsIntegration: {
            times: ["5:00PM"],
            location: "Fiber Optics Building",
            day: ["Friday"]
        },
        flightSoftware: {
            times: ["7:00PM"],
            location: "The Cage",
            days: ["Friday"]
        },
        payload: {
            times: ["8:00PM"],
            location: "Richard Weeks Hall 313",
            days: ["Monday"]
        },
        adcs: {
            times: ["6:00PM"],
            location: "The Cage",
            days: ["Friday"]
        }
    },
    weatherBalloon: {
        general: {
            times: ["9:00PM"],
            location: "The Cage",
            days: ["Monday"]
        }
    },
    robotics: {
        mechanical: {
            times: ["7:00PM", "8:00PM"],
            location: "The Cage",
            days: ["Monday", "Friday"]
        },
        software: {
            times: ["4:30PM", "4:30PM"],
            location: "The Cage",
            days: ["Monday", "Thursday"]
        },
        electrical: {
            times: ["6:00PM"],
            location: "The Cage",
            days: ["Thursday"]
        }
    }
}

const MeetingTimesContext = createContext(meetingTimes)

export const useMeetingTimes = () => useContext(MeetingTimesContext)

const MeetingTimesProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <MeetingTimesContext.Provider value={meetingTimes}>
        {children}
    </MeetingTimesContext.Provider>
  )
}

export default MeetingTimesProvider