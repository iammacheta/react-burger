import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './AppHeader.module.css'

export default function AppHeader() {

    return (
        <header className={headerStyles.menu}>
            <ul className={headerStyles.list}>
                <div className={headerStyles.group}>
                    <li className={headerStyles.item}>
                        <BurgerIcon type="primary" />
                        <p className={headerStyles.title + " text text_type_main-default"}>Конструктор</p>
                    </li>
                    <li className={headerStyles.item}>
                        <ListIcon type="secondary" />
                        <p className={headerStyles.title + " text text_type_main-default"}>Лента заказов</p>
                    </li>
                </div>
                <li className={headerStyles.item}>
                    <ProfileIcon type="secondary" />
                    <p className={headerStyles.title + " text text_type_main-default"}>Личный кабинет</p>
                </li>
            </ul>
            <div className={headerStyles.logo}><Logo /></div>
        </header>
    )
}