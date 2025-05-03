{
    // generic - interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string,
            model: string;
            relaseYear: number;
        },
        smartWatch : T;
        Bike? : X
    }

    type ImilabWatch = {
        brand: string,
        model: string,
        display: string
    }

    const poorDeveloper : Developer<ImilabWatch> = {
        name: 'anik',
        computer: {
            brand: 'hp',
            model: 'nai',
            relaseYear: 2018
        },
        smartWatch: {
            brand : 'imilab',
            model: 'kw66',
            display: 'oled'
        }
        
    }

    type AppleWatch = {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }

    interface YamahaBike {
        brand: string,
        model: string,
        engineCapacity: string
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike > = {
        name: 'anik',
        computer: {
            brand: 'hp',
            model: 'nai',
            relaseYear: 2018
        },
        smartWatch: {
            brand : 'imilab',
            model: 'kw66',
            heartTrack: true,
            sleepTrack: false
        },

        Bike: {
            brand: 'Yamaha',
            model: 'r15',
            engineCapacity: '150cc'
        }
        
    }














    // 
}