import React from 'react';
import './styles/main.scss';
import Product from './Product/Product';

const App: React.FC = () => {
  return (
    <div id="wrapper" className="App">
      <header id="header">
        <div className="inner">
          <a className="logo">
            <span className="symbol"><img src="images/logo.svg"/></span><span className="title">Referrals</span>
          </a>
        </div>
      </header>
      <div id="main">
        <div className="inner">
          <header>
            <h4>Help me, by helping Yourself</h4>
            <p>Sign up for any of these services using my referral code, I'll get something, but odds are so will
                    you. (That's generally how referrals work)</p>
          </header>
          <section className="tiles">
            <Product
              product="Discover"
              description="Sign up for a Discover it - Student Credit Card and we'll each receive $50 cash back after your first purchase."
              link="https://refer.discover.com/s/devinmatte"
            />
            <Product
              product="Amex"
              description="Get a Blue Cash Everyday card, receive $200 back after you spend $1000 dollars, and I'll earn 75 reward dollars"
              link="http://refer.amex.us/DEVINMCx1N?xl=cp01"
            />
            <Product
              product="Trello"
              description="Sign up for Trello with my code, and I get a free month of Gold"
              link="https://trello.com/matted/recommend"
            />
            <Product
              product="Robinhood"
              description="Robinhood Stocks. Get a free stock when using my code."
              link="https://share.robinhood.com/devinm528"
            />
            <Product
              product="Acorns"
              description="Acorns is a online investment app that allows you to invest through rounding up on recent transactions"
              link="https://acorns.com/invite/8YQQKE"
            />
            <Product
              product="Quip"
              description="Quip Toothbrush. We will both get a free $5 refill when you sign up with my code"
              link="https://www.getquip.com/rf?referral_code=devin979014231288"
            />
          </section>
        </div>
      </div>
    </div>

  );
}

export default App;
