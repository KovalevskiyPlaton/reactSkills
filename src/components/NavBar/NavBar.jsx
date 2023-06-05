import { NavLink } from 'react-router-dom';
import styleNav from './NavBar.module.css'
export const NavBar = ()=>{
    return(
        <div className={styleNav.headNav}>
        <NavLink to='/dialogsSim'  className={(navData)=>navData.isActive?styleNav.activeNav:styleNav.itemNav}>Simpel sender</NavLink>
        <NavLink to='/dialogsContair' className={(navData)=>navData.isActive?styleNav.activeNav:styleNav.itemNav}>Container sender</NavLink>
    </div>
    )
       
}

//<NavLink to= '/profile' className={ (navData) => navData.isActive ? s.active : s.item }>Profile</NavLink>