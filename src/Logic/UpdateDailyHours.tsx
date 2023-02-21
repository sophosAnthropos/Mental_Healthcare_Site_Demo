export const UpdateDailyHours = (): JSX.Element => {
    
    
    const getDayOfWeek = (): string => {

        switch (new Date().getDay()) {
            case 0:
                return 'Sun 8am - 4pm';
            case 1:
                return 'Mon 8am - 4pm';
            case 2:
                return 'Tues 8am - 4pm';
            case 3:
                return 'Wed 8am - 4pm';
            case 4:
                return 'Thur 8am - 4pm';
            case 5:
                return 'Fri Closed';
            case 6:
                return 'Sat Closed';
            default: 
                return 'Hours Temporarily Unavailable';
            
    
        };
    }
    


    return (
        <span
            className={`
                 text-violet-800
            `}
        >
            {getDayOfWeek()}
        </span>
    )

}