import React, { useEffect } from 'react';
import Account from '../components/Account';
import '../components/style/Account.css';
import ProfileSettings from '../components/ProfileSettings';
import '../components/style/ProfileSettings.css';
import { accountData } from '../data/data';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const isConnected = useSelector((state) => state.user.isConnected); // Vérification de l'état de connexion
    const navigate = useNavigate();

    useEffect(() => {
        // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
        if (!isConnected) {
            navigate('/signin');
        }
    }, [isConnected, navigate]);

    return (
        <main className="main bg-dark">
            <ProfileSettings />
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
}

export default UserProfile;