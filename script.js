$(document).ready(function(){

    var API_KEY = "AIzaSyDBdgLeR52TQwAt46RZJVghW9Nex12rM7k"

    var video =''

    $("#form").submit(function(event){
        event.preventDefault()
        alert("키워드에 대한 인기 썸네일을 불러오겠습니다. 최대 1분정도 걸려요.")

        var search = $("#search").val()

        videoSearch(API_KEY,search,10)

    })


    function videoSearch(key, search, maxResults) {

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){

        console.log(data)

        data.items.forEach(item => {
            video = `
            
            <iframe width="430" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe>
            `
            $("#videos").append(video)
        });
        })

    }

})