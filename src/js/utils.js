export const TOKEN_KEY = 'authToken';

export function findLink(links, linkRel) {
    return links.find(link => link.rel === linkRel).href;
}

export function mapSongs(songsResources, hasHeader) {
    return songsResources.map(songResource => {
        const { id, name, artist } = songResource.song;
        const result = {
            id,
            content: hasHeader ? artist.name : name,
            resource: songResource
        };

        if (hasHeader) {
            result.header = name;
        }
        return result;
    });
}

export function appendAuthToken(url) {
    const token = localStorage.getItem(TOKEN_KEY);
    return `${url}?access_token=${token}`;
}

export function isAuthenticated() {
    return localStorage.getItem(TOKEN_KEY) !== null;
}