import React from "react";
import "../Roadmap/Roadmap.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaAngleDown, FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Roadmap = () => {
  return (
    <div className="road-cont">
      <div className="roadmap">
        <h2>Building Solana's smartest Yield Optimizer</h2>

        <p className="h2">H2-2022 Roadmap</p>

        <div className="roadmap-containers">
          <div>
            <p>PRIORITY</p>
            <h4>User Interface and Website Development</h4>
          </div>

          <div>
            <p>UPGRADES & FEATURE LAUNCHES</p>
            <h4>
              • NFT holder DeFi vault fee discounts <br /> • Hawksight AI SDK &
              API for developer integration <br /> • Hawksight chatbot upgrades
              & APY optimization alerts (Chatbot currently reaching 1.9million+
              users, and integrated in 1.2k+ Web3 communities)
            </h4>
          </div>

          <div>
            <p>4HAWK UPDATES</p>
            <h4>Advisory and team build out</h4>
          </div>

          <div>
            <p>MORE PARTNERS AND INTEGRATIONS</p>
            <h4>
              Expand Web3, NFT, and DAO partnerships for treasury yield
              management, product integration, and co-marketing
            </h4>
          </div>

          <div>
            <p>COMMUNITY STRUCTURE</p>
            <h4>User Interface and Website Development</h4>
          </div>

          <div>
            <p>$HAWK UPDATES</p>
            <h4>First Collection Mint Date Announced</h4>
          </div>
        </div>

        <div className="help">
          <h3>Let Us Help</h3>

          <p className="p">
            Find the most frequently asked questions and their answers right
            here
          </p>

          <div className="accordion">
            <Accordion className="accordion-body">
              <AccordionSummary
                expandIcon={<FaAngleDown style={{ marginLeft: "1em" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Does the token have a whitepaper?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                <a href="/">WhitePaper</a>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-body">
              <AccordionSummary
                expandIcon={<FaAngleDown style={{ marginLeft: "1em" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Is there a fee?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                We charge a Yield Performance Fee of 5%, while deposits and
                withdrawals are free.
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-body">
              <AccordionSummary
                expandIcon={<FaAngleDown style={{ marginLeft: "1em" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Is there a minimum or maximum deposit?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                There are no minimum deposits or maximum withdrawals when using
                Hawksight as it is our mission to make Defi accessible for all!
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion-body">
              <AccordionSummary
                expandIcon={<FaAngleDown style={{ marginLeft: "1em" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>
                  Is there a minimum deposits for my holding before i can
                  withdraw it?
                </p>
              </AccordionSummary>
              <AccordionDetails id="content">
                You can withdraw your funds from any Hawksight vault at any
                time! When depositing into Hawksight vaults, we automate the
                processes needed to execute DeFi Strategies AND keep you in
                control of your funds! Withdraw it at any time or amount that
                you please!
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion-body">
              <AccordionSummary
                expandIcon={<FaAngleDown style={{ marginLeft: "1em" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Does the token have social media?</p>
              </AccordionSummary>
              <AccordionDetails id="content">
                You can find us and our community on Twitter, Telegram and
                Discord
                <div className="socials">
                  <div className="social">
                    <FaTwitter className="social" /> CoLe Dev
                  </div>
                  <div className="social">
                    <FaTelegram className="social" /> @Tom_cruissee
                  </div>
                  <div className="social">
                    <FaDiscord className="social" /> Ox-Wukong
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
