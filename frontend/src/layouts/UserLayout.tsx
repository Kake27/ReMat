import { Outlet } from "react-router-dom";
import NavBar from "../pages/components/NavBar";


const UserLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
            <NavBar
                items={[
                    { title: 'Dashboard', link: '/user/dashboard' },
                    { title: 'Profile', link: '/user/profile' },
                    { title: 'Recycle', link: '/user/recycle' },
                    { title: 'Rewards', link: '/user/rewards' },
                    { title: 'Transactions', link: '/user/transactions' },
                    { title: 'Leaderboard', link: '/user/leaderboard' },
                ]}
            />
            {/* Add padding-top to account for fixed navbar */}
            <div className="pt-16">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout