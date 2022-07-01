const db = require('../dbConfig/init')
const nodeCron = require('node-cron');

async function habitsByUserId (id){
    return new Promise(async (resolve, reject) => {
        try{
            let results = await db.query(`SELECT habits.*, users.habit_streak
                                            FROM habits
                                            JOIN users
                                            ON habits.user_id = users.id
                                            WHERE habits.user_id = $1`, [id]);
            let data = [];
            allHabits = results.rows.map(habit => data.push(habit)); 
            
            const markedHabit = () => {
                let streakCounter = 0;  
                let isMarked = [];
                
                data.map(({ is_complete }) => isMarked.push(is_complete));
                console.log(isMarked);
                
                for (let i = 0; i < isMarked.length; i++){
                    if(isMarked[i] = false){ 
                        nodeCron.schedule("0 0 0 * * *", () => {
                            streakCounter = 0;
                        })                              
                    }else{
                        streakCounter++;
                    }
                }
            }
            markedHabit();

            resolve(data);
        }catch(err){
            reject('User\'s habits not found!');
        }    
    })
}

async function display(req, res){
	try{
        const data = await habitsByUserId(req.params.id);
		res.status(200).json(data)
	}catch(err){
		res.status(500).json({ message: err.message});
	}
}

module.exports = {habitsByUserId, display};


