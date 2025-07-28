import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut
} from "react-icons/lu"

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        Path: "/dashboard",
    },
    {
        id: "02",
        label: "Income",
        icon: LuWalletMinimal,
        Path: "/income",
    },
    {
        id: "03",
        label: "Expense",
        icon: LuHandCoins,
        Path: "/expense",
    },
    {
        id: "06",
        label: "Logout",
        icon: LuLogOut,
        Path: "/logout",
    }
]