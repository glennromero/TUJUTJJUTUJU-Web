import imgkintamani from '../../assets/arabica-img-1.png'
import imgrobusta from '../../assets/robusta-img.png'
import imghouseblend from '../../assets/houseblend.png'
import './Catalog.css'

const Catalog = () => {

    const directShopeeUrl = (productName) => {
        const shopeeUrl = {
            'arabicaK' : 'https://shopee.co.id/BIJI-KOPI-ARABICA-KINTAMANI-BALI-ROASTED-SINGLE-ORIGIN-COFFEE-BEANS-500-Gram-Rasa-Orange-Organic-i.68109558.19285818148?xptdk=2a9443bc-b0fb-4f75-b5fe-0e986265f272',
            'robustaP' : 'https://shopee.co.id/BIJI-KOPI-ROBUSTA-PUPUAN-BALI-ROASTED-SINGLE-ORIGIN-COFFEE-BEAN-500-gram-Rasa-Vanilla-coklat-i.68109558.20694757930?xptdk=7e1ffeb4-b402-4cb4-a0f5-85774e99b24d',
            'house-blend' : 'https://shopee.co.id/BIJI-KOPI-ARABICA-KINTAMANI-BALI-ROASTED-SINGLE-ORIGIN-COFFEE-BEANS-500-Gram-Rasa-Orange-Organic-i.68109558.19285818148?xptdk=2a9443bc-b0fb-4f75-b5fe-0e986265f272'
        };

        window.location.href = shopeeUrl[productName];
    };

    return(
        <>
            <p className='catalog' id='catalog'>Catalog</p>
            <div className="catalogCont">
                <div className="productCont ">
                    <div className="displayCard">
                        <img className='catalogimg' src={imgkintamani} alt="" />
                        <p className='displayedTitle'>Single Origin</p>
                        <p className='displayedName'>Bali Kintamani</p>
                        <p className='displayedProcess'>Full Washed</p>
                    </div>
                    <div className="bg">
                        <div className="descCont">
                        <p className="catalogTitle">Arabica Kintamani</p>
                        <p className="description">Specialty grade of ours, that serve the high acidity, medium body and low of bitterness, 
                            maximalizing the potensial of the beans with full wahsed process so we 
                            involved the clean, bright, and well-defined flavour
                            </p>
                            <button onClick={() => {directShopeeUrl('arabicaK')}}>BUY</button>
                        </div>
                    </div>
                </div>
                <div className="productCont">
                <div className="displayCard">    
                    <img className='catalogimg' src={imgrobusta} alt="" />
                    <p className='displayedTitle'>Single Origin</p>
                    <p  className='displayedName'>Bali Pupuan</p>
                    <p className='displayedProcess'>Full Washed</p>
                    </div>
                    <div className="bg">
                    <div className="descCont">
                        <p className="catalogTitle">Robusta Pupuan</p>
                        <p className="description">Specialty grade of ours, that define the well done taste with the creamiest hint  
                            of cinnamon at the opening but didn’t rule out the exclusion of it’s bitterness. 
                            With this strong character we’re introducing Robusta in a new realm
                            </p>
                            <button onClick={() => {directShopeeUrl('robustaP')}}>BUY</button>
                    </div>
                    </div>
                </div>
                <div className="productCont">
                <div className="displayCard">
                    <img className='catalogimg' src={imghouseblend} alt="" />
                    <p className='displayedTitle'>House-Blend</p>
                    <p className='displayedName'>Kintamani - Pupuan</p>
                    <p className='displayedProcess'>Full Washed</p>
                    </div>
                    <div className="bg">
                    <div className="descCont">
                        <p className="catalogTitle">House-Blend</p>
                        <p className="description">Our’s that offers an authentic taste of these 2 origin, Arabica Kintamani and Robusta Pupuan.
                         The acidity combined with bitterness and a hint of cinnamon results in a unique and unified flavor.
                            </p>
                            <button onClick={() => {directShopeeUrl('house-blend')}}>COMING SOON</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog;