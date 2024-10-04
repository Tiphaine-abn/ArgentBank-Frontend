import React from 'react';
import Account from '../components/Account';
import '../components/style/Account.css';
import ProfileSettings from '../components/ProfileSettings';
import '../components/style/ProfileSettings.css';
import { accountData } from '../data/data';

function UserProfile() {
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