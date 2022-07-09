import React from 'react';

interface TopicCardProps {
    topic: string;
    numStargazers: number;
    relatedTopics: any;
}

function TopicCard(props: TopicCardProps) {
    const { topic, numStargazers, relatedTopics } = props;

    return (
        <div className="topic-card">
            <p>Topic: {topic}</p>
            <p>Stargazers: {numStargazers}</p>
            <p>Related topics: {relatedTopics}</p>
        </div>
    )
}

export default TopicCard;