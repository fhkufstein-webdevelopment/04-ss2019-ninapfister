$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)
        //your code follows here

        //username in element speichern
        var element = document.getElementById("username");

        //wert dieses elements auslesen und in variable speichern
        var new_username = element.value;

        //dieses Element in die Liste hinzufügen
        userListBody.push(new_username);

        //die länge der Liste also die Liste in eine variable speichern
        var list = userListBody.length;

        //die tabelle ansprechen und in eine variable speichern
        var tabelle = document.getElementById("table");

        //reihe in die Tabelle hinzufügen
        var reihe = tabelle.insertRow(-1);

        //zellen in die reihen einfügen
        var zelle1 = reihe.insertCell(0);
        var zelle2 = reihe.insertCell(1);
        var zelle3 = reihe.insertCell(2);

        //in die erste zeile die aktuelle länge speichern
        zelle1.innerHTML = list;

        //in der zweiten zelle wird der USer ausgegeben
        zelle2.innerHTML = new_username;

        //in der dritten zelle ist der Button zum löschen
        zelle3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"delete\"><i class=\"fa fa-trash\"></i></button>";

        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        //Löscht de oberste Zeile einmal, dann geht es nicht mehr

        var index = document.getElementById("index").value
        document.getElementById("table").deleteRow(index+1);

    });

    //maybe some code follows here

});