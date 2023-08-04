import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>NetWerkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Team NUS-Singapore wins iGEM 2023", "Top news - 9099 readers")}
        {newsArticle("Is $6K monthly starting salary for fresh grads too high?", "Top news - 886 readers")}
        {newsArticle("MINI Cooper is severely underrated", "Cars & auto - 300 readers")}
        {newsArticle("18 Top Play-to-Earn Crypto Games", "Crypto - 8000 readers")}
        {newsArticle("Why Front End is Fulfilling", "Code - 123 readers")}
        {newsArticle("Elon Musk Regrets X", "Top news - 6503 readers")}
    </div>
  )
}

export default Widgets