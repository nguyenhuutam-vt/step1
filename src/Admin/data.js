import MailIcon from "@mui/icons-material/Mail";
import layer from '../asset/layer group.png'
import grid from '../asset/grid.png'
import user from '../asset/users.png'
import order from '../asset/Vector (36).png'
import transo from '../asset/shipping truck.png'
import credit from '../asset/credit card.png'
import setting from '../asset/Setting.png'
import logout from '../asset/Upload.png'
import PersonIcon from '@mui/icons-material/Person';
import icon1 from '../asset/Group 8 (1).png'
import icon2 from '../asset/Group 7.png'
import icon3 from '../asset/Vector (37).png'
import icon4 from '../asset/Group 6.png'
import img1 from '../asset/image 1.png'
import img2 from '../asset/image 2.png'
export const sidebar = [
{
    name: 'Dashboard',
    icon :layer,
    link:'/dashboard'
},
{
    name: 'Product',
    icon :grid,
    link:'/product'
},
{
    name: 'User',
    icon :user,
    link:'/user'
},
{
    name: 'Order',
    icon :order,
    link:'/order'
},
{
    name: 'Shipments',
    icon :transo,
    link:'/shipments'
},
{
    name: 'Transactions',
    icon :credit,
    link:'/transactions'
},
{
    name: 'Settings',
    icon :setting,
    link:'/settings'
},
{
    name: 'Logout',
    icon :logout,
    link:'/logout'
},
]
export const product =[ 
    {
        icon:icon1,
        total:'Total Vist',
        number :'10,8m'
       
},
{ icon:icon2,
    total:'Total Vist',
    number :'10,8m'
   
},
{ icon:icon3,
    total:'Total Vist',
    number :'10,8m'
   
},
{ icon:icon4,
    total:'Total Vist',
    number :'10,8m'
   
},
]
export const top = [
    {
        icon:img1,
        title:'Nike Sportswear Futura Luxe',
        des:'Pink - 50 orders',
        iven:'Inventory',
        number:'700',
        sale:'Sale',
        salePrice:'$1,000.60',
        price:'Price',
        pricePrice:'$1,300.92',
        today:'Today',
        todayPrice:'$17,000.92'

    },
    {
        icon:img2,
        title:'Nike Sportswear Futura Luxe',
        des:'Pink - 50 orders',
        iven:'Inventory',
        number:'700',
        sale:'Sale',
        salePrice:'$1,000.60',
        price:'Price',
        pricePrice:'$1,300.92',
        today:'Today',
        todayPrice:'$17,000.92'

    }

]
export const progress = [{
    sex:'Women',
    complete:63,
    number:'63%',
    background: '#6C6C6C',
},
{sex:'Men',
    complete:88,
    number:'88%',
    background: '#FF6B6B',
},
{sex:'Kids',
    complete:38,
    number:'38%',
    background: '#5F27CD',
}
]