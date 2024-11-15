import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profil = () => {
    const gamerProfile = {
        backgroundImage: "url('https://marketplace.canva.com/EAD_IsMYK_w/1/0/1600w/canva-arri%C3%A8re-plan-virtuel-arc-en-ciel-d%C3%A9grad%C3%A9-rose-orange-et-bleu-VwJMC37j5jQ.jpghttps://img.freepik.com/free-vector/pink-neon-background_53876-91656.jpghttps://marketplace.canva.com/EAD_IsMYK_w/1/0/1600w/canva-arri%C3%A8re-plan-virtuel-arc-en-ciel-d%C3%A9grad%C3%A9-rose-orange-et-bleu-VwJMC37j5jQ.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        username: "GamerX",
        level: 42,
        bio: "Pro gamer and game reviewer.",
        avatar: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-7c2e7661fd6f8d96a12b26710b06dc8a_screen.jpg?ts=1637163320", 
        favoriteGames: ["Fortnite", "Minecraft", "Apex Legends"],
    };

    return (
        <div
            style={{
                ...gamerProfile,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '20px'
            }}
        >
            <Card style={{ width: '18rem' }} className="shadow-lg">
                <Card.Img variant="top" src={gamerProfile.avatar} alt="Avatar" />
                <Card.Body>
                    <Card.Title>{gamerProfile.username}</Card.Title>
                    <Card.Text>
                        <p><strong>Level:</strong> {gamerProfile.level}</p>
                        <p>{gamerProfile.bio}</p>
                        <strong>Favorite Games:</strong>
                        <ul>
                            {gamerProfile.favoriteGames.map((game, index) => (
                                <li key={index}>{game}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Profil;