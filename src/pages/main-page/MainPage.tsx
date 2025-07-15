import '../../shared/styles/page/page.scss'
import Counter from '../../features/FirstRedux component'


const MainPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Главная страница
            </div>

            <section>
                <div className="section-name">1. To-do List</div>
                <div className="section-inner">
                    <Counter/>
                </div>
            </section>
        </>
    )
}

export default MainPage