module.exports = function (pool) {

    async function totalTripCount() {
        let x = await pool.query('select * from trips');
        return x.rowCount;
    }

    async function findAllRegions() {
        let x = await pool.query('select area from region');
        var list = [];

        x.rows.forEach(function (element) {
            list.push(element.area)
        });
        return list;
    }

    async function findTaxisForRegion(regionName) {
        let x = await pool.query(`select reg
        from trips 
            join taxis on taxis.id = trips.reg_id
            join region on region.id = trips.region_id
        where area = $1`, [regionName]);

        var list = [];

        x.rows.forEach(function (element){
            if(!list.includes(element.reg)){
            list.push(element.reg)
            }
        })
        return list;
    }

    async function findTripsByRegNumber(regNumber){
        let x = await pool.query(`select route_name
        from trips 
            join taxis on taxis.id = trips.reg_id
            join routes on routes.id = trips.route_id
        where reg = $1`, [regNumber]);

        var list = [];

        x.rows.forEach(function (element){
            if(!list.includes(element.route_name)){
            list.push(element.route_name)
            }
        })
        return list;
  
    }

    async function findTripsByRegion(region){
        let x = await pool.query(`select *
        from trips 
            join taxis on taxis.id = trips.reg_id
            join region on region.id = trips.region_id
        where area = $1`, [region]);

        return x.rowCount;
    }


    async function findIncomeByRegNumber(regNumber){
        let x = await pool.query(`select sum(fare)
        from trips 
            join taxis on taxis.id = trips.reg_id
            join routes on routes.id = trips.route_id
        where reg = $1`, [regNumber]);

        return x.rows[0].sum;
    }

    async function findTotalIncome(){

        let x = await pool.query(`select sum(fare)
        from trips 
            join taxis on taxis.id = trips.reg_id
            join routes on routes.id = trips.route_id`);

        return x.rows[0].sum
    }

    async function findTotalIncomeByRegion(region){
        let x = await pool.query(`select sum(fare)
        from trips 
            join region on region.id = trips.region_id
            join routes on routes.id = trips.route_id
            where area = $1`,[region]);

        return x.rows[0].sum
    }

    async function findTotalIncomePerTaxi(){
        let x = await pool.query(`select trips.id,fare from trips 
            join routes on routes.id = trips.route_id`);

        return x.rows
    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion,
    }


}