import MailIcon from "@mui/icons-material/Mail";
import layer from '../asset/layer group.png'
import grid from '../asset/grid.png'
import user from '../asset/users.png'
import order from '../asset/Vector (36).png'
import transo from '../asset/shipping truck.png'
import credit from '../asset/credit card.png'
import setting from '../asset/Setting.png'
import logout from '../asset/Upload.png'
export const sidebar = [
{
    name: 'Dashboard',
    icon :layer,
    link:'/dashboard'
},
{
    name: 'Product',
    icon :grid,
    link:'/dashboard'
},
{
    name: 'User',
    icon :user,
    link:'/dashboard'
},
{
    name: 'Order',
    icon :order,
    link:'/dashboard'
},
{
    name: 'Shipments',
    icon :transo,
    link:'/dashboard'
},
{
    name: 'Transactions',
    icon :credit,
    link:'/dashboard'
},
{
    name: 'Settings',
    icon :setting,
    link:'/dashboard'
},
{
    name: 'Logout',
    icon :logout,
    link:'/dashboard'
},
]