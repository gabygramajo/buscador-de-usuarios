import './FriendCard.css';

const FriendCard = ({userName, friends, perfil}) => {
    return (
        <div  className='friendCard'>
            <div className='img-section'>
                <img src={perfil} alt='perfil imagen' />
            </div>
            <div className='text-section'>
                <h2>{userName}</h2>
                <p>{friends} amigos en común</p>
                <button className='btn-add'>
                        Agregar
                </button>
            </div>
        </div>
    );
}

export default FriendCard;