
function likes(names = []) {
    let str = '';
    
    switch (names.length) {
        case 0:
            str = 'no one likes this';
            break;

        case 1: 
            str = names[0] + ' likes this';
            break;

        case 2 : case 3 :
            for (let i = 0; i < names.length - 1; i++) {
                str += `, ${names[i]}`;
            }

            str += ' and ' + names[names.length - 1] + ' like this';
            str = str.substring(2);
            break;
        
        default:
            str += names[0] + ', ' + names[1];
            str += ' and ' + (names.length - 2) + ' others like this';

            break;
    }

    return str;
}


console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
