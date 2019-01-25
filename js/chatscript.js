function chat() {
    appearValue();
    resetValue();
}

function resetValue() {
    // document.getElementById("user_name").value = "";
    // document.getElementById("message_text").value = "";
    $('#user_name').val('');
    $('#message_text').val('');
}

function appearValue() {

    var date = new Date();
    var myMonth = (date.getMonth() + 1).toString();
    var myDate = date.getDate().toString();
    var myMinutes = date.getMinutes().toString();
    var mySeconds = date.getSeconds().toString();

    if (myMonth < 10) {
        myMonth = '0' + myMonth;
    }
    if (myDate < 10) {
        myDate = '0' + myDate;
    }
    if (myMinutes < 10) {
        myMinutes = '0' + myMinutes;
    }
    if (mySeconds < 10) {
        mySeconds = '0' + mySeconds;
    }

    var myDate_Time = (myDate + '.' + myMonth + '.' + date.getFullYear() + ' ' +
        date.getHours() + ':' + myMinutes + ':' + mySeconds);


    var username = document.getElementById("user_name");
    var text = document.getElementById("message_text");
    var myDiv = document.createElement("Div");
    myDiv.setAttribute("id", "chat_box_innerDiv");
    var myP = document.createElement("P");
    var myH6 = document.createElement("h6");
    myH6.setAttribute("id", "inner_h6");
    var mySpan = document.createElement("Span");

    $(myH6).append(username.value);
    $(myP).append(text.value);
    $('#chat_box').append(myDiv);
    $(myDiv).append(myH6);
    $(myH6).append(mySpan);
    $(mySpan).append(myDate_Time);
    $(myDiv).append(myP);

}