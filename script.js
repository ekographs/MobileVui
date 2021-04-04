let voicemessage ='';
        // The JavaScript Part Starts
        const btn = document.querySelector('.talk');
        // const content = document.querySelector('.content');

        
// each reponse with their respective answer 

        const keywords =['YouTube', 'Java','database','programming','stack','job','PHP','javascript','react','flutter'];
        const keywordResponses = { 
            YouTube: { response: 'opening youtube now', link: 'https://www.youtube.com/' },
            Java: { response: 'java is a programming language used for building enterprise applications You can learn Java on the link I opened for you ,', link:'https://www.codecademy.com/learn/learn-java' },
            database:{response: 'A Database is a systematic collection of data which supports storage and manipulation of information. It is usually managed by a Database Management System (DBMS). I have opened a link that will be helpful', link:'https://www.guru99.com/free-database-software.html'},
            programming:{response:'There are short term disadvantages to learning two languages at once, but long term advantages. As others have mentioned, you might mix up the syntax early on. However, in the long run, you will probably end up with a better understanding of both languages, based on the principle of interspersed learning.',link:''},
            stack:{response:'Okay check the next tab', link:'https://stackoverflow.com/'},
            job:{response:'I found something helpful on IT Career Paths check new tab', link:'https://online.uc.edu/highest-paying-it-careers/'},
            PHP:{response:'Here is the best site for you to learn php my friend check new tab', link:'https://www.codecademy.com/catalog/language/php'},
            javascript:{response:'Here is the best site for you to learn JS my friend check new tab', link:'https://www.codecademy.com/catalog/language/javascript'},
            react:{response:'Here is how to learn react my friend check new tab', link:'https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/'},
            flutter:{response:'Here is the best site for you to learn flutter my friend check new tab', link:'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9073706_._pd__._&matchtype=b&gclid=CjwKCAjwpKCDBhBPEiwAFgBzj9Z_s57JWt2bJmWyUKef7Rbk_ywYUYiRz8w-m1S4fntRAeH6eOb79RoCLfsQAvD_BwE'},


         };
    
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition =  new SpeechRecognition();

        recognition.onstart = function(){
          


            //// welcome message end 
        }
        recognition.onresult = function (event) {
            const current = event.resultIndex;

            const transcript = event.results[current][0].transcript;
            addusermessage(transcript);
            // content.textContent = transcript;
            readOutLoud(transcript);

        };

        btn.addEventListener('click', () =>{
            
            const speech = new SpeechSynthesisUtterance();

            speech.text = 'How Can I Help You ?';
            speech.lang = "en-US";
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            addassitantmessage('How Can I Help You ?');
            window.speechSynthesis.speak(speech);
            recognition.start();
        });

        function checkIfContains(keyword){
	    return voicemessage.includes(keyword);
        }
        


        function readOutLoud(message){
            voicemessage = message;
            const speech = new SpeechSynthesisUtterance();

            speech.text = 'I am not able to understand';
            let responselink = '';


            // if(message.includes('YouTube')){
                console.log(voicemessage);
            if(keywords.some(keyword => message.includes(keyword))){
                // console.log("what i said: " + message);
                let keywordindex = keywords.findIndex(checkIfContains);
                let keyword = keywords[keywordindex];
                let keywordres = keywordResponses[''+keyword+''];
                let responsespeech = keywordres['response'];
                responselink = keywordres['link'];
                speech.text = responsespeech;
               
                
                
              
        }
        speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                addassitantmessage(speech.text);
                window.speechSynthesis.speak(speech);

                if(responselink != ''){
                    window.open(''+ responselink +'');
                }
            
    }
    
    function addassitantmessage(msg){
        let content = ' <div class="talk-bubble tri-right left-in">  <div class="talktextleft"> <span class="float">VUI:</span> <p class="mleft">'+msg+'</p></div> </div>';
        var div = document.getElementById('chatiphonebox');
        div.innerHTML += content;
        div.scrollTop = div.scrollHeight;


    }

    function addusermessage(msg){
        let content = ' <div class="talk-bubble tri-right round right-in">  <div class="talktextright"> <span class="floati">USER: </span> <p class="mright">'+msg+'</p></div> </div>';
        var div = document.getElementById('chatiphonebox');
        div.innerHTML += content;
        div.scrollTop = div.scrollHeight;
    }