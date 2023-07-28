import React from "react";
import "../Footer/Footer.scss";
import {
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import Logo from "../../assets/logos/white-hawksight.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="abt-footer-hawk">
        <div className="flx-1">
          <div className="flx-1-p">
            <p>
              Hawksight is the protocol that optimizes your yield on Solana
              DeFi. Earn <span>optimized</span> yields from Solana's Top DeFi
              Protocols and manage your positions all in one protocol. Show your
              support and earn additional yield from our
              <span> Hawksight NFTs</span> & <span>HAWK Token.</span>
            </p>
          </div>
          <div className="flx-1-p">
            <p>
              Our mission is to maximize your experience on Solana DeFi. Join
              our <span>Discord</span> & Telegram - we have a team ready around
              the clock to get you started.
            </p>
          </div>
        </div>

        <div className="flx-2">
          <div>
            <FaWhatsapp /> WhatsApp
          </div>
          <div>
            <FaTwitter /> Twitter
          </div>
          <div>
            <FaFacebook /> Facebook
          </div>
          <div>
            <FaPaperPlane /> WhitePaper
          </div>
          <div>
            <FaInstagram /> Instagram
          </div>
          <div>
            <FaMedium /> Medium
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <p>
          Hawksight is building Solana's Yield Optimizer. Our mission is to
          maximize your experience on Solana Defi, by aggregating and automating
          DeFi yield strategies in 1-click so users can instantly get the best
          yield to grow their Solana tokens ($SOL) and USDC stablecoins ($USDC)
          from various yield strategies such as liquidity providing, borrow
          lending, options derivatives, NFT lending, and GameFi yield. Hawksight
          has and will integrate with leading Solana DeFi protocols including
          but not limited to: Solend, Marinade Finance, Raydium, Lido, Tulip
          Protocol, Orca, Quarry, Port Finance, Francium, Saber, Friktion,
          Mercurial, Socean, JPool, Hubble, UXD, Hedge Labs, Lifinity, Frakt,
          PsyFi, and many more.
        </p>

        <p>
          Hawksight has been audited by leading smart contract security firms
          including CertiK and Sec3 (previously Soteria). Hawksight's $HAWK
          utility tokens are available on crypto exchanges like KuCoin, MEXC,
          and Raydium. And Hawksight's DeFi utility NFTs, the Debonair Degen
          Hawks, are available on Magic Eden, the largest Solana NFT
          marketplace. Hawksight is backed by Solana Ventures, NGC Ventures,
          Solar Eco Fund, One Block Capital, Big Brain VC (SOL Big Brain),
          Mirana, Petrock Capital, Entrepreneur First, Skyvision Capital, Global
          Founders Capital, Everest Ventures Group, and Double Peak Group. Visit
          hawksight.co to get the best yield APYs to easily grow your SOL &
          USDC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
