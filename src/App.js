import React from 'react';
import Menu from './components/Menu/';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain/';
import Carousel from './components/Carousel/';
import Footer from './components/Footer/';

function App() {
    
    return (
        <div >
            <Menu/>

            {dadosIniciais.categorias.map((c)=>{ 
                console.log(c)
                return BannerMain({
                videoTitle:c.videos[0].titulo,
                videoDescription:c.videos[0].titulo,
                url:c.videos[0].url,
            })})}

            {dadosIniciais.categorias.map((c,i)=>{ return Carousel({
                category:c,
                ignoreFirstVideo:0,
            })})}
            
            <Footer/>
        </div>
    );
}

export default App;
