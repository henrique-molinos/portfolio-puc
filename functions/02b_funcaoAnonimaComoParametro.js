function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}

decision(
    "OK", 
    function () { console.log( "You agreed." ); },
    function () { console.log( "You cancelled the execution." ); }
)

decision(
    "Cancel",
    function () { console.log( "You agreed." ); },
    function () { console.log( "You cancelled the execution." ); }
);