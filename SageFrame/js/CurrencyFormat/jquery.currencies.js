
/*
* Currency tools
*
* Copyright (c) 2013 Caroline Schnapp (mllegeorgesand@gmail.com)
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
*/
if (typeof Currency === 'undefined') {
    var Currency = {};
}
var Currency = {
    rates: {},
    convert: function (amount, from, to) {
        return (amount * Currency.rates[to]) / Currency.rates[from];
    }
};

getRate = function () {
    if (currencyRate != undefined) {
        var rate = $.parseJSON(currencyRate);
        $.each(rate, function (index, item) {
            Currency.rates[item.CurrencyCode] = item.CurrencyRate;
        });
    }
}();
Currency.cookie = {
    configuration: {
        expires: 1,
        path: '/',
        domain: window.location.hostname
    },
    name: 'currency' + storeID + '_' + portalID,
    write: function (currency) {
        this.destroy();
        var d = new Date();
        d.setTime(d.getTime() + (this.configuration.expires * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        var domain = "domain=" + this.configuration.domain;
        var path = "path=" + this.configuration.path;
        document.cookie = this.name + "=" + currency + "; " + expires + ";" + path;
    },
    read: function () {
        var name = this.name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    },
    destroy: function () {
        document.cookie = this.name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

Currency.money_with_currency_format = {
    "USD": "${{amount}} USD",
    "EUR": "&euro;{{amount}} EUR",
    "GBP": "&pound;{{amount}} GBP",
    "CAD": "${{amount}} CAD",
    "ARS": "${{amount_with_comma_separator}} ARS",
    "AUD": "${{amount}} AUD",
    "BBD": "${{amount}} Bds",
    "BDT": "Tk {{amount}} BDT",
    "BSD": "BS${{amount}} BSD",
    "BHD": "{{amount}}0 BHD",
    "BRL": "R$ {{amount_with_comma_separator}} BRL",
    "BOB": "Bs{{amount_with_comma_separator}} BOB",
    "BND": "${{amount}} BND",
    "BGN": "{{amount}} лв BGN",
    "MMK": "K{{amount}} MMK",
    "KYD": "${{amount}} KYD",
    "CLP": "${{amount_no_decimals}} CLP",
    "CNY": "&#165;{{amount}} CNY",
    "COP": "${{amount_with_comma_separator}} COP",
    "CRC": "&#8353; {{amount_with_comma_separator}} CRC",
    "HRK": "{{amount_with_comma_separator}} kn HRK",
    "CZK": "{{amount_with_comma_separator}} K&#269;",
    "DKK": "kr.{{amount_with_comma_separator}}",
    "DOP": "RD$ {{amount_with_comma_separator}}",
    "XCD": "EC${{amount}}",
    "EGP": "LE {{amount}} EGP",
    "XPF": "{{amount_no_decimals_with_comma_separator}} XPF",
    "FJD": "FJ${{amount}}",
    "GHS": "GH&#8373;{{amount}}",
    "GTQ": "{{amount}} GTQ",
    "GYD": "${{amount}} GYD",
    "GEL": "{{amount}} GEL",
    "HKD": "HK${{amount}}",
    "HUF": "{{amount_no_decimals_with_comma_separator}} Ft",
    "ISK": "{{amount_no_decimals}} kr ISK",
    "INR": "₹{{amount}}",
    "IDR": "Rp {{amount_with_comma_separator}}",
    "IRR": "ريال{{amount}}",
    "NIS": "{{amount}} NIS",
    "NPR": "Rs{{amount}}",
    "JMD": "${{amount}} JMD",
    "JPY": "&#165;{{amount_no_decimals}} JPY",
    "JOD": "{{amount}}0 JOD",
    "KZT": "{{amount}} KZT",
    "KES": "KSh{{amount}}",
    "KWD": "{{amount}}0 KWD",
    "LVL": "Ls {{amount}} LVL",
    "LTL": "{{amount}} Lt",
    "MXN": "$ {{amount}} MXN",
    "MYR": "RM{{amount}} MYR",
    "MUR": "Rs {{amount}} MUR",
    "MDL": "{{amount}} MDL",
    "MAD": "Dh {{amount}} MAD",
    "MNT": "{{amount_no_decimals}} MNT",
    "MZN": "Mt {{amount}} MZN",
    "ANG": "{{amount}} NA&fnof;",
    "NZD": "${{amount}} NZD",
    "NGN": "&#8358;{{amount}} NGN",
    "NOK": "kr {{amount_with_comma_separator}} NOK",
    "OMR": "{{amount_with_comma_separator}} OMR",
    "PKR": "Rs.{{amount}} PKR",
    "PYG": "Gs. {{amount_no_decimals_with_comma_separator}} PYG",
    "PEN": "S/. {{amount}} PEN",
    "PHP": "&#8369;{{amount}} PHP",
    "PLN": "{{amount_with_comma_separator}} zl PLN",
    "QAR": "QAR {{amount_with_comma_separator}}",
    "RON": "{{amount_with_comma_separator}} lei RON",
    "RUB": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB",
    "SAR": "{{amount}} SAR",
    "RSD": "{{amount}} RSD",
    "SCR": "Rs {{amount}} SCR",
    "SGD": "${{amount}} SGD",
    "SYP": "S&pound;{{amount}} SYP",
    "ZAR": "R {{amount}} ZAR",
    "KRW": "&#8361;{{amount_no_decimals}} KRW",
    "LKR": "Rs {{amount}} LKR",
    "SEK": "{{amount_no_decimals}} kr SEK",
    "CHF": "SFr. {{amount}} CHF",
    "TWD": "${{amount}} TWD",
    "THB": "{{amount}} &#xe3f; THB",
    "TZS": "{{amount}} TZS",
    "TTD": "${{amount}} TTD",
    "TRY": "{{amount}}TL",
    "UAH": "₴{{amount}} UAH",
    "AED": "Dhs. {{amount}} AED",
    "UYU": "${{amount_with_comma_separator}} UYU",
    "VEB": "Bs. {{amount_with_comma_separator}} VEB",
    "VND": "{{amount_no_decimals_with_comma_separator}} VND",
    "ZMK": "ZMK{{amount_no_decimals_with_comma_separator}}",
    "XBT": "{{amount_no_decimals}} BTC"
};

Currency.money_format = {
    "USD": "${{amount}}",
    "EUR": "&euro;{{amount}}",
    "GBP": "&pound;{{amount}}",
    "CAD": "${{amount}}",
    "ARS": "${{amount_with_comma_separator}}",
    "AUD": "${{amount}}",
    "BBD": "${{amount}}",
    "BDT": "Tk {{amount}}",
    "BSD": "BS${{amount}}",
    "BHD": "{{amount}}0 BHD",
    "BRL": "R$ {{amount_with_comma_separator}}",
    "BOB": "Bs{{amount_with_comma_separator}}",
    "BND": "${{amount}}",
    "BGN": "{{amount}} лв",
    "MMK": "K{{amount}}",
    "KYD": "${{amount}}",
    "CLP": "${{amount_no_decimals}}",
    "CNY": "&#165;{{amount}}",
    "COP": "${{amount_with_comma_separator}}",
    "CRC": "&#8353; {{amount_with_comma_separator}}",
    "HRK": "{{amount_with_comma_separator}} kn",
    "CZK": "{{amount_with_comma_separator}} K&#269;",
    "DKK": "{{amount_with_comma_separator}}",
    "DOP": "RD$ {{amount_with_comma_separator}}",
    "XCD": "${{amount}}",
    "EGP": "LE {{amount}}",
    "XPF": "{{amount_no_decimals_with_comma_separator}} XPF",
    "FJD": "${{amount}}",
    "GHS": "GH&#8373;{{amount}}",
    "GTQ": "{{amount}}",
    "GYD": "${{amount}}",
    "GEL": "{{amount}} GEL",
    "HKD": "${{amount}}",
    "HUF": "{{amount_no_decimals_with_comma_separator}}",
    "ISK": "{{amount_no_decimals}} kr",
    "INR": "₹{{amount}}",
    "IDR": "{{amount_with_comma_separator}}",
    "IRR": "ريال{{amount}}",
    "NIS": "{{amount}} NIS",
    "NPR": "Rs{{amount}}",
    "JMD": "${{amount}}",
    "JPY": "&#165;{{amount_no_decimals}}",
    "JOD": "{{amount}}0 JD",
    "KZT": "{{amount}} KZT",
    "KES": "KSh{{amount}}",
    "KWD": "{{amount}}0 KD",
    "LVL": "Ls {{amount}}",
    "LTL": "{{amount}} Lt",
    "MXN": "$ {{amount}}",
    "MYR": "RM{{amount}} MYR",
    "MUR": "Rs {{amount}}",
    "MDL": "{{amount}} MDL",
    "MAD": "{{amount}} dh",
    "MNT": "{{amount_no_decimals}} &#8366",
    "MZN": "{{amount}} Mt",
    "ANG": "&fnof;{{amount}}",
    "NZD": "${{amount}}",
    "NGN": "&#8358;{{amount}}",
    "NOK": "kr {{amount_with_comma_separator}}",
    "OMR": "{{amount_with_comma_separator}} OMR",
    "PKR": "Rs.{{amount}}",
    "PYG": "Gs. {{amount_no_decimals_with_comma_separator}}",
    "PEN": "S/. {{amount}}",
    "PHP": "&#8369;{{amount}}",
    "PLN": "{{amount_with_comma_separator}} zl",
    "QAR": "QAR {{amount_with_comma_separator}}",
    "RON": "{{amount_with_comma_separator}} lei",
    "RUB": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    "SAR": "{{amount}} SR",
    "RSD": "{{amount}} RSD",
    "SCR": "Rs {{amount}}",
    "SGD": "${{amount}}",
    "SYP": "S&pound;{{amount}}",
    "ZAR": "R {{amount}}",
    "KRW": "&#8361;{{amount_no_decimals}}",
    "LKR": "Rs {{amount}}",
    "SEK": "{{amount_no_decimals}} kr",
    "CHF": "SFr. {{amount}}",
    "TWD": "${{amount}}",
    "THB": "{{amount}} &#xe3f;",
    "TZS": "{{amount}} TZS",
    "TTD": "${{amount}}",
    "TRY": "{{amount}}TL",
    "UAH": "₴{{amount}}",
    "AED": "Dhs. {{amount}}",
    "UYU": "${{amount_with_comma_separator}}",
    "VEB": "Bs. {{amount_with_comma_separator}}",
    "VND": "{{amount_no_decimals_with_comma_separator}}₫",
    "ZMK": "K{{amount_no_decimals_with_comma_separator}}",
    "XBT": "{{amount_no_decimals}} BTC"
};

Currency.formatMoney = function (cents, format) {
    if (typeof cents == 'string') cents = cents.replace('.', '');
    var value = '';
    var patt = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || this.money_format);
    function addCommas(moneyString) {
        // return moneyString.replace(/(\d+)(\d{3}[\.,]?)/, '$1,$2');
        var parts = moneyString.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    switch (formatString.match(patt)[1]) {
        case 'amount':
            value = addCommas(floatToString(cents / 100.0, 2));
            break;
        case 'amount_no_decimals':
            value = addCommas(floatToString(cents / 100.0, 0));
            break;
        case 'amount_with_comma_separator':
            value = floatToString(cents / 100.0, 2).replace(/\./, ',');
            break;
        case 'amount_no_decimals_with_comma_separator':
            value = addCommas(floatToString(cents / 100.0, 0)).replace(/\./, ',');
            break;
    }
    return formatString.replace(patt, value);
};

function floatToString(numeric, decimals) {
    var amount = numeric.toFixed(decimals).toString();
    if (amount.match(/^\.\d+/)) { return "0" + amount; }
    else { return amount; }
};

Currency.currentCurrency = '';
Currency.format = 'money_format';

Currency.convertAll = function (oldCurrency, newCurrency, selector, format) {


    jQuery(selector || '.cssClassFormatCurrency').each(function () {

        jQuery(this).removeAttr('data-currency-' + newCurrency + '');
    
        // If the amount has already been converted, we leave it alone.
        if (jQuery(this).attr('data-currency') === newCurrency) return;
        // If we are converting to a currency that we have saved, we will use the saved amount.
        if (jQuery(this).attr('data-currency-' + newCurrency)) {
            if (jQuery(this).is("input")) {
                if (jQuery(this).attr("bc") == undefined) {
                    value = parseInt(jQuery(this).val().replace(/[^0-9]/g, ''), 10).toFixed(2);
                    jQuery(this).attr("bc", jQuery(this).val());
                }
                jQuery(this).val(Encoder.htmlDecode(jQuery(this).attr('data-currency-' + newCurrency)));

            }
            else {
                if (jQuery(this).attr("bc") == undefined) {
                    value = parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10).toFixed(2);
                    jQuery(this).attr("bc", jQuery(this).html());
                }
                jQuery(this).html(jQuery(this).attr('data-currency-' + newCurrency));
            }
        }
        else {
            // Converting to Y for the first time? Let's get to it!          
            var cents = 0.0;
            var oldFormat = Currency[format || Currency.format][oldCurrency] || '{{amount}}';
            var newFormat = Currency[format || Currency.format][newCurrency] || '{{amount}}';
            var value;
            if (jQuery(this).is("input")) {

                if (jQuery(this).attr("bc") == undefined) {
                    value = parseInt(jQuery(this).val().replace(/[^0-9]/g, ''), 10).toFixed(2);
                    jQuery(this).attr("bc", jQuery(this).val());
                } else {
                    value = parseInt(jQuery(this).attr('bc').replace(/[^0-9]/g, ''), 10).toFixed(2);
                }
            }
            else {
                if (jQuery(this).attr("bc") == undefined) {
                    value = parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10).toFixed(2);
                    jQuery(this).attr("bc", jQuery(this).html());
                } else {
                    value = parseInt(jQuery(this).attr('bc').replace(/[^0-9]/g, ''), 10).toFixed(2)
                }
            }
            if (oldFormat.indexOf('amount_no_decimals') !== -1) {
                cents = Currency.convert(value * 100, oldCurrency, newCurrency);
            }
            else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
                cents = Currency.convert(value / 10, oldCurrency, newCurrency);
            }
            else {
                cents = Currency.convert(value, oldCurrency, newCurrency);
            }
            var newFormattedAmount = Currency.formatMoney(cents, newFormat);
            if (jQuery(this).is("input")) {
                jQuery(this).prop('value', Encoder.htmlDecode(newFormattedAmount));
            }
            else {
                jQuery(this).html(newFormattedAmount);
            }
            jQuery(this).attr('data-currency-' + newCurrency, newFormattedAmount);
        }
        // We record the new currency locally.
        jQuery(this).attr('data-currency', newCurrency);
    });
    this.currentCurrency = newCurrency;
    this.cookie.write(newCurrency);
};
