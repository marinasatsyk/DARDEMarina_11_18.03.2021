const DATABASE = [];

const database = async (callback1, callback2) => {
    // setDataLoading(true);
    try {
        const ls = localStorage.getItem('database');
        if (ls) {
            console.log('from LS');
            callback1(JSON.parse(ls));
        } else {
            const response = await fetch('./data/logements.json');
            const database = await response.json();
            localStorage.setItem('database', JSON.stringify(database));
            callback1(database);
        }
    } catch (err) {
        console.log('===== error =====', err);
    } finally {
        callback2();
    }
};

export default database;
