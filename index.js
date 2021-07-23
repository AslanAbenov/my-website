/*                              Painting Skill Levels                              */
var skills = document.querySelectorAll(".skills #nameOfSkills p").length;
for(var i = 0; i < skills;i++){
    var skillLevel = document.querySelectorAll(".skills #nameOfSkills p")[i].innerHTML;
    if(skillLevel == "Low"){
        document.querySelectorAll(".skills #nameOfSkills p")[i].style.color = "red";
    }   
    else if(skillLevel == "Medium"){
        document.querySelectorAll(".skills #nameOfSkills p")[i].style.color = "rgb(158, 158, 0)";
    }
    else{
        document.querySelectorAll(".skills #nameOfSkills p")[i].style.color = "green";
    }
}
/*                            Changing Language                                    */
var initialSelectedLang = "#eng";
function changeLanguage(lang){
    switch(lang.innerHTML){
        case "RUS": 
            document.querySelector("#rus").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.querySelector(initialSelectedLang).style.backgroundColor = "rgba(0, 0, 0, 0)";
            initialSelectedLang = "#rus";
            document.querySelector(".heading .me h1").innerHTML = "Аслан Абенов";
            document.querySelector(".heading .me h2").innerHTML = "Веб-Разработчик";
            document.querySelector(".description h2").innerHTML = "Обо мне";
            document.querySelectorAll(".description-words p")[0].innerHTML = "Я родился в городе Кызылорда, Казахстан 15.08.2003";
            document.querySelectorAll(".description-words p")[1].innerHTML = "Организованный и щепетильный к деталям";
            document.querySelectorAll(".description-words p")[2].innerHTML = "Изучаю вебку чтобы достичь целей и реализовать свои мечты";

            document.querySelector(".skills h2").innerHTML = "Навыки";
            
            document.querySelector(".myEducation h2").innerHTML = "Образование";
            document.querySelector(".bil h3").innerHTML = "Лицей 'Бiлiм-Инновация'";
            document.querySelector(".sdu h3").innerHTML = "Университет Сулеймана Демиреля";
            document.querySelector(".experience h2").innerHTML = "Опыт Работы";
            document.querySelector(".experience p").innerHTML = "Без опыта работы";
            for(var i = 0; i < skills; i++){
                var level = document.querySelectorAll("#nameOfSkills p")[i].innerHTML;
                switch(level){
                    case "Low": level = "Низкий";break;
                    case "Medium": level = "Средний";break;
                    case "High": level = "Высокий";break;
                    case "Төмен": level = "Низкий";break;
                    case "Орташа": level = "Средний";break;
                    case "Жоғары": level = "Высокий";break;
                }
                document.querySelectorAll("#nameOfSkills p")[i].innerHTML = level;
            }
            break;
            case "KAZ": 
            document.querySelector("#kaz").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.querySelector(initialSelectedLang).style.backgroundColor = "rgba(0, 0, 0, 0)";
            initialSelectedLang = "#kaz";
            
            document.querySelector(".heading .me h1").innerHTML = "Аслан Әбенов";
            document.querySelector(".heading .me h2").innerHTML = "Веб-Бағдарламашы";
            document.querySelector(".description h2").innerHTML = "Мен туралы";
            document.querySelectorAll(".description-words p")[0].innerHTML = "Менің туылған жерім Қызылорда, Қазақстан 15.08.2003";
            document.querySelectorAll(".description-words p")[1].innerHTML = "Жинақы және детальдарға мұқиятпын";
            document.querySelectorAll(".description-words p")[2].innerHTML = "Вебканы мақсаттарыма жетіп, армандарымды орындау үшін үйренудемін";

            document.querySelector(".skills h2").innerHTML = "Қабілеттері";
            document.querySelector(".myEducation h2").innerHTML = "Білімі";
            document.querySelector(".bil h3").innerHTML = "Білім-Инновация Лицейі";
            document.querySelector(".sdu h3").innerHTML = "Сулейман Демирель Университеті";
            document.querySelector(".experience h2").innerHTML = "Жұмыс Тәжірибесі";
            document.querySelector(".experience p").innerHTML = "Жұмыс тәжірибесіз";
            for(var i = 0; i < skills; i++){
                var level = document.querySelectorAll("#nameOfSkills p")[i].innerHTML;
                switch(level){
                    case "Low": level = "Төмен";break;
                    case "Medium": level = "Орташа";break;
                    case "High": level = "Жоғары";break;
                    case "Низкий": level = "Төмен";break;
                    case "Средний": level = "Орташа";break;
                    case "Высокий": level = "Жоғары";break;
                }
                document.querySelectorAll("#nameOfSkills p")[i].innerHTML = level;
            }

            break;
            case "ENG": 
            document.querySelector("#eng").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.querySelector(initialSelectedLang).style.backgroundColor = "rgba(0, 0, 0, 0)";
            initialSelectedLang = "#eng ";
            
            document.querySelector(".heading .me h1").innerHTML = "Aslan Abenov";
            document.querySelector(".heading .me h2").innerHTML = "Web-Developer";
            document.querySelector(".description h2").innerHTML = "About Me";
            document.querySelectorAll(".description-words p")[0].innerHTML = "I was born in Kyzylorda, Kazakhstan 15.08.2003";
            document.querySelectorAll(".description-words p")[1].innerHTML = "Organized and pinching to details";
            document.querySelectorAll(".description-words p")[2].innerHTML = "Studying web-development to achieve my goals and make my dreams come true";

            document.querySelector(".skills h2").innerHTML = "Skills";
            document.querySelector(".myEducation h2").innerHTML = "Education";
            document.querySelector(".bil h3").innerHTML = "Bilim-Innovation Lyceum";
            document.querySelector(".sdu h3").innerHTML = "Suleyman Demirel University";
            document.querySelector(".experience h2").innerHTML = "Work Experience";
            document.querySelector(".experience p").innerHTML = "No work experience";

            for(var i = 0; i < skills; i++){
                var level = document.querySelectorAll("#nameOfSkills p")[i].innerHTML;
                switch(level){
                    case "Төмен": level = "Low";break;
                    case "Орташа": level = "Medium";break;
                    case "Жоғары": level = "High";break;
                    case "Низкий": level = "Low";break;
                    case "Средний": level = "Medium";break;
                    case "Высокий": level = "High";break;
                }
                document.querySelectorAll("#nameOfSkills p")[i].innerHTML = level;
            }
            break;




    }
}