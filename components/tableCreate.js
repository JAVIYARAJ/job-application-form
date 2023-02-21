function displayData(data, columns) {

    let content = `<table border='1'>`;
    content += '<tr>';
    for (let i = 0; i < columns.length; i++) {
        content += `<td>${columns[i]}</td>`
    }
    content += '</tr>';

    for (let j = 0; j < data.length; j++) {
        content += '<tr>';
        for (let k = 0; k < columns.length; k++) {
            content += `<td> ${data[j][columns[k]]} </td>`
        }
        content += '</tr>';
    }
    content += '</table>';

    console.log(content);

    document.body.innerHTML = content;
}

let data = [
    {
        id: 1,
        option_name: 'relationship',
        option_value: 'single',
        option_id: '1'
    },
    {
        id: 2,
        option_name: 'relationship',
        option_value: 'maried',
        option_id: '1'
    },
    {
        id: 3,
        option_name: 'state',
        option_value: 'Gujarat',
        option_id: '2'
    },
    {
        id: 4,
        option_name: 'state',
        option_value: 'Andhra Pradesh',
        option_id: '2'
    },
    {
        id: 5,
        option_name: 'state',
        option_value: 'Assam',
        option_id: '2'
    },
    {
        id: 6,
        option_name: 'state',
        option_value: 'Bihar',
        option_id: '2'
    },
    {
        id: 7,
        option_name: 'state',
        option_value: 'Arunachal Pradesh',
        option_id: '2'
    },
    { id: 8, option_name: 'state', option_value: 'Goa', option_id: '2' },
    {
        id: 9,
        option_name: 'state',
        option_value: 'kerala',
        option_id: '2'
    },
    {
        id: 10,
        option_name: 'state',
        option_value: 'Patna',
        option_id: '2'
    },
    {
        id: 11,
        option_name: 'pref_city',
        option_value: 'rajkot',
        option_id: '3'
    },
    {
        id: 12,
        option_name: 'pref_city',
        option_value: 'surat',
        option_id: '3'
    },
    {
        id: 13,
        option_name: 'pref_city',
        option_value: 'ahemdabad',
        option_id: '3'
    },
    {
        id: 14,
        option_name: 'pref_city',
        option_value: 'patan',
        option_id: '3'
    },
    {
        id: 15,
        option_name: 'department',
        option_value: 'design',
        option_id: '4'
    },
    {
        id: 16,
        option_name: 'department',
        option_value: 'marketing',
        option_id: '4'
    },
    {
        id: 17,
        option_name: 'department',
        option_value: 'operation manager',
        option_id: '4'
    },
    {
        id: 18,
        option_name: 'department',
        option_value: 'developement',
        option_id: '4'
    },
    {
        id: 19,
        option_name: 'language',
        option_value: 'Hindi',
        option_id: '5'
    },
    {
        id: 20,
        option_name: 'language',
        option_value: 'English',
        option_id: '5'
    },
    {
        id: 21,
        option_name: 'language',
        option_value: 'Gujarati',
        option_id: '5'
    },
    {
        id: 22,
        option_name: 'language',
        option_value: 'Spanish',
        option_id: '5'
    },
    {
        id: 23,
        option_name: 'technology',
        option_value: 'java',
        option_id: '6'
    },
    {
        id: 24,
        option_name: 'technology',
        option_value: 'python',
        option_id: '6'
    },
    {
        id: 25,
        option_name: 'technology',
        option_value: 'flutter',
        option_id: '6'
    },
    {
        id: 26,
        option_name: 'technology',
        option_value: 'kotlin',
        option_id: '6'
    },
    {
        id: 27,
        option_name: 'technology',
        option_value: 'php',
        option_id: '6'
    }
];


let columns = ['id', 'option_name','option_value','option_id'];
displayData(data, columns);