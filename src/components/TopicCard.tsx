import React from 'react';

interface TopicCardProps {
    topic: string;
    numStargazers: number;
}

function TopicCard(props: TopicCardProps) {
    const { topic, numStargazers } = props;

    return (
        <div className="topic-card">
            <p>Topic: {topic}</p>
            <p>Stargazers: {numStargazers}</p>
        </div>
    )
}

export default TopicCard;