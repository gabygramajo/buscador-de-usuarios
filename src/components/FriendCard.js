import './FriendCard.css';

const FriendCard = () => {
    return (
        <div  className='friendCard'>
            <div className='img-section'>
                <img src='img/Crunchyroll.png' alt='perfil imagen' />
            </div>
            <div className='text-section'>
                <h2>Michael Ruth</h2>
                <p>5 amigos en común</p>
                <button className='btn-add'>
                        Agregar
                </button>
            </div>
        </div>
    );
}

export default FriendCard;