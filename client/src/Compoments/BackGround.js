import React from 'react'

const BackGround = ({ Profil, NavBar, Error, Login, Registre }) => {
    const backgroundStyle = {
        backgroundImage: "url('https://marketplace.canva.com/EAD_IsMYK_w/1/0/1600w/canva-arri%C3%A8re-plan-virtuel-arc-en-ciel-d%C3%A9grad%C3%A9-rose-orange-et-bleu-VwJMC37j5jQ.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };

    return (
        <div style={backgroundStyle}>
            {Profil}
            {NavBar}
            {Error}
            {Login}
            {Registre}
        </div>
    );
}

export default BackGround
