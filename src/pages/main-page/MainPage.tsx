import '../../shared/styles/page/page.scss'
import Counter from '../../features/FirstRedux component'
import Store from '../../features/Store'


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
                <div className="section-name">1. Магазин</div>
                <div className="section-inner">
                    <Store/>
                </div>
            </section>
        </>
    )
}

export default MainPage