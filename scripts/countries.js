// =========================
// COUNTRIES
// =========================

var countries = [ // Array of objects
    {
        name: 'USA',
        defaults: {
            budget: 1200000000000,
            research_speed: 5,
            coop: 60, // %
            infection_rate: .05,
            masks: 60,
            healthy: 314617600,
            infected: 13120000,
            dead: 262400,
            origin: false,
        },
        currents: {
            budget: 240000000000,
            research_speed: 5,
            coop: 60,
            infection_rate: .05,
            masks: 60,
            healthy: 314617600,
            infected: 13120000,
            dead: 262400,
            origin: false,
        },
    },
    {
        name: 'China',
        defaults: {
            budget: 4600000000000,
            research_speed: 5,
            coop: 90,
            infection_rate: .055,
            masks: 90,
            healthy: 1336165600,
            infected: 55720000,
            dead: 1114400,
            origin: false,
        },
        currents: {
            budget: 920000000000,
            research_speed: 5,
            coop: 90,
            infection_rate: .055,
            masks: 90,
            healthy: 1336165600,
            infected: 55720000,
            dead: 1114400,
            origin: false,
        },
    },
    {
        name: 'Germany',
        defaults: {
            budget: 462000000000,
            research_speed: 5,
            coop: 70,
            infection_rate: .04,
            masks: 70,
            healthy: 79613600,
            infected: 3320000,
            dead: 66400,
            origin: false,
        },
        currents: {
            budget: 92400000000,
            research_speed: 5,
            coop: 70,
            infection_rate: .04,
            masks: 70,
            healthy: 79680000,
            infected: 3320000,
            dead: 66400,
            origin: false,
        },
    },
    {
        name: 'Angola',
        defaults: {
            budget: 1870000000,
            research_speed: 5,
            coop: 40,
            infection_rate: .02,
            masks: 40,
            healthy: 28776000,
            infected: 1200000,
            dead: 24000,
            origin: false,
        },
        currents: {
            budget: 374000000,
            research_speed: 5,
            coop: 40,
            infection_rate: .02,
            masks: 40,
            healthy: 28776000,
            infected: 1200000,
            dead: 24000,
            origin: false,
        },
    },
];