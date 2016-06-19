var per_name =/^[а-яё]+$/i;
var adjactives = ["добрый", "щедрый", "дружелюбный", "милый", "славный", "благородный", "самолюбивый", "мирный", "любвеобильный", "страстный", "прекрасный", "самодостаточный"];
var names = [];
$(document).ready(function(){
    $("#submit").click(function(e){
        console.log('hi');
        e.preventDefault();
        name = $("#name").val().toLowerCase();
        if(name == "" || !per_name.test(name)){
            $("#message").html("Извини, но мне необходимо узнать твоё имя кириллицей");
           return;
        }
        test = names.filter(function(person){return person.name == name})
        console.log(adjactives)
        if(test.length){
            adjactive = test[0].adjactive
            $("#message").html("Рад тебя видеть снова, " + adjactive + " " + $("#name").val());
            return
        }
        if(adjactives.length == 0){
            $("#message").html("Извини, у меня ничего нет для тебя")
            return
        }
        i = Math.floor((Math.random() * (adjactives.length-1)))
        adjactive = adjactives[i];
        person = {name:name, adjactive: adjactives[i]}
        names.push(person)
        adjactives.splice(i,1);
        $("#message").html("Рад тебя видеть снова, " + adjactive + " " + $("#name").val());
    })
})
