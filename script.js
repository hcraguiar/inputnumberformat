window.onload = function() {
    inputNumberFormat();
}
    
function inputNumberFormat() {
    var input = document.getElementById('valor');
    input.addEventListener('input', function() {
        str = this.value.replace(/\D/g, '');
        n = parseFloat(`${str.slice(0, str.length - 2)}.${str.slice(-2)}`);
        this.value = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(n);
    })
}
