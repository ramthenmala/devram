'use client';

import React, { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

interface ListenButtonProps {
    text: string;
}

const ListenButton: React.FC<ListenButtonProps> = ({ text }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = text.split(' ');

    const handlePlay = () => {
        if (!utterance) {
            const newUtterance = new SpeechSynthesisUtterance();
            newUtterance.text = words.slice(currentIndex).join(' ');
            newUtterance.onend = () => {
                setIsPlaying(false);
                setCurrentIndex(words.length);
            };
            newUtterance.onboundary = (event) => {
                if (event.name === 'word') {
                    setCurrentIndex((prev) => Math.min(prev + 1, words.length));
                }
            };

            window.speechSynthesis.speak(newUtterance);
            setUtterance(newUtterance);
            setIsPlaying(true);
        } else {
            window.speechSynthesis.resume();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (utterance) {
            window.speechSynthesis.pause();
            setIsPlaying(false);
        }
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            if (currentIndex < words.length) {
                handlePlay();
            } else {
                setCurrentIndex(0);
                handlePlay();
            }
        }
    };

    useEffect(() => {
        return () => {
            if (utterance) {
                window.speechSynthesis.cancel();
            }
        };
    }, [utterance]);

    return (
        <div>
            <button
                onClick={handlePlayPause}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-black  transition duration-200"
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            >
                {isPlaying ? (
                    <PauseIcon className="h-6 w-6 text-gray-500 hover:text-white" />
                ) : (
                        <PlayIcon className="h-6 w-6 text-gray-500 hover:text-white" />
                )}
            </button>
        </div>
    );
};

export default ListenButton;
