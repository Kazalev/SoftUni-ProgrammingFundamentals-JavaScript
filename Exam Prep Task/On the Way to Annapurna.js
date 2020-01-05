function solve(input){

    let diary = {};
    let items = [];

    for(let line of input){
        let [ command, store, item ] = line.split('->');

        if(item !== undefined){
            let splitedItems = item.split(',');

            if(command === 'Add'){
                if(splitedItems.length > 1){
                    for(let i = 0; i < splitedItems.length; i++){
                        let currentElement = splitedItems[i];
                        
                        if(!diary[store]){
                            items = [];
                            diary[store] = items;
                            items.push(currentElement);
                        } else {
                            diary[store].push(currentElement);
                        }
                    }
                } else {
                    if(!diary[store]){
                        items = [];
                        diary[store] = items;
                        items.push(item);
                    } else {
                        diary[store].push(item);
                    }
                }
            }
        }
        if(command === 'Remove'){
            for(let key in diary){
                if(key === store){
                    delete diary[store];
                }
            }
        }
    }

    console.log(`Stores list:`);
    let sortedStores = Object.entries(diary).sort((a, b) => {
        let c = b[1].length;
        let d = a[1].length;
        if( c !== d){
            return c - d;
        } else {
            a = a[0];
            b = b[0];
            return b.localeCompare(a);
        }
    });
    
    sortedStores.forEach(element => {
        console.log(element[0]);
        let items = element[1];
        items.forEach(item => {
            console.log(`<<${item}>>`);
        });
    });
}

// solve([ 
// 'Add->Peak->Waterproof,Umbrella',
// 'Add->Groceries->Water,Juice,Food',
// 'Add->Peak->Tent',
// 'Add->Peak->Sleeping-Bag',
// 'Add->Peak->Jacket',
// 'Add->Groceries->Lighter',
// 'Remove->Groceries',
// 'Remove->Store',
// 'END' 
// ]);

solve([ 'Add->PeakSports->Map,Navigation,Compass',
'Add->Paragon->Sunscreen',
'Add->Groceries->Dried-fruit,Nuts',
'Add->Groceries->Nuts',
'Add->Paragon->Tent',
'Remove->Paragon',
'Add->Pharmacy->Pain-killers',
'END' ]
);