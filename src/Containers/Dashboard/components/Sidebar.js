import React from 'react';


const Sidebar = () => {
    // const menus = [
    //     { name: "Dashboard", icon: HomeIcon },
    //     { name: "Discounts", icon: DiscountIcon },
    //     { name: "Graph", icon: GraphIcon },
    //     { name: "Messages", icon: MessageIcon },
    //     { name: "Notifications", icon: NotificationIcon },
    //     { name: "Settings", icon: SettingsIcon },
    //     { name: "Logout", icon: LogoutIcon },
    // ];

    return <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
        <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
            {/* <StoreIcon /> */}
        </button>
        <div className="flex flex-col gap-y-4 items-end self-end">
            <div className='bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'>
            </div>
        </div>
    </div>
}

export default Sidebar;
