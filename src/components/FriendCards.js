import FriendCard from './FriendCard';

const FriendCards = ({usersArray}) => {
    return (
        <section className='friendCard-section'>
            {
                usersArray.map((user,i) =>{
                    return (
                        <FriendCard 
                        key={i}
                        userName={user.name}
                        friends={user.friendsInCommon}
                        perfil={user.img} />
                    );
                })
            }
        </section >
    );
}

export default FriendCards;
