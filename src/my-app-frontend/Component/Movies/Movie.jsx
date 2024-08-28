import React from "react";
import FreeSubscriptionCard from '../Card/Free';
import BasicSubscriptionCard from '../Card/Basic';
import ProSubscriptionCard from '../Card/Pro';


// as for the Free card can be downloaded free whille for basic & pro cards will function as a transaction so for the cards has to have shacema with a primary id and also will get the user primary id as the user click add buttom will add that selected card to his cart.
//save the selected card with the user primary id to the mongodb cart.

export const Video = () => {
  const handleSubscription = (subscriptionType) => {
    switch (subscriptionType) {
        case 'Free':
            // Handle free subscription logic
            console.log('Free subscription selected');
            break;
        case 'Basic':
            // Handle basic subscription logic
            console.log('Basic subscription selected');
            break;
        case 'Pro':
            // Handle pro subscription logic
            console.log('Pro subscription selected');
            break;
        default:
            console.log('Unknown subscription type');
    }
};
  return (
    <div className="movie-container">
        <h2>Kayan Kallo </h2>
        <div className="subscription-cards">
            <FreeSubscriptionCard onSubscribe={() => handleSubscription('Free')} />
            <BasicSubscriptionCard onSubscribe={() => handleSubscription('Basic')} />
            <ProSubscriptionCard onSubscribe={() => handleSubscription('Pro')} />
        </div>
    </div>
);
};


