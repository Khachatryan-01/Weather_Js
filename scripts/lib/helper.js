class Helper {

    constructor() {
       throw new TypeError("This is Static class.")
    }

    static getWeekDay(date) {
        const today = new Date();

        if (today.getDate() == date.getDate() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
            return "Today";
        }

        return WEEK_DAYS[date.getDay()];
    }

    static getAirConditionText(index) {

        for (const qualityIndex in AIR_QUALITY) {

            if (index < qualityIndex) {
                return AIR_QUALITY[qualityIndex];
            }

        }
    }

}