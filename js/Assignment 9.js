

var qoute1={
    qoutetitle:"“Be yourself; everyone else is already taken.”",
    qouteauthor:"--Oscar Wilde",
}
var qoute2={
    qoutetitle:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
    qouteauthor:"--Albert Einstein",
}
var qoute3={
    qoutetitle:"“So many books, so little time.”" ,
    qouteauthor:"--Frank Zappa",
}
var qoute4={
    qoutetitle:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
    qouteauthor:"-- Bernard M. Baruch",
}
var qoute5={
    qoutetitle:"“A room without books is like a body without a soul.”" ,
    qouteauthor:"--Marcus Tullius Cicero",
}
var qoute6={
    qoutetitle:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" ,
    qouteauthor:"-- Dr. Seuss",
}
var qoute7={
    qoutetitle:"“You only live once, but if you do it right, once is enough.”" ,
    qouteauthor:"--Mae West",
}
var qouteList=[qoute1,qoute2,qoute3,qoute4,qoute5,qoute6,qoute7]
var qouteList2=[]
function addQoute(){
    for(var i=0;i<=qouteList2.length;i++){
    var qoute={
        title:qouteList[i].qoutetitle,
        author:qouteList[i].qouteauthor,
        }
    }
        qouteList2.push(qoute)
        showQoute()
        console.log(qouteList2)
    
}

 function showQoute(){
        for(var i=0;i<qouteList2.length;i++){
        var temp=''
        temp=qouteList2[i].title
        var temp2=''
        temp2=qouteList2[i].author
        }
        
        document.getElementById("output").innerHTML=temp
        document.getElementById("output2").innerHTML=temp2
        }

    



