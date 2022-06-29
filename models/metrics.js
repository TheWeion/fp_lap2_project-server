const Habit = require('./habit')
const User = require('./user')
const db = require('../dbConfig/init')


function habitsByUserId () {
    return new Promise(async (resolve, reject) => {
        try{
            let results = await db.query(`SELECT isComplete, users.id 
                                            FROM habits
                                            JOIN users
                                            ON habits.user_id = users.id
                                            WHERE id = $1`, [id]);
            const isMarked = results.rows.map(data => new User(data));
            resolve(isMarked);
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

        
let streakCounter = 0;

let trackHabit = async () => {
    //getting the date
    const d = new Date();
    day = d.getDate();
    //get all habits by user id
    const habitsByUser = await Habit.users;
    console.log(habitsByUser)

    if(isMarked.value = true){
        streakCounter++;
    }else{
        streakCounter = 0;
    }
}

module.exports = {display};


