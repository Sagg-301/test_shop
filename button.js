function start_flow(price) {
    let param = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=500,height=650,left=100,top=100`

    let newWin = window.open("https://itsspaymentbutton.herokuapp.com/?price=5000000", "Pagar", param);
}

function render_button(id) {
    console.log('#' + id)
    var styles = `
        background-color: #2f7dfc;
        border: none;
        color: white;
        padding: 0px 20px;
        border-radius: 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;`
    $('#' + id).html(`<button style='${styles}' onClick="start_flow()"><img src="./img/logos/itssca2.png" alt="logo" width="50px" height="50px"> Pagar</button>`)
}