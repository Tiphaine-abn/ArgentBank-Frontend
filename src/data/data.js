import backgroundImage from '../assets/img/bank-tree.webp';
import chatIcon from '../assets/img/icon-chat.webp';
import moneyIcon from '../assets/img/icon-money.webp';
import securityIcon from '../assets/img/icon-security.webp';

// Données de la bannière (Banner)
export const bannerData = {
    title: "Promoted Content",
    subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
    text: "Open a savings account with Argent Bank today!",
    backgroundImage: backgroundImage,
};

// Données des comptes utilisateurs (UserProfile)
export const accountData = [
    { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' }
];

// Données des features (FeatureItem)
export const featuresData = [
    {
        icon: chatIcon,
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        icon: moneyIcon,
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!"
    },
    {
        icon: securityIcon,
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe."
    }
];