document.getElementById('getThings').addEventListener( 'click', getThings);

function getThings(){
    let word = document.getElementById('Word').value
    if(word === ""){
        window.alert('Input a word!')
    }
    fetch('https://api.wordnik.com/v4/word.json/'+word+'/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    .then((res) => res.json())
    .then((data) => {
        let pos = `${data[0].partOfSpeech}`
        let def1 = `${data[0].text}`
        let def2 = `${data[1].text}`
        if(def1 === "undefined"){
            let output = `
                <h3>Part Of Speech</h3>
                <li>${pos}</li>
                <h3>Meaning</h3>
                <li>${def2}</li>
            `;
            document.getElementById('displaySearch').innerHTML = output;
        }
        else{
            let output = `
                <h3>Part Of Speech</h3>
                <p>${pos}</p>
                <h3>Meaning</h3>
                <li>${def1}</li>
                <li>${def2}</li>
            `;
            document.getElementById('displaySearch').innerHTML = output;
        }
    });
    fetch('https://api.wordnik.com/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    .then((res) => res.json())
    .then((data1) =>{
        let syn = `${data1[0].words}`
        let output1 = `
            <h3>Synonyms</h3>
            <li>${syn}</li>
        `
        document.getElementById('syns').innerHTML = output1;
    });
    fetch('https://api.wordnik.com/v4/word.json/'+word+'/examples?includeDuplicates=false&useCanonical=false&limit=2&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    .then((res) => res.json())
    .then(data2 =>{
        let example1 = `${data2.examples[0].text}`;
        //let example2 = `${data2[].text}`;

        let output2 = `
            <h3>Examples</h3>
            <li>${example1}</li>
        `;
        document.getElementById('examples').innerHTML = output2;
    })
}



//https://api.wordnik.com/v4/word.json/jargon/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5