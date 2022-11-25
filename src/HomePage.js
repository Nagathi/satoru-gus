import './HomePage.css';

function HomePage(){
    return(
        <div className="header-home">
            <div className="title-home">
                <h1>Satoru</h1>
            </div>
            <div class="btn-header-home">
                <a href="" target="_self"><div class="btns">Início</div></a>
                <div class="space-home"></div>
                <a href="myapi" target="_self"><div class="btns">Heleno</div></a>
                <div class="space-home"></div>
                <a href="index.html" target="_self"><div class="btns">Sobre</div></a>
                <div class="space-home"></div>
            </div>
        </div>
    )
}

export default HomePage