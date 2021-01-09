document.querySelector('textarea').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        let val = this.value;
        
        this.value = val.substring(0, start) + '\t' + val.substring(end);
        
        this.selectionStart = this.selectionEnd = start + 1;
        e.preventDefault();
    }
});