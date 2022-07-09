import React from 'react';

interface TopicCardProps {
    topic: string;
    stargazerCount: number;
    relatedTopics: string[];
}

function TopicCard(props: TopicCardProps) {
    const { topic, stargazerCount, relatedTopics } = props;

    return (
        <div className="topic-card">
            <p>Topic: {topic}</p>
            <p>Stargazers: {stargazerCount}</p>
            <p>Related topics: {relatedTopics.join(", ")}</p>
        </div>
    )
}

export default TopicCard;