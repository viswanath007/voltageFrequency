import queryOverpass from '@derhuerst/query-overpass';

export default async ({tagName, tagValue}) => {
    const data = await queryOverpass(`
    [out:json][timeout:25];
    (
        node["${tagName}"="${tagValue}"](12.634978224715455,77.222900390625,13.253313014308297,77.94731140136719);
        way["${tagName}"="${tagValue}"](12.634978224715455,77.222900390625,13.253313014308297,77.94731140136719);
        relation["${tagName}"="${tagValue}"](12.634978224715455,77.222900390625,13.253313014308297,77.94731140136719);
      );
        out body;
    `)
    .then((data) => {
        if(data && data.length){
            const uniqueVoltages  = [];
            data.forEach(({tags}) => {
                const index = uniqueVoltages.findIndex(({voltage}) => 
                    voltage === tags.voltage
                );
                if(index >= 0){
                    uniqueVoltages[index].frequency++;
                } else if(tags.voltage) {
                    uniqueVoltages.push({
                        voltage: tags.voltage,
                        frequency: 1
                    })
                }
            });
            // console.log(uniqueVoltages);
            return uniqueVoltages;
        }
    })
    .catch((error) => {
        console.error(error);
    })
    // console.log('data',data);
    return data;
}