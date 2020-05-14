document.getElementById('getThings').addEventListener( 'click', getThings);

function getThings(){
    let word = document.getElementById('Word').value
    if(word === ""){
        window.alert('Input a word motherfucker')
    }
    
    fetch('https://api.wordnik.com/v4/word.json/'+word+'/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    .then((res) => res.json())
    .then((data) => {
        let output = `
            <p>${data[1].text}</p>
        `;
        console.log(output);
    })
}



//https://api.wordnik.com/v4/word.json/jargon/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5