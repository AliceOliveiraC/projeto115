
function iniciarDeteccao()
{

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/31KQIziWF" , modelReady);

    function modelReady()
    {
        classifier.classify(gotResults);
    }
    
    function gotResults(error, results)
    {
        if(error)
        {
            console.error(error);
        }
        else
        {
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) +1;
            random_number_g = Math.floor(Math.random() * 255) +1;
            random_number_b = Math.floor(Math.random() * 255) +1;
    
            document.getElementById("result_label").innerHTML = 'Posso Ouvir - ' + results[0].label
            document.getElementById("result_confidence").innerHTML = ' Precisão -  ' + (results[0].confidence*100).toFixed(2)+"%"
            document.getElementById("result_label").style.color = " rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")"
            document.getElementById("result_confidence").style.color = " rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")"
    
            img1 = document.getElementById("cao")
            img2 = document.getElementById("gato")
            img3 = document.getElementById("passaro")
           
    
            if(results[0].label == "Miado de gato")
            {
                img1.src = 'gato.jpg';
            
              
            }
    
            else if (results[0].label == "latido de cachorro" )
            {
                img1.src = 'cachorro.png';
                
            
            }
    
            else if (results[0].label == "passarinho" )
            {
                img1.src = 'passarinho.jpg';
                
                 
            }
    
            
    
        }
       
    }
    
}
