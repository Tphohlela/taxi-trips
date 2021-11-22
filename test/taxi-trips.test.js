let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_tests';


const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(28, await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(['Cape Town','Gauteng','Durban'], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(['ND 980 231','NZ 045 952','ND 153 765'],await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual(['CA 123 123','CJ 122 983','CY 822 783'], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual(['BHG 567 GP','NJO 345 GP','TNP 699 GP'], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual(['Cape Town - Bellville','Cape Town - Gugulethu','Cape Town - Langa'], await taxiTrips.findTripsByRegNumber('CA 123 123'));
        assert.deepStrictEqual(['Sandton - Midrand','Alexandra - Sandton','Sandton - Randburg'], await taxiTrips.findTripsByRegNumber('NJO 345 GP'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(10, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Durban'));

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual('47.00', await taxiTrips.findIncomeByRegNumber('CA 123 123'));
        assert.deepStrictEqual('70.00', await taxiTrips.findIncomeByRegNumber('BHG 567 GP'));

    });
    
    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([   {
            "reg": "NJO 345 GP",
             "sum": "53.00"
           },
           {
             "reg": "CA 123 123",
             "sum": "47.00"
           },
           {
             "reg": "ND 980 231",
             "sum": "46.00"
           },
           {
             "reg": "CY 822 783",
             "sum": "45.00"
           },
           {
             "reg": "BHG 567 GP",
             "sum": "70.00"
           },
           {
             "reg": "NZ 045 952",
             "sum": "56.00"
           },
           {
             "reg": "ND 153 765",
             "sum": "52.00"
           },
           {
             "reg": "CJ 122 983",
             "sum": "47.00"
           },
           {
             "reg": "TNP 699 GP",
             "sum": "57.00"
           }], await taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income by region', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual('154.00', await taxiTrips.findTotalIncomeByRegion('Durban'));
    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual('473.00', await taxiTrips.findTotalIncome());
    });

    after(function () {
        pool.end();
    });

});