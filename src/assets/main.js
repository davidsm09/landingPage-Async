const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=UCt3sGVFa6mtYiVY8p2o9Xyw&part=id%2Csnippet&type=video&maxResults=9';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40934419cdmsh452f75aff47116ep1d0aacjsn65dafd737f7a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const musica = await fetchData(API);
    } catch{

    }
})();