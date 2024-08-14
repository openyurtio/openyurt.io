import GitHubButton from "react-github-btn";
import React from "react";

const GhButton = () => {
    return (
        <GitHubButton
            href="https://github.com/openyurtio/openyurt"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star facebook/metro on GitHub">
            Star
        </GitHubButton>
    )
}

export default GhButton
