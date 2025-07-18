import '../../shared/styles/page/page.scss'
import Counter from '../../features/FirstRedux component'
import Store from '../../features/Store'
import ToDo from '../../features/Todo-list'


const MainPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Главная страница
            </div>

            <section>
                <div className="section-name">1. Одинокий счётчик</div>
                <div className="section-inner">
                    <Counter/>
                </div>
            </section>

            <section>
                <div className="section-name">2. Магазин</div>
                <div className="section-inner">
                    <Store/>
                </div>
            </section>

            <section>
                <div className="section-name">3. Todo-list</div>
                <div className="section-inner">
                    <ToDo/>
                </div>
            </section>
        </>
    )
}

export default MainPage