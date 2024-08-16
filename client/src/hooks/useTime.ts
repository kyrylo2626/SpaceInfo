export const useTime= () => {

    const getDateTime = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const now = new Date();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        const day = days[now.getUTCDay()];
        const date = now.getUTCDate();
        const month = months[now.getUTCMonth()];
        const year = now.getUTCFullYear();

        const hours = utcHours < 10 ? '0' + utcHours : utcHours;
        const minutes = utcMinutes < 10 ? '0' + utcMinutes : utcMinutes;

        return `${hours}:${minutes} ${day}, ${date} ${month} ${year}`;
    }

    return { getDateTime }

}