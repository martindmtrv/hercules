export class SpotifyApiUtil {
    private static PLAYLISTS = [
        "https://open.spotify.com/playlist/4UTx16alT2HGjhlsyISJsN?si=xpNgA0xlTHykcd_CFN2c2Q",
        "https://open.spotify.com/album/0xiQwji9bCPsGxINcmDBbP?si=hvw-go1CSEOLP0mwLQ72Ugh",
        "https://open.spotify.com/playlist/6BHL4Eqc1D7jaDTCWCk28g?si=9g78aXMLS1mEz9ko3bK91Q",
        "https://open.spotify.com/playlist/06vPXTBQJzMUJHbYhalIfS?si=WyJ6N_JpTbmhDkO2HIJT_Q",
        "https://open.spotify.com/playlist/0HTjZrbrWH13OvK8D1JU3p?si=jaVOVzFuRt-7DNYAxYir-w",
        "https://open.spotify.com/playlist/6WwLgLnb6dcbd1meHOd5W3?si=_vwz6C07SsyqSTGrSvwi5Q",
        "https://open.spotify.com/playlist/6RNcsYqV8MakVH69yz15PF?si=b8YZ8Ix2SS6HZtpKsMk13Q",
        "https://open.spotify.com/playlist/7oTq7S8EqBY2j0sKGKfnE8?si=3VhUNhquSLe8EEshm7ygxw",
        "https://open.spotify.com/playlist/65UQWEEG04xYVYjo622BJp?si=o3g6yDFyS4aGVCvW-Bfo1w",
        "https://open.spotify.com/playlist/1gcelTm6xiOarkcHpFTuV9?si=6rYCzJ0ISoCPuqgSth9brw",
        "https://open.spotify.com/playlist/75SM1OtJ03mrmfWSIQIHkV?si=D3FtRqR3Qnunpa6XvPUS5Q",
        "https://open.spotify.com/playlist/5A9aSwnEfqbWdKoxgbS1Hk?si=jl8KP9WaQTKVrT6G-sJACA"
    ];

    static fetchRandomPlaylist(): Promise<string> {
        return new Promise((resolve, reject) => resolve(SpotifyApiUtil.PLAYLISTS[Math.floor(Math.random() * SpotifyApiUtil.PLAYLISTS.length)]));
    }
}