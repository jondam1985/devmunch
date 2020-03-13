import React,{useEffect,useState} from 'react';
import UserInfo from '../../components/user-info/user-info.component';
import UserBadges from '../../components/user-badges/user-badges.component';
import UserAchivements from '../../components/user-achievements/user-achievements.component'

const Dashboard = () => {
  const [dashboardData , setDashbaordData] = useState(null)

  // useEffect(()=>{

  //   fetch('/dashboarddata')
  //   .then(response=>{
  //     return response.json()
  //   })
  //   .then(response=>{
  //     setDashbaordData(response);
  //   })
  // },[])

  return (
    <div>
      {
        dashboardData ? (
          <>
            <UserInfo info={dashboardData.info} />
            <UserBadges badges={dashboardData.badges} />
            <UserAchivements achievments={dashboardData.achivements} />
          </>
        ) :
        <>
          there is nothing here on the dashboard page yet...
        </>
      }
    </div>
  )
}

export default Dashboard;