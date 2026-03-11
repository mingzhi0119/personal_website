import { useState, useEffect } from 'react';
import { profileData, ProfileData } from '../data/profile';

export const useProfileData = () => {
    const [data, setData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulating an asynchronous fetch from a local file or API
        // In a real scenario, this could fetch from a JSON file in the public folder.
        // For static export, we can just use the imported object with a slight delay
        // to simulate network, or resolve immediately. We resolve immediately here.
        const loadProfileData = () => {
            setData(profileData);
            setLoading(false);
        };

        loadProfileData();
    }, []);

    return { data, loading };
};
