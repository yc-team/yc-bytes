'use strict';

function convert(size) {
    var gb = 1 << 30, // 1024 * 1024 * 1024
        mb = 1 << 20, // 1024 * 1024
        kb = 1 << 10; // 1024

    if (size >= gb) {
        return (Math.round(size/gb * 100) / 100) + 'gb';
    } else if (size >= mb) {
        return (Math.round(size/mb * 100) / 100) + 'mb';
    } else if (size >= kb) {
        return (Math.round(size/kb * 100) / 100) + 'kb';
    }

    return size + 'b';
}

module.exports = function(size){
    //check if size is number
    //then convert it
    if (typeof size == 'number') {
        return convert(size);
    }

    //1024kb -- >["1024kb", "1024", "kb"]
    var parts = size.match(/^(\d+(?:\.\d+)?) *(kb|mb|gb)$/),
        n = parseFloat(parts[1]),
        type = parts[2];

    //巧妙地采用map来转换
    var map = {
        kb: 1 << 10,
        mb: 1 << 20,
        gb: 1 << 30 
    };

    return map[type] * n;    

};