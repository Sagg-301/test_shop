function start_flow(price) {
    let param = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=500,height=650,left=100,top=100`
    let currency = $('#currency').val()
    console.log(currency)

    if (currency == '$') {
        price = price / 80000
    } else if (currency == '€') {
        price = price / 85000
    }

    let newWin = window.open(`http://c2p.itssca.net:3201?price=${price}&currency=${currency}`, "Pagar", param);
}

function render_button(id, price, currency) {
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
    var select_style = `
        background-color: #2f7dfc;
        border: none;
        color: white;
        padding: 15px 0px 15px 0px;
        border-radius: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;`
    $('#' + id).html(`
                    <div class="row">
                        <div class="col-ls-2">
                            <select id="currency" style='${select_style}'>
                                <option value="$">$</option>
                                <option value="BsS">BsS</option>
                                <option value="€">€</option>
                            </select>
                        </div>
                        <div class="col-ls-10"><button style='${styles}' onClick="start_flow(${price}, ${currency})"><img src="./img/logos/itssca2.png" alt="logo" width="50px" height="50px"> Pagar</button></div>
                    </div>`)
}